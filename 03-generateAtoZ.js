function generateAtoZ() {
  // your solution here

  let arr = [];
  for (let i = 65; i < 91; i++) {
    arr.push(String.fromCharCode(i));
  }
  return arr;
}

module.exports = { generateAtoZ };
