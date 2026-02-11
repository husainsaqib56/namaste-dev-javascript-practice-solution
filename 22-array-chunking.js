function chunkArray(arr, n) {
  if (n <= 0) return [];
  const res = [];
  for (let i = 0; i < arr.length; i += n) {
    res.push(arr.slice(i, i + n));
  }
  return res;
}

//For the purpose of user debugging.
//pass your array and chunk size in function call
chunkArray([1, 2, 3], 5);
module.exports = chunkArray
