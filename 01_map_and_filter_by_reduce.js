Array.prototype.map_by_reduce = function (callbackFunction) {
    if (this.length === 0) return [];
    let result = [callbackFunction(this[0])];
    this.reduce((acc, item) => result.push(callbackFunction(item)));
    return result;
};

Array.prototype.filter_by_reduce = function (callbackFunction) {
    if (this.length === 0) return [];
    let result = new Array;
    if (callbackFunction(this[0])) result.push(this[0]);

    this.reduce(function(acc, item) {
        if (callbackFunction(item)) result.push(item);
    });

    return result;
};
