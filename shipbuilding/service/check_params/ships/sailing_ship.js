function sailingShipCheckParams(mastCount, sailsArea) {
    if (typeof mastCount !== 'number')
        throw new Error('Incorrect mastCount parameter passed: should be a Number.');

    if (typeof sailsArea !== 'number')
        throw new Error('Incorrect sailsArea parameter passed: should be a Number.');
}
