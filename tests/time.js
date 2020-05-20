/**
 * Конвертируем время из Американского в Российский формат
 *
 * @params {string} value Время в Американском формате
 * @returns {string} Время в Российском формате
 */
function timeFormat(value) {
    let hours, minuts = 0;
    let isPm = null;
    let first, second;

    if (!value)
        return 'invalid';

    if (value.includes(':')) {
        [first, second] = value.split(':');
    } else if (value.includes('.')) {
        const match = value.split('.');
        first = match[0];
        second = match[1];
    } else if (value.includes('-')) {
        const match = value.split('-');
        first = match[0];
        second = match[1];
    } else {
        return 'invalid';
    }

    hours = Number(first);
    const match = second.split(' ');
    if (match.length < 2)
        return 'invalid';
    minuts = +match[0]

    if (match[1].trim() == 'am')
        isPm = false;
    if (match[1].trim() == 'pm')
        isPm = true;

    console.log(hours, minuts, isPm);

    if (isNaN(hours))
        return 'invalid';
    if (isNaN(minuts))
        return 'invalid';
    if (isPm === null)
        return 'invalid';

    if (hours === 0)
        hours = 12;

    if (hours < 1 || hours > 12)
        return 'invalid';

    if (minuts < 0 || minuts >= 60)
        return 'invalid';

    if (isPm)
        hours += 12;

    return hours.toString().padStart(2, '0')
        + ':'
        + minuts.toString().padStart(2, '0');
}
