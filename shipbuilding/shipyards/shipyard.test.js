describe('Shipyard', () => {
    it('should throw specific error', () => {
        expect(function () {
            new Shipyard();
        }).to.throw('Incorrect name parameter passed: should be a String.');
    });

    it('should throw specific error', () => {
        expect(function () {
            new Shipyard(1000);
        }).to.throw('Incorrect name parameter passed: should be a String.');
    });

    it('is instance of Shipyard', () => {
        const result = new Shipyard('ship name');
        expect(result).to.be.an.instanceof(Shipyard);
    });

    it('has correct name property', () => {
        const result = new Shipyard('ship name');
        expect(result).to.have.property('name', 'ship name');
    });

    it('has correct ships property', () => {
        const result = new Shipyard('ship name');
        expect(result).to.have.property('ships').that.is.a('array');
    });
});
