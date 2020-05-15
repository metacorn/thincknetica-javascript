let input = prompt('Input string:', '');
let result = input.trim().replace(/\s\s+/g, ' ');
alert(`Result string is: '${result}'`);
