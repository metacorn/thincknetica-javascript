/**
 * Отчет о рейсе на данный момент
 *
 * @typedef {Object} Report
 * @property {string} flightNumber Номер рейса
 * @property {boolean} registration Доступна регистрация на самолет
 * @property {boolean} complete Регистрация завершена или самолет улетел
 * @property {number} countOfSeats Общее количество мест
 * @property {number} reservedSeats Количество купленных (забронированных) мест
 * @property {number} registeredSeats Количество пассажиров, прошедших регистрацию
 */

/**
* Функция генерации отчета по рейсу
*
*  * проверка рейса
*  * подсчет
*
* @param {string} flightNumber номер рейса
* @param {number} nowTime текущее время
* @returns {Report} отчет
*/
function flightReport(flightNumber, nowTime) {
    let flight = flights[flightNumber];

    if (!flight)
        throw new Error('Flight not found.');

    let registration = (flight.registrationStarts < nowTime) && (nowTime < flight.registrationEnds);
    let complete = flight.registrationEnds < nowTime;
    let countOfSeats = flight.seats;
    let reservedSeats = flight.tickets.length;
    let registeredSeats = flight.tickets.filter(t => t.registrationTime).length;

    let report = {
        flightNumber,
        registration,
        complete,
        countOfSeats,
        reservedSeats,
        registeredSeats
    };

    console.table(report);
    return(report);
}
