function countNegatives(arr) {
  // implement your solution here

  if (!Array.isArray(arr)) {
    return false;
  }

  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    const val = arr[i];

    if (typeof val !== "number" || !Number.isFinite(val)) {
      return false;
    }
    if (val < 0) {
      count++;
    }
  }
  return count;
}

module.exports = { countNegatives };
