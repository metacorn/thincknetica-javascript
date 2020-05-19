function codesSummator(text) {
    let dictionary = new Array;
    let words = text.split(' ');

    for (i = 0; i < words.length; i++) {
        let word = words[i];
        let codesSum = 0;

        for (let j = 0; j < word.length; j++) {
            codesSum += parseInt(word.charCodeAt(j));
        }

        dictionary.push({
            word: word,
            sum: codesSum
        });
    }

    return dictionary;
}
