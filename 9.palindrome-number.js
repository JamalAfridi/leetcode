/*
 * @lc app=leetcode id=9 lang=javascript
 *
 * [9] Palindrome Number
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  //   return x === Number(String(x).split("").reverse().join(""));

  const stringX = String(x);

  if (stringX.length === 1) {
    return true;
  }

  let leftPointer = 0;
  let rightPointer = stringX.length - 1;
  const breakPoint = Math.floor(stringX.length / 2);

  while (leftPointer < breakPoint) {
    if (stringX[leftPointer] !== stringX[rightPointer]) {
      return false;
    }

    leftPointer++;
    rightPointer--;
  }
  return true;
};
// @lc code=end

[1, 2];
