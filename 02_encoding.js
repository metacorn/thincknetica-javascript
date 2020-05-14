// Шестнадцатеричный код AAAAAAAABBCDDDDDD
// А.метка времени(timestamp в секундах)
// B.кластер
// C.тип
// D.идентификатор пользователя

let timestamp = 234234;
let cluster = 47;
let type = 7;
let user_id = 456;

const code = decimal_to_string(timestamp, 8) + decimal_to_string(cluster, 2) + decimal_to_string(type, 1) + decimal_to_string(user_id, 6);

alert(`code is ${code}.`) // "code is 000392fa2f70001c8."

function decimal_to_string(decimal_number, places) {
    hex_number_string = decimal_number.toString(16);
    return '0'.repeat(Math.max(places - hex_number_string.length, 0)) + hex_number_string;
};
