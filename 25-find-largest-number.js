function findLargest(arr) {

  if (arr === null || arr === undefined || Array.isArray(arr) === false) {
    return false;
  }


  if (arr.length === 0) {
    return null;
  }


  let largest = arr[0];


  for (let i = 0; i < arr.length; i++) {

    if (typeof arr[i] !== "number" || !Number.isFinite(arr[i])) return false;
    if (arr[i] > largest) {
      largest = arr[i];
    }
  }

  return largest;

}

console.log(findLargest([3, 1, 2]))

module.exports = { findLargest };
