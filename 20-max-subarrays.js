function generateFibonacci(n) {

    if (n <= 0 || !Number.isInteger(n)) return [];
    if (n === 1) return [0];

    let arr = [];
    for (let i = 0; i < n; i++) {
        if (i === 0 || i === 1) {
            arr[i] = i;
        } else {
            arr.push((arr[i - 1] + (arr[i - 2])))
        }
    }

    return arr;

}

generateFibonacci(8)

module.exports = { generateFibonacci };
