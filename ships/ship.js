/**
 * Функция-конструктор, возвращающая объект класса Ship
 *
 *  * проверка передаваемых параметров на соответствие требуемым типам данных
 *
 * @param {string} name название корабля
 * @param {string} model название модели
 * @param {object} position текущме координаты x и y
 * @returns {Ship} созданный объект класса Ship
 */

function Ship(name, model, position) {
    if (typeof name !== 'string')
        throw new Error('Incorrect name parameter passed: should be a String.');

    if (typeof model !== 'string')
        throw new Error('Incorrect model parameter passed: should be a String.');

    if (
        typeof position !== 'object'
        || !position.hasOwnProperty('x')
        || !position.hasOwnProperty('y')
        || typeof position.x !== 'number'
        || typeof position.y !== 'number'
    )
        throw new Error("Incorrect position parameter passed: should be an Object with properties 'x' and 'y' of Number type.");

    let _isAnchorDroped = false;

    this.name = name;
    this.model = model;
    this.position = position;
    this.distance = 0;

    this.move = function (direction) {
        try {
            if (this.isAnchorDropped())
                throw new Error('Anchor should be risen for the ship motion.');

            switch (direction) {
                case 'n':
                    this.position.y += 1;
                    break;
                case 'e':
                    this.position.x += 1;
                    break;
                case 's':
                    this.position.y -= 1;
                    break;
                case 'w':
                    this.position.x -= 1;
                    break;
                default:
                    throw new Error("Incorrect direction parameter passed: should be a String consisting of 'n', 'e', 's' or 'w'.");
            }

            return true;
        } catch (error) {
            console.log(error);
            return false;
        }
    }

    this.moveTo = function (position) {
        try {
            if (this.isAnchorDropped())
                throw new Error('Anchor should be risen for the ship motion.');

            if (
                typeof position !== 'object'
                || !position.hasOwnProperty('x')
                || !position.hasOwnProperty('y')
                || typeof position.x !== 'number'
                || typeof position.y !== 'number'
            )
                throw new Error("Incorrect position parameter passed: should be an Object with properties 'x' and 'y' of Number type.");

            if (this.position === position)
                throw new Error('The ship is at the place already.');

            this.position = position;
            return true;
        } catch (error) {
            console.log(error);
            return false;
        }
    }

    this.isAnchorDropped = function () {
        return _isAnchorDroped;
    }

    this.riseAnchor = function () {
        if (!this.isAnchorDropped()) {
            console.log('Anchor is risen already.');
            return false;
        } else {
            _isAnchorDroped = false;
            return true;
        }
    }
    this.dropAnchor = function () {
        if (this.isAnchorDropped()) {
            console.log('Anchor is dropped already.');
            return false;
        } else {
            _isAnchorDroped = true;
            return true;
        }
    }
}
