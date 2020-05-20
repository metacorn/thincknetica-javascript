Array.prototype.mapByReduce = function (callbackFunction) {
    if (this.length === 0) return [];

    let result = this.reduce(function (acc, item) {
        acc.push(callbackFunction(item))
        return acc;
    }, []);

    return result;
};

Array.prototype.filterByReduce = function (callbackFunction) {
    if (this.length === 0) return [];

    let result = this.reduce(function (acc, item) {
        if (callbackFunction(item)) acc.push(item);
        return acc;
    }, []);

    return result;
};
