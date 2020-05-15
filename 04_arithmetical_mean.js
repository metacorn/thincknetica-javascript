let sum = 0;
let nanCounter = 0;
let current_arithmetical_mean;

for (let i = 0; true; i++) {
    let input = prompt('Input a number:', '');
    if (input.trim() === '') break;
    let number = Number(input);
    (Number.isNaN(number)) ? nanCounter++ : sum += number;
    current_arithmetical_mean = sum / (i + 1 - nanCounter);

    if (Number.isNaN(current_arithmetical_mean)) {
        console.log('Arithmetical mean can not be defined yet.');
    } else {
        console.log(`Current arithmetical mean is ${current_arithmetical_mean}`);
    }
}

if (Number.isNaN(current_arithmetical_mean) || current_arithmetical_mean === undefined) {
    alert('There is no any input number for arithmetical mean estimation.');
} else {
    alert(`Overall arithmetical mean is ${current_arithmetical_mean}.`);
}
