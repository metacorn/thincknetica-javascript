let result = [];
let input = prompt('Input text:', '');
let sentences = input.split('.');

for (let sentence_index in sentences) {
    if (sentences[sentence_index].includes('overloading')) {
        sentences[sentence_index] = sentences[sentence_index].replace(/Java/g, 'JS');
    }
}

console.log(`${sentences.join('.')}`);
