Array.prototype.mapByReduce = function (callbackFunction) {
    if (typeof(callbackFunction) !== 'function')
        throw new Error('TypeError: passed object is not a function.');

    if (this.length === 0) return [];

    let result = this.reduce(function (acc, item) {
        acc.push(callbackFunction(item))
        return acc;
    }, []);

    return result;
};

// .mapByReduce()
//
// [1, 2, 4].mapByReduce(x => x**2) should return [1, 4, 16]
// ["a", "b", "cc"].mapByReduce(x => x + 2) should return ["a2", "b2", "cc2"]
// [1, "2", { three: 'three' }].mapByReduce(x => x) should return [1, "2", { three: 'three' }]
// [1, "2", { three: 'three' }].mapByReduce(() => {}) should return [undefined, undefined, undefined]
// [].mapByReduce(x => x / 0) should return []
// [1, 2, 4].mapByReduce("callbackFunction") should throw an error with specific message

describe('.mapByReduce()', () => {
    it('[1, 2, 4].mapByReduce(x => x**2)', () => {
        const result = [1, 2, 4].mapByReduce(x => x ** 2);
        assert.deepEqual(result, [1, 4, 16]);
    });

    it('["a", "b", "cc"].mapByReduce(x => x + 2)', () => {
        const result = ["a", "b", "cc"].mapByReduce(x => x + 2);
        assert.deepEqual(result, ["a2", "b2", "cc2"]);
    });

    it('[1, "2", { three: "three" }].mapByReduce(x => x)', () => {
        const result = [1, "2", { three: "three" }].mapByReduce(x => x);
        assert.deepEqual(result, [1, "2", { three: 'three' }]);
    });

    it('[1, "2", { three: "three" }].mapByReduce(() => {})', () => {
        const result = [1, "2", { three: "three" }].mapByReduce(() => { });
        assert.deepEqual(result, [undefined, undefined, undefined]);
    });

    it('[].mapByReduce(x => x / 0)', () => {
        const result = [].mapByReduce(x => x / 0);
        assert.deepEqual(result, []);
    });

    it('[1, 2, 4].mapByReduce("callbackFunction")', () => {
        expect(() => [1, 2, 4].mapByReduce("callbackFunction")).to.throw('TypeError: passed object is not a function.');
    });

    it('[1, 2, 4].mapByReduce("callbackFunction")', () => {
        expect(() => [1, 2, 4].mapByReduce("callbackFunction")).to.throw('TypeError: passed object is not a function.');
    });
});
