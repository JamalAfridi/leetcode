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
  //optimized solution
  let i = 0;
  const map = {};
  while (i < nums.length) {
    let complement = target - nums[i];
    if (complement in map) {
      return [map[complement], i];
    }
    map[nums[i]] = i;
    i++;
  }
};
// @lc code=end
