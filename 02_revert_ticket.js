function makeTime(hours, minutes) {
    const date = new Date();
    date.setHours(hours);
    date.setMinutes(minutes);
    date.setSeconds(0);
    date.setMilliseconds(0);
    return date.getTime();
}

/**
 * @type {Object<string, Flight>} Список всех рейсов
 */
let flights = {
    BH118: {
        name: 'BH118',
        seats: 28,
        businessSeats: 4,
        registrationStarts: makeTime(10, 0),
        registartionEnds: makeTime(15, 0),
        countOfReservations: 1,
        countOfReverts: 0,
        takeOffTime: makeTime(18, 0),
        tickets: [
            {
                id: 'BH118-B50',
                flight: 'BH118',
                fullName: 'Ivanov I. I.',
                type: 0,
                seat: 18,
                buyTime: makeTime(2, 0),
                registrationTime: null,
            }
        ]
    }
};

/**
 * Добавление рейса
 *
 * * назначение номера рейса
 * * подготовка рейса
 *   * вычисление времени регистрации
 *   * подготовка структуры Flight
 *
 * @param {Airliner} airliner Информация о самолете
 * @param {number} time Время вылета
 * @returns {Flight}
 */
// function createFlight(airliner, time) { }

/**
 * Поиск свободного места нужного типа
 *
 * Гарантирует что найдет свободное место нужного типа или вернет null
 *
 * @param {Flight} flight
 * @param {number} type
 * @returns {number} seat
 */
function findAvailableSeat(flight, type) {
    let exists;
    let seat;
    let seatsOfType = 0;

    switch (type) {
        case 0: // standart
            const availableSeats = [];

            for (let i = flight.businessSeats + 1; i <= flight.seats; i++)
                if (!flight.tickets.find(item => item.seat === i))
                    availableSeats.push(i)

            if (availableSeats.length === 0)
                return null;

            const index = Math.floor(Math.random() * availableSeats.length);
            return availableSeats[index];
        case 1: // business
            for (let i = 1; i <= flight.businessSeats; i++)
                if (!flight.tickets.find(item => item.seat === i))
                    seatsOfType++;

            if (seatsOfType === 0)
                return null;

            do {
                seat = Math.floor(Math.random() * flight.businessSeats) + 1;
                exists = flight.tickets.find(item => item.seat === seat);
            } while (exists);

            return seat;
        default:
            throw new Error(`Unknown type`)
    }
}

/**
 * Покупка билета на самолет
 *
 * * проверка рейса
 * * проверка возможности купить (время и наличие мест)
 * * сохранение данных билета в информации о рейсе
 *
 * @param {string} flightName Номер рейса
 * @param {number} buyTime Время покупки
 * @param {string} fullName Имя пассажира
 * @param {number} type Тип места
 * @returns {Ticket} Возвращаем копию билета
 */
function buyTicket(flightName, buyTime, fullName, type = 0) {
    const flight = flights[flightName];

    if (!flight)
        throw new Error('Flight not found');

    if (flight.tickets.length >= flight.seats)
        throw new Error('No seats available');

    if (buyTime > flight.registartionEnds)
        throw new Error('Time away');

    const seat = findAvailableSeat(flight, type);
    if (!seat)
        throw new Error(`No seats of type ${type} available. You can choose another type`);

    let id;
    do {
        id = flight.name + '-' + Math.random().toString().substr(2, 3);
        exists = flight.tickets.find(item => item.id === id);
    } while (exists);

    /**
     * @type {Ticket}
     */
    const ticket = {
        id,
        flight: flight.name,
        buyTime,
        fullName,
        registrationTime: null,
        type,
        seat,
    }

    flight.tickets.push(ticket);

    flight.countOfReservations += 1;

    return {
        ...ticket,
        welcome: 'Nice to choose us',
    };
}

const a = buyTicket('BH118', makeTime(5, 10), 'Petrov I. I.');
console.log(a);


function displayFlights() {
    console.log('*** List of all flights ***');
    console.table(flights);
}

function flightDetails(flightName) {
    console.log(`*** Details of flight ${flightName} ***`);
    const flight = flights[flightName];
    if (!flight) {
        console.warn('Flight not found');
        return;
    }

    console.table(flight);
    console.table(flight.tickets);
}

const hour = 60 * 60 * 1000; // ms

/**
 * Функция возврата билета
 *
 *  * проверка рейса
 *  * проверка билета
 *  * вернуть билет можно, если до рейса не менее 3 часов
 *  * вернуть билет можно, если это не бизнес-класс
 *
 * @param {string} ticket номер билета
 * @param {number} nowTime текущее время
 * @returns {boolean} удалось ли отменить билет
 */
function revertTicket(ticketId, nowTime) {
    try {
        if (!ticketId.includes('-'))
            throw new Error('Incorrect ticket number.');

        let flightNumber = ticketId.split('-')[0];
        let flight = flights[flightNumber];

        if (!flight)
            throw new Error('Flight not found.');

        let ticket = flight.tickets.find(t => t.id === ticketId);

        if (!ticket)
            throw new Error('Flight has no ticket with this id.');

        if (ticket.type === 1)
            // если я правильно понял то, что написано насчёт бизнес-класса в задании
            throw new Error('Business class tickets can not be reverted.');

        if ((flight.takeOffTime - nowTime) < hour * 3)
            throw new Error('Take off time is less than three hours from now.');

        ticketIndex = flight.tickets.indexOf(ticket);
        flight.tickets.splice(ticketIndex, 1);
        flight.countOfReverts += 1;
        flight.countOfReservations -= 1;
        console.log(`Ticket ${ticketId} reverted successfully.`)
        return true;
    } catch (error) {
        console.error(error);
        return false;
    }
}

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
 * @property {number} countOfReservations Количество всех регистраций мест
 * @property {number} countOfReverts Количество возвратов билетов
 * @property {number} percentOfReverts Процент возвратов от общего числа бронирований
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
    // если честно, не понял, чем "Количество всех регистраций мест" отличается от "Количество пассажиров, прошедших регистрацию",
    // потому не стал добавлять в отчёт. если это в задании не по ошибке, то прошу пояснить, что имеется в виду
    let countOfReservations;
    let countOfReverts = flight.countOfReverts;
    // если я правильно понял, то имеется в виду процент возвращённых билетов от общего кол-ва изначально забронированных
    // (то есть тех, которые до сих пор в брони плюс тех, которые на данный момент вернули)
    let percentOfReverts =
        ((registeredSeats + flight.countOfReverts) !== 0) ?
            (countOfReverts / (reservedSeats + countOfReverts)) * 100
        : 0

    let report = {
        flightNumber,
        registration,
        complete,
        countOfSeats,
        reservedSeats,
        registeredSeats,
        countOfReverts,
        percentOfReverts
    };

    console.table(report);
    return (report);
}
