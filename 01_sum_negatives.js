function sumNegatives(arr) {
    let negativesArr = arr.filter(el => el < 0);
    let sum = negativesArr.reduce((acc, el) => acc += el);

    return {
        count: negativesArr.length,
        sum: sum
    }
}
