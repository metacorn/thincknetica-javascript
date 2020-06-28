const INPUT_ELEMENT = document.querySelector('input#query');
const RESULT_ELEMENT = document.querySelector('div#result-container');

const REQUEST_DELAY = 500; // ms
let timerId;

const REQUEST_URL = 'https://api.giphy.com/v1/gifs/search';
const API_KEY = 'PESbXNCqBXksnGaCUEa2fCVfudej1MUq';

let cachedResults = {};

const request = query => {
    return fetch(`${REQUEST_URL}?api_key=${API_KEY}&q=${query}`).then(result => {
        return result.json();
    });
};

const getResult = async (query) => {
    try {
        if (cachedResults[query]) {
            console.log(`From cache for "${query}" query.`);
            return cachedResults[query];
        }

        let result = await request(query);
        result = result.data;
        cachedResults[query] = result;
        console.log(`By request to Giphy API for "${query}" query.`);
        return result;
    } catch(error) {
        console.log(error);
        return null;
    }
}

const render = result => {
    let resultHtml = '';
    result.forEach((element) => resultHtml += `<p><img src="${element.images.fixed_height_small.url}"/></p>`);
    RESULT_ELEMENT.innerHTML = resultHtml;
};

const throttleFunction = function (callback, delay) {
    return function wrapper(...args) {
        if (timerId) return;

        timerId = setTimeout(function () {
            callback.apply(this, args);
            timerId = undefined;
        }, delay);
    }
};

INPUT_ELEMENT.addEventListener('input', throttleFunction(async (event) => {
    let result = await getResult(event.target.value);
    if (result) render(result);
}, REQUEST_DELAY));
