let result = '';
let input = prompt('Input text:', '');

do {
    last_space_index = input.substring(0, 79).lastIndexOf(' ');
    result += input.substring(0, last_space_index) + '\n';
    input = input.substring(last_space_index + 1, input.length);
} while (input.length > 80)

result += input;
console.log(`Result is:\n\n${result}`)
