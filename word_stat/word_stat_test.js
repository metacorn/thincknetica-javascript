// "Lorem ipsum dolor sit amet." should return
// [
//     { word: 'Lorem', sum: 511 },
//     { word: 'ipsum', sum: 558 },
//     { word: 'dolor', sum: 544 },
//     { word: 'sit', sum: 336 },
//     { word: 'amet.', sum: 469 }
// ]
//
// "a b c d e" should return
// [
//     { word: 'a', sum: 97 },
//     { word: 'b', sum: 98 },
//     { word: 'c', sum: 99 },
//     { word: 'd', sum: 100 },
//     { word: 'e', sum: 101 }
// ]
//
// "      " should return []
//
// "   Lorem    ipsum   " should return
// [
//     { word: 'Lorem', sum: 511 },
//     { word: 'ipsum', sum: 558 }
// ]
//
// 123 should throw an error with specific message
//
// [ "Lorem", "ipsum" ] should throw an error with specific message

describe('"Lorem ipsum dolor sit amet."', () => {
    it('[1, -1, 5]', () => {
        const result = wordStat("Lorem ipsum dolor sit amet.");
        assert.deepEqual(result, [
            { word: 'Lorem', sum: 511 },
            { word: 'ipsum', sum: 558 },
            { word: 'dolor', sum: 544 },
            { word: 'sit', sum: 336 },
            { word: 'amet.', sum: 469 }
        ]);
    });

    it('"a b c d e"', () => {
        const result = wordStat("a b c d e");
        assert.deepEqual(result, [
            { word: 'a', sum: 97 },
            { word: 'b', sum: 98 },
            { word: 'c', sum: 99 },
            { word: 'd', sum: 100 },
            { word: 'e', sum: 101 }
        ]);
    });

    it('"      "', () => {
        const result = wordStat("      ");
        assert.deepEqual(result, []);
    });

    it('"   Lorem    ipsum   "', () => {
        const result = wordStat("   Lorem    ipsum   ");
        assert.deepEqual(result, [
            { word: 'Lorem', sum: 511 },
            { word: 'ipsum', sum: 558 }
        ]);
    });

    it('123', () => {
        expect(function () {
            wordStat(123);
        }).to.throw('TypeError: passed object is not a String.');
    });

    it('[ "Lorem", "ipsum" ]', () => {
        expect(function () {
            wordStat(["Lorem", "ipsum"]);
        }).to.throw('TypeError: passed object is not a String.');
    });
});
