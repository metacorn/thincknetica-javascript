function SailingShipyard(name) {
    Shipyard.call(this, name);

    this.build = function (shipName, mastCount, sailsArea) {
        return new SailingShip(shipName, mastCount, sailsArea);
    }
}

SailingShipyard.prototype = Object.create(Shipyard.prototype);
SailingShipyard.prototype.constructor = SailingShipyard;
