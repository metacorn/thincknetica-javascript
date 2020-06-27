class HtmlElement {
    constructor() {
        this.rendered = false;
        this._element = document.createElement('template');
    }

    set target(target) {
        if (!(target instanceof Element))
            throw new TypeError('Incorrect target parameter passed: should be an instance of Element class.');

        this._target = target;
    }

    set template(template) {
        if (typeof template !== 'string')
            throw new TypeError('Incorrect template parameter passed: should be a String.');

        this._template = template;
        this.updateContent();
    }

    set variables(variables) {
        if (typeof variables !== 'object' || variables === null)
            throw new TypeError('Incorrect variables parameter passed: should be an Object.');

        this._variables = variables;
        this.updateContent();
    }

    set styles(styles) {
        if (typeof styles !== 'object' || styles === null)
            throw new TypeError('Incorrect styles parameter passed: should be an Object.');

        this._styles = styles;
        this.updateStyles();
    }

    _render() {
        if (this._content) this._target.innerHTML = this._content;
        this._rendered = true;
    }

    _unrender() {
        this._target.innerHTML = '';
        this._rendered = false;
    }

    render() {
        this._render();
    }

    unrender() {
        this._unrender();
    }

    rerender() {
        this.unrender();
        this.render();
    }

    updateContent() {
        this._content = this.stringifyElement();
        if (this._rendered) this.rerender();
    }

    updateStyles() {
        this._target.style.cssText = this.stringifyStyles();
    }

    stringifyElement() {
        try {
            let result = this._template;
            let variables = this._variables;
            if (!variables) return result;
            Object.keys(variables).forEach(key => result = result.replace(`{{${key}}}`, variables[key]));
            return result;
        } catch(error) {
            console.log(error);
            return null;
        }
    }

    stringifyStyles() {
        try {
            let result = '';
            let styles = this._styles;
            if (!styles) return '';
            Object.keys(styles).forEach(key => result += `${key}: ${styles[key]};`);
            return result;
        } catch (error) {
            console.log(error);
            return null;
        }
    }
}
