function findMissingNumber(nums) {
    // Your implementation
    const n = nums.length;
    const expect = (n * (n + 1)) / 2;
    const actual = nums.reduce((acc, num) => acc + num, 0);
    return expect - actual;
}

//For the purpose of user debugging.
findMissingNumber([3,0,1]);

module.exports = findMissingNumber