const vowels = 'aeiou';
const consonants = 'bcdfghjklmnpqrstvwxyz';
let vowels_counter = consonants_counter = 0;

let input = prompt('Input text:', '').toLowerCase();

for (let i = 0; i < input.length; i++) {
    if (vowels.includes(input[i])) {
        vowels_counter++;
    } else if (consonants.includes(input[i])) {
        consonants_counter++;
    }
}

alert(`Vowels count is ${vowels_counter}, consonants count is ${consonants_counter}.`);
