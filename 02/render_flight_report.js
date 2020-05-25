/**
 * Функция отрисовки данных о рейсе и его билетах
 *
 *  * проверка объекта рейса на соответствие данных в нём действительно существующим рейсам
 *
 * @param {Flight} flight объект рейса
 * @param {number} nowTime текущее время
 * @returns {boolean} удалось ли без ошибок отрендерить данные
 */
function renderFlightReport(flight, nowTime) {
    try {
        if (typeof (flight) !== 'object')
            throw new Error('Passed flight parameter is not an Object.');

        if (typeof (nowTime) !== 'number')
            throw new Error('Passed nowTime parameter is not a Number.');

        let containerElement = document.getElementById("flight-details");

        if (!containerElement)
            throw new Error('Document has no element with "flight-details" id.');

        const report = flightReport(flight.name, nowTime);

        if (report) {
            let flightReportElement = document.createElement('div');
            createFlightReportContent(report, flightReportElement);
            containerElement.appendChild(flightReportElement);
        } else {
            throw new Error('There is no flight of this number.');
        }

        const tickets = flight.tickets;

        if (!Array.isArray(tickets))
            throw new Error('Tickets attribute of passed flight object parameter is not an Array.');

        if (tickets.length !== 0) {
            let ticketsElement = document.createElement('div');
            createTicketsContent(ticketsElement);
            containerElement.appendChild(ticketsElement);
        }

        return true;
    } catch (error) {
        console.log(error);
        return false;
    }
}

function createFlightReportContent(report, flightReportElement) {
    createFlightReportHeader(flightReportElement);
    let reportTableElement = document.createElement('table');
    createFlightReportTable(report, reportTableElement);
    flightReportElement.appendChild(reportTableElement);
}

function createTicketsContent(ticketsElement) {
    createTicketsHeader(ticketsElement);
    let ticketsTableElement = document.createElement('table');
    createTicketsTableHead(ticketsTableElement);
    createTicketsTableBody(tickets, ticketsTableElement);
    ticketsElement.appendChild(ticketsTableElement);
}

function createFlightReportHeader(flightReportElement) {
    let flightReportHeaderParagraphElement = document.createElement('p');
    let flightReportHeaderBoldElement = document.createElement('b');
    const flightReportHeaderText = document.createTextNode('Flight report:');
    flightReportHeaderBoldElement.appendChild(flightReportHeaderText);
    flightReportHeaderParagraphElement.appendChild(flightReportHeaderBoldElement);
    flightReportElement.appendChild(flightReportHeaderParagraphElement);
}

function createFlightReportTable(report, reportTableElement) {
    for (let reportKey of Object.keys(report)) {
        let tableRowElement = document.createElement('tr');

        let attributeNameCellElement = document.createElement('td');
        let attributeNameCellText = document.createTextNode(`${formatKeyName(reportKey)}:`);
        attributeNameCellElement.appendChild(attributeNameCellText);

        let attributeValueCellElement = document.createElement('td');
        let attributeValueCellText = document.createTextNode(`${report[reportKey]}`);
        attributeValueCellElement.appendChild(attributeValueCellText);

        tableRowElement.appendChild(attributeNameCellElement);
        tableRowElement.appendChild(attributeValueCellElement);

        reportTableElement.appendChild(tableRowElement);
    }
}

function createTicketsHeader(ticketsElement) {
    let ticketsHeaderParagraphElement = document.createElement('p');
    let ticketsHeaderBoldElement = document.createElement('b');
    const ticketsHeaderText = document.createTextNode('Flight tickets:');
    ticketsHeaderBoldElement.appendChild(ticketsHeaderText);
    ticketsHeaderParagraphElement.appendChild(ticketsHeaderBoldElement);
    ticketsElement.appendChild(ticketsHeaderParagraphElement);
}

function createTicketsTableHead(ticketsTableElement) {
    let ticketsTableHeadElement = document.createElement('thead');
    ticketsTableElement.appendChild(ticketsTableHeadElement);

    let ticketsTableHeadRowElement = document.createElement('tr');
    ticketsTableHeadElement.appendChild(ticketsTableHeadRowElement);

    const ticketsTableHeadCellElementsNames = ['#', 'Number', 'Full name', 'Seat', 'Registered']

    for (cellElementName of ticketsTableHeadCellElementsNames) {
        let ticketsTableHeadCellElement = document.createElement('th');
        let ticketsTableHeadCellText = document.createTextNode(cellElementName);
        ticketsTableHeadCellElement.appendChild(ticketsTableHeadCellText);
        ticketsTableHeadRowElement.appendChild(ticketsTableHeadCellElement);
    }
}

function createTicketsTableBody(tickets, ticketsTableElement) {
    let ticketsTableBodyElement = document.createElement('tbody');
    ticketsTableElement.appendChild(ticketsTableBodyElement);

    for (let i = 0; i < tickets.length; i++) {
        let tableRowElement = document.createElement('tr');

        let tableRowCellIndexElement = document.createElement('td');
        let tableRowCellIndexText = document.createTextNode(`${i + 1}`);
        tableRowCellIndexElement.appendChild(tableRowCellIndexText);
        tableRowElement.appendChild(tableRowCellIndexElement);

        let tableRowCellIdElement = document.createElement('td');
        let tableRowCellIdText = document.createTextNode(`${tickets[i].id}`);
        tableRowCellIdElement.appendChild(tableRowCellIdText);
        tableRowElement.appendChild(tableRowCellIdElement);

        let tableRowCellFullNameElement = document.createElement('td');
        let tableRowCellFullNameText = document.createTextNode(`${tickets[i].fullName}`);
        tableRowCellFullNameElement.appendChild(tableRowCellFullNameText);
        tableRowElement.appendChild(tableRowCellFullNameElement);

        let tableRowCellSeatElement = document.createElement('td');
        let tableRowCellSeatText = document.createTextNode(`${tickets[i].seat}`);
        tableRowCellSeatElement.appendChild(tableRowCellSeatText);
        tableRowElement.appendChild(tableRowCellSeatElement);

        let tableRowRegisteredSeatElement = document.createElement('td');
        let tableRowCellRegisteredText = document.createTextNode(`${!!tickets[i].registrationTime}`);
        tableRowRegisteredSeatElement.appendChild(tableRowCellRegisteredText);
        tableRowElement.appendChild(tableRowRegisteredSeatElement);

        ticketsTableBodyElement.appendChild(tableRowElement);
    }
}

function formatKeyName(keyName) {
    return keyName.replace(/([A-Z])/g, " $1").toLowerCase();
}
