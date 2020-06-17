/**
 * Функция-конструктор, возвращающая объект класса Shipyard (верфь)
 *
 *  * проверка передаваемых параметров на соответствие требуемым типам данных
 *
 * @param {string} name имя верфи
 * @returns {Shipyard} созданный объект класса Shipyard
 */

function Shipyard(name) {
    if (typeof name !== 'string')
        throw new Error('Incorrect name parameter passed: should be a String.');

    this.name = name;
    this.ships = [];

    this.connect = function (ship) {
        try {
            SHIPYARD_FUNCTIONS_CHECK_PARAMS.connect.apply(this, arguments);
            this.ships.push(ship);
            return true;
        } catch (error) {
            console.log(error);
            return false;
        }
    }

    this.disconnect = function (ship) {
        try {
            SHIPYARD_FUNCTIONS_CHECK_PARAMS.disconnect.apply(this, arguments);
            this.ships = this.ships.filter((item) => item !== ship);
            return true;
        } catch (error) {
            console.log(error);
            return false;
        }
    }

    this.repair = function (ship) {
        try {
            SHIPYARD_FUNCTIONS_CHECK_PARAMS.repair.apply(this, arguments);
            ship.workingCapacity = true;
            return true;
        } catch (error) {
            console.log(error);
            return false;
        }
    }

    this.paint = function (ship, color) {
        try {
            SHIPYARD_FUNCTIONS_CHECK_PARAMS.paint.apply(this, arguments);
            ship.color = color;
            return true;
        } catch (error) {
            console.log(error);
            return false;
        }
    }

    this.exchange = function (outgoingShip, incomingShip) {
        try {
            SHIPYARD_FUNCTIONS_CHECK_PARAMS.exchange.apply(this, arguments);
            this.ships = this.ships.filter((item) => item !== outgoingShip);
            this.ships.push(incomingShip);
            return true;
        } catch (error) {
            console.log(error);
            return false;
        }
    }
}
