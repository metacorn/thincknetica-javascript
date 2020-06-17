describe('PowerShip', () => {
    it('is instance of PowerShip', () => {
        const result = new PowerShip('ship name', 5, 'steel');
        expect(result).to.be.an.instanceof(PowerShip);
    });

    it('has correct name property', () => {
        const result = new PowerShip('ship name', 5, 'steel');
        expect(result).to.have.property('name', 'ship name');
    });

    it('has correct enginePower property', () => {
        const result = new PowerShip('ship name', 5, 'steel');
        expect(result).to.have.property('enginePower', 5);
    });

    it('has correct material property', () => {
        const result = new PowerShip('ship name', 5, 'steel');
        expect(result).to.have.property('material', 'steel');
    });
});
