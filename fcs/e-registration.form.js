const eRegistrationForm = document.getElementById('e-registration-form');

eRegistrationForm.addEventListener('submit', eRegistrationFormSubmitHandler);

/**
 * Обработчик отправки формы
 * @param {KeyboardEvent} event
 */
function eRegistrationFormSubmitHandler(event) {
    // прерываем всплытие что бы форма не отправлялась
    event.preventDefault();

    const eRegistrationFormData = {
        ticket: eRegistrationForm.elements.ticket.value,
        fullName: eRegistrationForm.elements.fullname.value,
    };

    try {
        eRegistration(world.flights, eRegistrationFormData.ticket, eRegistrationFormData.fullName);
        alert('You successfully registered');
    } catch (error) {
        console.error(error);
        alert(error.message);
    }

    updateView();
}

const input = document.getElementsByTagName('input')[0];

input.addEventListener('keydown', handler);
// input.addEventListener('keypress', handler);
// input.addEventListener('keyup', handler);

window.addEventListener('keydown', handler);

/**
 * @param {KeyboardEvent} event
 */
function handler(event) {
    // console.log(event.type, event.key, event.code);

    if (event.code == 'KeyS' && event.ctrlKey) {
        event.preventDefault();

    }
}

