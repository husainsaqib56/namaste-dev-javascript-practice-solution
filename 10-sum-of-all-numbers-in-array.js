function sumArray(arr) {
  function helper(i) {
    // your solution here
    if (arr.length === 0) return 0;
    return arr.reduce((acc, curr) => acc + curr)
  }
  return helper(0);
}

module.exports = { sumArray };