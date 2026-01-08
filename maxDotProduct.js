/* Given two arrays nums1 and nums2.

Return the maximum dot product between non-empty subsequences of nums1 and nums2 with the same length.

A subsequence of a array is a new array which is formed from the original array by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (ie, [2,3,5] is a subsequence of [1,2,3,4,5] while [1,5,3] is not). */

var maxDotProduct = function (nums1, nums2) {
  const m = nums1.length;
  const n = nums2.length;

  const dp = Array.from({ length: m }, () => Array(n).fill(-Infinity));

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      const prod = nums1[i] * nums2[j];

      dp[i][j] = prod;

      if (i > 0 && j > 0) {
        dp[i][j] = Math.max(dp[i][j], prod + Math.max(0, dp[i - 1][j - 1]));
      }

      if (i > 0) dp[i][j] = Math.max(dp[i][j], dp[i - 1][j]);
      if (j > 0) dp[i][j] = Math.max(dp[i][j], dp[i][j - 1]);
    }
  }

  return dp[m - 1][n - 1];
};

console.log(maxDotProduct([2, 1, -2, 5], [3, 0, -6])); // 18
console.log(maxDotProduct([3, -2], [2, -6, 7])); // 21
console.log(maxDotProduct([-1, -1], [1, 1])); // -1
