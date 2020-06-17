describe('Ship', () => {
    it('should throw specific error', () => {
        expect(function () {
            new Ship();
        }).to.throw('Incorrect name parameter passed: should be a String.');
    });

    it('should throw specific error', () => {
        expect(function () {
            new Ship(1000);
        }).to.throw('Incorrect name parameter passed: should be a String.');
    });

    it('is instance of Ship', () => {
        const result = new Ship('ship name');
        expect(result).to.be.an.instanceof(Ship);
    });

    it('has correct name property', () => {
        const result = new Ship('ship name');
        expect(result).to.have.property('name', 'ship name');
    });

    it('has correct workingCapacity property', () => {
        const result = new Ship('ship name');
        expect(result).to.have.property('workingCapacity', true);
    });
});
