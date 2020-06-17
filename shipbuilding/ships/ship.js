/**
 * Функция-конструктор, возвращающая объект класса Ship (корабль)
 *
 *  * проверка передаваемых параметров на соответствие требуемым типам данных
 *
 * @param {string} name имя корабля
 * @returns {Ship} созданный объект класса Ship
 */

function Ship(name) {
    if (typeof name !== 'string')
        throw new Error('Incorrect name parameter passed: should be a String.');

    this.name = name;
    this.workingCapacity = true;
}
