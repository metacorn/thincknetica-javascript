describe('PowerShipyard', () => {
    var powerShipyard;
    var powerShip;
    var sailingShip;

    beforeEach(function () {
        powerShipyard = new PowerShipyard('shipyard name');
        powerShip = new PowerShip('power ship name', 5, 'steel');
        sailingShip = new SailingShip('sailing ship name', 7, 12);
    });

    describe('connect()', () => {
        it('should connect an instance of PowerShip', () => {
            let result = powerShipyard.connect(powerShip);
            expect(result).to.be.true;
            expect(powerShipyard.ships).to.have.members([powerShip]);
        });

        it('should connect an instance of other Ship inherited class', () => {
            let result = powerShipyard.connect(sailingShip);
            expect(result).to.be.true;
            expect(powerShipyard.ships).to.have.members([sailingShip]);
        });
    });

    describe('disconnect()', () => {
        it('should disconnect an instance of PowerShip', () => {
            powerShipyard.connect(powerShip);
            let result = powerShipyard.disconnect(powerShip);
            expect(result).to.be.true;
            expect(powerShipyard.ships).to.not.have.members([powerShip]);
        });

        it('should disconnect an instance of other Ship inherited class', () => {
            powerShipyard.connect(sailingShip);
            let result = powerShipyard.disconnect(sailingShip);
            expect(result).to.be.true;
            expect(powerShipyard.ships).to.not.have.members([sailingShip]);
        });
    });

    describe('repair()', () => {
        it('should repair an instance of PowerShip', () => {
            powerShip.workingCapacity = false;
            powerShipyard.connect(powerShip);
            let result = powerShipyard.repair(powerShip);
            expect(result).to.be.true;
            expect(powerShip.workingCapacity).to.be.true;
        });

        it('should not repair an instance of other Ship inherited class', () => {
            sailingShip.workingCapacity = false;
            powerShipyard.connect(sailingShip);
            let result = powerShipyard.repair(sailingShip);
            expect(result).to.be.false;
            expect(sailingShip.workingCapacity).to.be.false;
        });
    });

    describe('paint()', () => {
        it('should paint an instance of PowerShip', () => {
            powerShipyard.connect(powerShip);
            let result = powerShipyard.paint(powerShip, 'orange');
            expect(result).to.be.true;
            expect(powerShip).to.have.property('color', 'orange');
        });

        it('should paint an instance of other Ship inherited class', () => {
            powerShipyard.connect(sailingShip);
            let result = powerShipyard.paint(sailingShip, 'orange');
            expect(result).to.be.true;
            expect(sailingShip).to.have.property('color', 'orange');
        });
    });

    describe('exchange()', () => {
        it('should exchange instances of the same class', () => {
            otherPowerShip = new PowerShip('other power ship name', 5, 'steel');
            otherPowerShip.workingCapacity = false;
            powerShipyard.connect(powerShip);
            let result = powerShipyard.exchange(powerShip, otherPowerShip);
            expect(result).to.be.true;
            expect(powerShipyard.ships).to.not.have.members([powerShip]);
            expect(powerShipyard.ships).to.have.members([otherPowerShip]);
        });

        it('should not exchange instances of different classes', () => {
            sailingShip.workingCapacity = false;
            powerShipyard.connect(powerShip);
            let result = powerShipyard.exchange(powerShip, sailingShip);
            expect(result).to.be.false;
            expect(powerShipyard.ships).to.have.members([powerShip]);
            expect(powerShipyard.ships).to.not.have.members([sailingShip]);
        });

        it('should not exchange to capable incoming ship', () => {
            otherPowerShip = new PowerShip('other power ship name', 5, 'steel');
            otherPowerShip.workingCapacity = true;
            powerShipyard.connect(powerShip);
            let result = powerShipyard.exchange(powerShip, otherPowerShip);
            expect(result).to.be.false;
            expect(powerShipyard.ships).to.have.members([powerShip]);
            expect(powerShipyard.ships).to.not.have.members([otherPowerShip]);
        });

        it('should not exchange from incapable outgoing ship', () => {
            otherPowerShip = new PowerShip('other power ship name', 5, 'steel');
            powerShip.workingCapacity = false;
            powerShipyard.connect(powerShip);
            let result = powerShipyard.exchange(powerShip, otherPowerShip);
            expect(result).to.be.false;
            expect(powerShipyard.ships).to.have.members([powerShip]);
            expect(powerShipyard.ships).to.not.have.members([otherPowerShip]);
        });
    });

    describe('build()', () => {
        it('should return an instance of PowerShip', () => {
            const result = powerShipyard.build('power ship name', 5, 'steel');
            expect(result).to.be.an.instanceof(PowerShip);
        });
    });
});
