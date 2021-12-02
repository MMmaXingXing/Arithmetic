/*
 * @lc app=leetcode.cn id=9 lang=javascript
 *
 * [9] 回文数
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  if (x < 0) return false;
  const str = `${x}`;
  const strList = str.split("");
  const revertStr = strList.reverse().join("");
  if (str === revertStr) return true;
  return false;
};
// @lc code=end
