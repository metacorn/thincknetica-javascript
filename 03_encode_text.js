function encodeText(text) {
    let dictionary = new Array;
    let words = text.split(' ');

    for (let i = 0; i < words.length; i++) {
        let existing_record = dictionary.find(record => record.word === words[i]);

        if (!existing_record) {
            do {
                code = Math.random().toString(16).substr(2, 4);
            } while (dictionary.map(record => record.code).includes(code));

            dictionary.push({word: words[i], count: 1, code: code});
        } else {
            existing_record.count += 1;
        }
    }

    let encodedText = words.map(function(word) {
        return dictionary.find(record => record.word === word).code;
    }).join(',');

    let result = {
        dictionary,
        encodedText
    }

    return result;
}
