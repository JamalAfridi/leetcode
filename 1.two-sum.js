/*
 * @lc app=leetcode id=1 lang=javascript
 *
 * [1] Two Sum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  //brute force approach
  let i = 0;
  let j = 1;
  while (i < nums.length - 1) {
    if (nums[i] + nums[j] === target) {
      return [i, j];
    } else if (i === nums.length - 2 && j === nums.length - 1) {
      break;
    }
    if (j === nums.length - 1) {
      i++;
      j++;
    } else {
      j++;
    }
  }
};
// @lc code=end
