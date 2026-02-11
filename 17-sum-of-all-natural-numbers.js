function sumN(n) {
  // your solution here
  if (!Number.isFinite(n) || n < 0 || !Number.isInteger(n)) {
    return false;
  }

  let sum = 0;
  for (let i = 0; i <= n; i++) {
    sum += i;
  }

  return sum;
}

module.exports = { sumN };