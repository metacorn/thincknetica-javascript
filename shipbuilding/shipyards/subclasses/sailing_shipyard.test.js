describe('SailingShipyard', () => {
    var sailingShipyard;
    var sailingShip;
    var powerShip;

    beforeEach(function () {
        sailingShipyard = new SailingShipyard('shipyard name');
        sailingShip = new SailingShip('sailing ship name', 7, 12);
        powerShip = new PowerShip('power ship name', 5, 'steel');
    });

    describe('connect()', () => {
        it('should connect an instance of SailingShip', () => {
            let result = sailingShipyard.connect(sailingShip);
            expect(result).to.be.true;
            expect(sailingShipyard.ships).to.have.members([sailingShip]);
        });

        it('should connect an instance of other Ship inherited class', () => {
            let result = sailingShipyard.connect(powerShip);
            expect(result).to.be.true;
            expect(sailingShipyard.ships).to.have.members([powerShip]);
        });
    });

    describe('disconnect()', () => {
        it('should disconnect an instance of SailingShip', () => {
            sailingShipyard.connect(sailingShip);
            let result = sailingShipyard.disconnect(sailingShip);
            expect(result).to.be.true;
            expect(sailingShipyard.ships).to.not.have.members([sailingShip]);
        });

        it('should disconnect an instance of other Ship inherited class', () => {
            sailingShipyard.connect(powerShip);
            let result = sailingShipyard.disconnect(powerShip);
            expect(result).to.be.true;
            expect(sailingShipyard.ships).to.not.have.members([powerShip]);
        });
    });

    describe('repair()', () => {
        it('should repair an instance of SailingShip', () => {
            sailingShip.workingCapacity = false;
            sailingShipyard.connect(sailingShip);
            let result = sailingShipyard.repair(sailingShip);
            expect(result).to.be.true;
            expect(sailingShip.workingCapacity).to.be.true;
        });

        it('should not repair an instance of other Ship inherited class', () => {
            powerShip.workingCapacity = false;
            sailingShipyard.connect(powerShip);
            let result = sailingShipyard.repair(powerShip);
            expect(result).to.be.false;
            expect(powerShip.workingCapacity).to.be.false;
        });
    });

    describe('paint()', () => {
        it('should paint an instance of SailingShip', () => {
            sailingShipyard.connect(sailingShip);
            let result = sailingShipyard.paint(sailingShip, 'orange');
            expect(result).to.be.true;
            expect(sailingShip).to.have.property('color', 'orange');
        });

        it('should paint an instance of other Ship inherited class', () => {
            sailingShipyard.connect(powerShip);
            let result = sailingShipyard.paint(powerShip, 'orange');
            expect(result).to.be.true;
            expect(powerShip).to.have.property('color', 'orange');
        });
    });

    describe('exchange()', () => {
        it('should exchange instances of the same class', () => {
            otherSailingShip = new SailingShip('other sailing ship name', 7, 12);
            otherSailingShip.workingCapacity = false;
            sailingShipyard.connect(sailingShip);
            let result = sailingShipyard.exchange(sailingShip, otherSailingShip);
            expect(result).to.be.true;
            expect(sailingShipyard.ships).to.not.have.members([sailingShip]);
            expect(sailingShipyard.ships).to.have.members([otherSailingShip]);
        });

        it('should not exchange instances of different classes', () => {
            sailingShip.workingCapacity = false;
            sailingShipyard.connect(sailingShip);
            let result = sailingShipyard.exchange(sailingShip, powerShip);
            expect(result).to.be.false;
            expect(sailingShipyard.ships).to.have.members([sailingShip]);
            expect(sailingShipyard.ships).to.not.have.members([powerShip]);
        });

        it('should not exchange to capable incoming ship', () => {
            otherSailingShip = new PowerShip('other power ship name', 5, 'steel');
            otherSailingShip.workingCapacity = true;
            sailingShipyard.connect(sailingShip);
            let result = sailingShipyard.exchange(sailingShip, otherSailingShip);
            expect(result).to.be.false;
            expect(sailingShipyard.ships).to.have.members([sailingShip]);
            expect(sailingShipyard.ships).to.not.have.members([otherSailingShip]);
        });

        it('should not exchange from incapable outgoing ship', () => {
            otherSailingShip = new PowerShip('other power ship name', 5, 'steel');
            sailingShip.workingCapacity = false;
            sailingShipyard.connect(sailingShip);
            let result = sailingShipyard.exchange(sailingShip, otherSailingShip);
            expect(result).to.be.false;
            expect(sailingShipyard.ships).to.have.members([sailingShip]);
            expect(sailingShipyard.ships).to.not.have.members([otherSailingShip]);
        });
    });

    describe('build()', () => {
        it('should return an instance of SailingShip', () => {
            const result = sailingShipyard.build('sailing ship name', 7, 12);
            expect(result).to.be.an.instanceof(SailingShip);
        });
    });
});
