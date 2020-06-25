module.exports = (n1, n2) => {
    if (n1 !== 0 && !n1) {
        throw new Error('first argument is not defined')
    }
    if (n2 !== 0 && !n2) {
        throw new Error('second argument is not defined')
    }
    return n1 + n2;
}