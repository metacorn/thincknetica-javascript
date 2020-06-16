const SHIPYARD_FUNCTIONS_CHECK_PARAMS = {
    connect: function (ship) {
        if (!(ship instanceof Ship) || ship.constructor.name === 'Ship')
            throw new Error('Incorrect ship parameter passed: should be an instance of inherited from Ship class.');

        if (this.ships.includes(ship))
            throw new Error('This ship is at the dock already');
    },
    disconnect: function (ship) {
        if (!(ship instanceof Ship) || ship.constructor.name === 'Ship')
            throw new Error('Incorrect ship parameter passed: should be an instance of inherited from Ship class.');

        if (!this.ships.includes(ship))
            throw new Error('This ship is not at the shipyard now.');
    },
    repair: function (ship) {
        if (!(ship instanceof Ship) || ship.constructor.name === 'Ship')
            throw new Error('Incorrect ship parameter passed: should be an instance of inherited from Ship class.');

        let shipyardClass = this.constructor.name;
        let shipClass = ship.constructor.name;

        if (!shipyardClass.match(shipClass))
            throw new Error(`Incorrect ship parameter passed: could not be repaired on shipyard of ${shipyardClass} class.`);

        if (!this.ships.includes(ship))
            throw new Error('This ship is not at the shipyard now.');

        if (ship.workingCapacity)
            throw new Error('This ship has no need to be repaired.');
    },
    paint: function (ship, color) {
        if (!(ship instanceof Ship) || ship.constructor.name === 'Ship')
            throw new Error('Incorrect ship parameter passed: should be an instance of inherited from Ship class.');

        if (!this.ships.includes(ship))
            throw new Error('This ship is not at the shipyard now.');

        if (typeof color !== 'string')
            throw new Error('Incorrect color parameter passed: should be a String.');
    },
    exchange: function (outgoingShip, incomingShip) {
        if (!(outgoingShip instanceof Ship) || outgoingShip.constructor.name === 'Ship')
            throw new Error('Incorrect outgoingShip parameter passed: should be an instance of inherited from Ship class.');

        if (!(incomingShip instanceof Ship) || incomingShip.constructor.name === 'Ship')
            throw new Error('Incorrect incomingShip parameter passed: should be an instance of inherited from Ship class.');

        if (incomingShip.constructor.name !== outgoingShip.constructor.name)
            throw new Error('Incorrect incomingShip and outgoingShip parameters passed: both ships should be instances of the same class.');

        if (!this.ships.includes(outgoingShip))
            throw new Error('Incorrect outgoingShip parameter passed: should be connected to the Shipyard.');

        if (this.ships.includes(incomingShip))
            throw new Error('Incorrect incomingShip parameter passed: should not be connected to the Shipyard.');

        if (!outgoingShip.workingCapacity)
            throw new Error('Incorrect outgoingShip parameter passed: should have workingCapasity property of true.');

        if (incomingShip.workingCapacity)
            throw new Error('Incorrect incomingShip parameter passed: should have workingCapasity property of false.');
    }
}
