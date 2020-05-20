function wordStat(text) {
    if (!isString(text))
        throw new Error('TypeError: passed object is not a String.');

    let dictionary = new Array;
    let words = text.split(' ').filter(w => w !== '');

    for (i = 0; i < words.length; i++) {
        let word = words[i];
        let sum = 0;
        for (let j = 0; j < word.length; j++) sum += parseInt(word.charCodeAt(j));
        dictionary.push({ word, sum });
    }

    return dictionary;
}

function isString(value) {
    return typeof value === 'string' || value instanceof String;
}
