const buyTicketForm = document.getElementById('buy-ticket-form');

buyTicketForm.addEventListener('submit', buyTicketFormSubmitHandler);

/**
 * Обработчик отправки формы покупки билета
 * @param {KeyboardEvent} event
 */
function buyTicketFormSubmitHandler(event) {
    event.preventDefault();

    const eRegistrationFormData = {
        flightName: buyTicketForm.elements.flightName.value,
        fullName: buyTicketForm.elements.fullName.value,
        type: parseInt(buyTicketForm.elements.type.value),
        buyTime: makeTime(buyTicketForm.elements.hour.value, buyTicketForm.elements.minute.value)
    };

    console.table(eRegistrationFormData);

    try {
        const ticket = buyTicket(
            world.flights,
            eRegistrationFormData.flightName,
            eRegistrationFormData.buyTime,
            eRegistrationFormData.fullName,
            eRegistrationFormData.type
        );
        resetBuyTicketForm();
        console.table(ticket);
        // почему алерт выскакивает раньше очистки формы? но таблица при этом уже выведена в консоль?
        // пробовал выносить алерт в отдельную функцию -- не помогает
        // ставил таймаут -- алерт появляется позже, но и updateView(), вызываемый после этого блока выполняется
        // как очистить форму, показать алерт, а потом нажатия на "ОК" обновить данные о рейсах?
        alert(`Ticket ${ticket.id} on ${eRegistrationFormData.flightName} flight successfully bought!`);
    } catch (error) {
        console.error(error);
        alert(error.message);
    }

    updateView();
}

function resetBuyTicketForm() {
    buyTicketForm.reset();
    buyTicketForm.elements.type.value = 0;
}
