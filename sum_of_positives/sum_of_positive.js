function sumOfPositive(arr) {
    if (!Array.isArray(arr))
        throw new Error('TypeError: passed object is not an Array.');

    let positivesArr = arr.filter(el => (el > 0) && (typeof(el) === 'number'));
    let sum = positivesArr.reduce((acc, el) => acc += el, 0);

    return {
        count: positivesArr.length,
        sum: sum
    }
}
