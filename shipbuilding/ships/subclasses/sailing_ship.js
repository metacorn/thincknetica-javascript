/**
 * Функция-конструктор, возвращающая объект класса SailingShip (парусный корабль)
 *
 *  * проверка передаваемых параметров на соответствие требуемым типам данных
 *
 * @param {string} name имя корабля
 * @param {number} enginePower количество мачт корабля
 * @param {number} enginePower площадь парусов корабля
 * @returns {SailingShip} созданный объект класса SailingShip
 */

function SailingShip(name, mastCount, sailsArea) {
    Ship.call(this, name);
    sailingShipCheckParams(mastCount, sailsArea);
    this.mastCount = mastCount;
    this.sailsArea = sailsArea;
}

SailingShip.prototype = Object.create(Ship.prototype);
SailingShip.prototype.constructor = SailingShip;
