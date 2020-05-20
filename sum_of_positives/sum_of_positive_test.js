// [1, -1, 5] should return { count: 2, sum: 6 }
//
// [3, 0] should return { count: 1, sum: 3 }
//
// [-1, 0, -5] should return { count: 0, sum: 0 }
//
// [null, 4, "eight"] should return { count: 1, sum: 4 }
//
// [] should return { count: 0, sum: 0 }
//
// "array_of_numbers" should throw an error with specific message
//
// 123 should throw an error with specific message

describe('sumOfPositive', () => {
    it('[1, -1, 5]', () => {
        const result = sumOfPositive([1, -1, 5]);
        assert.deepEqual(result, {
            count: 2,
            sum: 6
        });
    });

    it('[3, 0]', () => {
        const result = sumOfPositive([3, 0]);
        assert.deepEqual(result, {
            count: 1,
            sum: 3
        });
    });

    it('[-1, 0, -5]', () => {
        const result = sumOfPositive([-1, 0, -5]);
        assert.deepEqual(result, {
            count: 0,
            sum: 0
        });
    });

    it('[null, 4, "eight"]', () => {
        const result = sumOfPositive([null, 4, "eight"]);
        assert.deepEqual(result, {
            count: 1,
            sum: 4
        });
    });

    it('[]', () => {
        const result = sumOfPositive([]);
        assert.deepEqual(result, {
            count: 0,
            sum: 0
        });
    });

    it('"array_of_numbers"', () => {
        expect(function () {
            sumOfPositive("array_of_numbers");
        }).to.throw('TypeError: passed object is not an Array.');
    });

    it('123', () => {
        expect(function () {
            sumOfPositive(123);
        }).to.throw('TypeError: passed object is not an Array.');
    });
});
