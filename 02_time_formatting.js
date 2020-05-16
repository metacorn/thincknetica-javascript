let hour, minute;
let amFlag = pmFlag = invalidInputFlag = false;
let input = prompt('Input time:', '').toLowerCase();
[hour, minute] = input.split(/[.:-]+/).map(s => parseInt(s));
let letter_appendix = input.replace(/[^a-zA-Z]+/g, '');

if (letter_appendix === 'am') {
    amFlag = true;
} else if (letter_appendix === 'am') {
    pmFlag = true;
} else if (letter_appendix === '') {
} else {
    invalidInputFlag = true;
}

if (minute > 59) {
    invalidInputFlag = true;
} else if ((amFlag || pmFlag) && (hour === 0 || hour > 12))  {
    invalidInputFlag = true;
} else if ((!amFlag && !pmFlag) && (hour > 23)) {
    invalidInputFlag = true;
}

if (pmFlag) hour += 12;

if (invalidInputFlag) {
    alert('Invalid time input.')
} else {
    alert(`Time is ${String(hour).padStart(2, '0')}:${String(minute).padStart(2, '0')}.`);
}
