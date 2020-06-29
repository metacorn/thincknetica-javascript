class CustomPromise {
    constructor(callback) {
        this.__callback__ = callback;
        this.state = 'pending';
        this.__successCallbacks__ = [];
        this.__errorCallbacks__ = [];
        this.__result__ = null;

        setTimeout(() => {
            callback(this.__resolve__.bind(this), this.__reject__.bind(this));
        }, 0);
    }

    set state(value) {
        if (!((this.__state__ === undefined && value === 'pending') || (this.__state__ === 'pending' && (value === 'fulfilled' || value === 'rejected'))))
            throw new Error('Incorrect CustomPromise state transition.');

        this.__state__ = value;
    }

    then(successCallback, errorCallback) {
        let nextCustomPromise = new CustomPromise((resolve, reject) => {
            const execute = (result) => {
                try {
                    if (successCallback) { resolve(successCallback(result)) };
                    if (errorCallback) { reject(errorCallback(result)) };
                } catch(error) {
                    reject(error)
                }
            }

            if (successCallback) { this.__successCallbacks__.push(execute) };
            if (errorCallback) { this.__errorCallbacks__.push(execute) };
            if (this.__state__ === 'fulfilled' || this.__state__ === 'rejected') { execute(this.__result__) };
        });

        return nextCustomPromise;
    }

    catch(errorCallback) {
        this.then(null, errorCallback);
    }

    __resolve__(result) {
        this.__result__ = result;
        this.__successCallbacks__.forEach(callback => callback(result));
        this.state = 'fulfilled';
    }

    __reject__(error) {
        this.__result__ = error;
        this.__errorCallbacks__.forEach(callback => callback(result));
        this.state = 'rejected';
    }

    static resolve(result) {
        return new CustomPromise((resolve, reject) => {
            resolve(result)
        });
    }

    static reject(error) {
        return new CustomPromise((resolve, reject) => {
            reject(error)
        });
    }
}
