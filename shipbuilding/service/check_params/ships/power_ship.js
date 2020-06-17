function powerShipCheckParams(enginePower, material) {
    if (typeof enginePower !== 'number')
        throw new Error('Incorrect enginePower parameter passed: should be a Number.');

    if (typeof material !== 'string')
        throw new Error('Incorrect material parameter passed: should be a String.');
}
