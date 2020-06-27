class Div extends HtmlElement {
    constructor() {
        super();
    }

    onClick(callback) {
        this._onClick = callback;
        this._target.addEventListener('click', this._onClick);
    }
}
