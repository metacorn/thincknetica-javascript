const hour = 60 * 60 * 1000 // ms

/**
 * Функция пробует произвести электронную регистрацию пассажира
 *
 *  * проверка билета
 *  * проверка данных пассажира
 *  * электронную регистрацию можно произвести только в период от 5 до 1 часа до полета
 *
 * @param {string} ticketId номер билета
 * @param {string} fullName имя пассажира
 * @param {number} nowTime текущее время
 * @returns boolean успешна ли регистрация
 */
function eRegistration(ticketId, fullName, nowTime) {
    try {
        if (!ticketId.includes('-'))
            throw new Error('Incorrect ticket number.');

        let flightNumber = ticketId.split('-')[0];
        let flight = flights[flightNumber];

        if (!flight)
            throw new Error('Flight not found.');

        let tickets = flight.tickets;
        let ticket = tickets.find(t => t.id === ticketId);

        if (!ticket)
            throw new Error('There is no reserved ticket with this id on the flight.');

        if (ticket.fullName !== fullName)
            throw new Error('Full name does not match.');

        let registrationAllowedTime =
            // добавил свойство `takeOffTime` в объект с рейсом
            ((flight.takeOffTime - nowTime) > 1 * hour)
            && ((flight.takeOffTime - nowTime) < 5 * hour);

        if (!registrationAllowedTime)
            throw new Error('Registration is not allowed now.');

        ticket.registrationTime = nowTime;
        console.log(`Ticket ${ticketId} registered successfully.`)
        return true;
    } catch (error) {
        console.error(error);
        return false;
    }
}
