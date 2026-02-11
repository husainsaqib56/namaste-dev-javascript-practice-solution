function removeDuplicates(arr) {
  let unique = []
  for (let i= 0; i < arr.length; i++) {
    if (!unique.includes(arr[i])) {
      unique.push(arr[i])
    }
  }
  return unique;
  // your code here
}
removeDuplicates([1, 2, 2, 3, 4, 4])
module.exports = removeDuplicates;
