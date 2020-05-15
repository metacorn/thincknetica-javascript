let input = prompt('Input date in MM/DD/YYYY format:', 'MM/DD/YYYY');

if (input.match(/^\d{1,2}\/\d{1,2}\/\d{4}$/)) {
    let month, day, year;
    [month, day, year] = input.split('/');

    if (month.length === 1) {
        month = '0' + month;
    }

    if (day.length === 1) {
        day = '0' + day;
    }

    alert(`This is ${day}.${month}.${year} in russian date format.`);
} else {
    alert('Wrong format!');
}
