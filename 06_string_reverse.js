let result = '';
let input = prompt('Input text:', '');
for (let i = 0; i < input.length; i++) result = input[i] + result;
alert(`Reversed result is '${result}'.`);
