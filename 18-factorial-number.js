function factorial(n) {
  // your solution here
  if (typeof n !== 'number' || n < 0 || !Number.isInteger(n)) {
    return false;
  }

  if (n === 0) {
    return 1;
  }

  return n * factorial(n - 1);
}

module.exports = { factorial };