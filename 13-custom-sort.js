
function customSort(arr) {
  //write your implementation here
  if (arr.length === 0) return [];

  let str = [];
  let num = [];

  for (let data of arr) {
    if (typeof data === "string" && data.length === 1) {
      str.push(data)
    } else if (typeof data === "number") {
      num.push(data)
    }
  }

  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < str.length - i - 1; j++) {
      if (str[j] > str[j + 1]) {
        [str[j], str[j+1]] = [str[j+1], str[j]]
      }
    }
  }

  for (let i = 0; i < num.length; i++) {
    for (let j = 0; j < num.length - i - 1; j++) {
      if (num[j] > num[j + 1]) {
        [num[j], num[j + 1]] = [num[j + 1], num[j]]
      }
    }
  }

  return [...str, ...num]
 
}

const input = ["g", "s", 5, 2, "c", "e", 6, 1, "a"];
customSort(input);
module.exports = customSort;
