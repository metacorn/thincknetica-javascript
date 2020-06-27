class Input extends HtmlElement {
    constructor() {
        super();
    }

    onInput(callback) {
        this._onInput = callback;
        this._target.addEventListener('input', this._onInput);
    }

    onFocus(callback) {
        this._onFocus = callback;
        this._target.addEventListener('focus', this._onFocus);
    }
}
