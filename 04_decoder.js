const keyCodeA = 'a'.charCodeAt(0);
const key = 'sqnzbeuigvxtmhfpdcjyoakwlr';
let input = prompt('Input encoded text:', '').toLocaleLowerCase();
let result = '';

for (let index = 0; index < input.length; index++) {
    let letter_index = key.indexOf(input[index]);
    result += (letter_index >= 0 && letter_index <= 25)
        ? String.fromCharCode(letter_index + keyCodeA)
        : input[index];
}

console.log(result);
