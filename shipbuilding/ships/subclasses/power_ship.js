/**
 * Функция-конструктор, возвращающая объект класса PowerShip (моторный корабль)
 *
 *  * проверка передаваемых параметров на соответствие требуемым типам данных
 *
 * @param {string} name имя корабля
 * @param {number} enginePower мощность двигателя корабля
 * @param {string} material материал корпуса корабля
 * @returns {PowerShip} созданный объект класса PowerShip
 */

function PowerShip(name, enginePower, material) {
    Ship.call(this, name);
    powerShipCheckParams(enginePower, material);
    this.enginePower = enginePower;
    this.material = material;
}

PowerShip.prototype = Object.create(Ship.prototype);
PowerShip.prototype.constructor = PowerShip;
