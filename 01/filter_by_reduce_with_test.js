Array.prototype.filterByReduce = function (callbackFunction) {
    if (typeof (callbackFunction) !== 'function')
        throw new Error('TypeError: passed object is not a function.');

    if (this.length === 0) return [];

    let result = this.reduce(function (acc, item) {
        if (callbackFunction(item)) acc.push(item);
        return acc;
    }, []);

    return result;
};

// .filterByReduce()
//
// [1, 2, 4].filterByReduce(x => x > 2) should return [4]
// [1, 2, 4].filterByReduce(x => x <= 2) should return [1, 2]
// ["a", "b", "cc"].filterByReduce(x => x.length === 2) should return ["cc"]
// ["a", "b", "cc"].filterByReduce(x => x.length === 3) should return []
// [1, "2", { three: "three" }].filterByReduce(x => typeof(x) === "object") should return [{ three: 'three' }]
// [1, "2", { three: "three" }].filterByReduce(() => true) should return [1, "2", { three: "three" }]
// [1, "2", { three: "three" }].filterByReduce(() => false) should return []
// [].filterByReduce(x => x / 0 === 1) should return []
// [1, 2, 4].filterByReduce("callbackFunction") should throw an error with specific message

describe('.filterByReduce()', () => {
    it('[1, 2, 4].filterByReduce(x => x > 2)', () => {
        const result = [1, 2, 4].filterByReduce(x => x > 2);
        assert.deepEqual(result, [4]);
    });

    it('[1, 2, 4].filterByReduce(x => x <= 2)', () => {
        const result = [1, 2, 4].filterByReduce(x => x <= 2);
        assert.deepEqual(result, [1, 2]);
    });

    it('["a", "b", "cc"].filterByReduce(x => x.length === 2)', () => {
        const result = ["a", "b", "cc"].filterByReduce(x => x.length === 2);
        assert.deepEqual(result, ["cc"]);
    });

    it('["a", "b", "cc"].filterByReduce(x => x.length === 3)', () => {
        const result = ["a", "b", "cc"].filterByReduce(x => x.length === 3);
        assert.deepEqual(result, []);
    });

    it('[1, "2", { three: "three" }].filterByReduce(x => typeof(x) === "object")', () => {
        const result = [1, "2", { three: "three" }].filterByReduce(x => typeof (x) === "object");
        assert.deepEqual(result, [{ three: "three" }]);
    });

    it('[1, "2", { three: "three" }].filterByReduce(() => true)', () => {
        const result = [1, "2", { three: "three" }].filterByReduce(() => true);
        assert.deepEqual(result, [1, "2", { three: "three" }]);
    });

    it('[1, "2", { three: "three" }].filterByReduce(() => true)', () => {
        const result = [1, "2", { three: "three" }].filterByReduce(() => false);
        assert.deepEqual(result, []);
    });

    it('[].filterByReduce(x => x / 0 === 1)', () => {
        const result = [].filterByReduce(x => x / 0 === 1);
        assert.deepEqual(result, []);
    });

    it('[1, 2, 4].mapByReduce("callbackFunction")', () => {
        expect(() => [1, 2, 4].filterByReduce("callbackFunction")).to.throw('TypeError: passed object is not a function.');
    });
});
