/**
 * Функция-конструктор, возвращающая объект класса Dock
 *
 *  * проверка передаваемых параметров на соответствие требуемым типам данных
 *
 * @param {string} name имя пристани
 * @param {object} position координаты х и y пристани
 * @returns {Dock} созданный объект класса Dock
 */

function Dock(name, position) {
    if (typeof name !== 'string')
        throw new Error('Incorrect name parameter passed: should be a String.');

    if (
        typeof position !== 'object'
        || !position.hasOwnProperty('x')
        || !position.hasOwnProperty('y')
        || typeof position.x !== 'number'
        || typeof position.y !== 'number'
    )
        throw new Error("Incorrect position parameter passed: should be an Object with properties 'x' and 'y' of Number type.");

    this.name = name;
    this.position = position;
    this.ships = [];

    this.moor = function (ship) {
        try {
            if (!(ship instanceof Ship))
                throw new Error('Incorrect ship parameter passed: should be an instance of Ship.');

            if (this.position.x !== ship.position.x || this.position.y !== ship.position.y)
                throw new Error('This ship is not at the dock location now.');

            if (this.ships.includes(ship))
                throw new Error('This ship is at the dock already');

            ship.dropAnchor();
            this.ships.push(ship);
            return true;
        } catch (error) {
            console.log(error);
            return false;
        }
    }

    this.unmoor = function (ship) {
        try {
            if (!(ship instanceof Ship))
                throw new Error('Incorrect ship parameter passed: should be an instance of Ship.');

            if (!this.ships.includes(ship))
                throw new Error('This ship is not at the dock now.');

            ship.riseAnchor();
            this.ships = this.ships.filter((item) => item !== ship);
            return true;
        } catch (error) {
            console.log(error);
            return false;
        }
    }
}
