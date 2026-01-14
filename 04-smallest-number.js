function findSmallest(arr) {
  // Return false for non-array inputs
  if (!Array.isArray(arr)) {
    return false;
  }

  // For an empty array, return null
  if (arr.length === 0) {
    return null;
  }

  let smallest = arr[0];

  for (let i = 0; i < arr.length; i++) {
    // Return false for non-number values, NaN, or Infinities
    if (typeof arr[i] !== 'number' || !Number.isFinite(arr[i])) {
      return false;
    }

    if (arr[i] < smallest) {
      smallest = arr[i];
    }
  }

  return smallest;
}

module.exports = { findSmallest };