for (let row_count = 0; row_count < 9; row_count++) {
    let row_string = '';

    for (let col_count = 0; col_count < 9; col_count++) {
        current_number = (row_count + 1) * (col_count + 1);
        row_string += String(current_number).padStart(3, ' ');
    }

    console.log(row_string);
}
