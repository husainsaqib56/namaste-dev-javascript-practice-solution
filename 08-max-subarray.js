function maxSubArray(nums) {
  // write your code  here
  let currentMax = nums[0];
  let globalMax = nums[0];
  if (nums.length === 0) {
    return -Infinity;
  }

  for (let i = 1; i < nums.length; i++) {
    currentMax = Math.max(nums[i], currentMax + nums[i]);

    globalMax = Math.max(globalMax, currentMax);
  }
  return globalMax;
}

maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]);

module.exports = maxSubArray;
