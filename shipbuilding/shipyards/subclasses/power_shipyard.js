function PowerShipyard(name) {
    Shipyard.call(this, name);

    this.build = function (shipName, enginePower, material) {
        return new PowerShip(shipName, enginePower, material);
    }
}

PowerShipyard.prototype = Object.create(Shipyard.prototype);
PowerShipyard.prototype.constructor = PowerShipyard;
