describe('SailingShip', () => {
    it('is instance of SailingShip', () => {
        const result = new SailingShip('ship name', 7, 12);
        expect(result).to.be.an.instanceof(SailingShip);
    });

    it('has correct name property', () => {
        const result = new SailingShip('ship name', 7, 12);
        expect(result).to.have.property('name', 'ship name');
    });

    it('has correct mastCount property', () => {
        const result = new SailingShip('ship name', 7, 12);
        expect(result).to.have.property('mastCount', 7);
    });

    it('has correct sailsArea property', () => {
        const result = new SailingShip('ship name', 7, 12);
        expect(result).to.have.property('sailsArea', 12);
    });
});
