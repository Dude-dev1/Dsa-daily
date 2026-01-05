/* Given an array nums of n integers and an integer k, determine whether there exist two adjacent subarrays of length k such that both subarrays are strictly increasing. Specifically, check if there are two subarrays starting at indices a and b (a < b), where:

Both subarrays nums[a..a + k - 1] and nums[b..b + k - 1] are strictly increasing.
The subarrays must be adjacent, meaning b = a + k.
Return true if it is possible to find two such subarrays, and false otherwise. */

var hasIncreasingSubarrays = function (nums, k) {
  if (nums.length < 2 * k) return false;

  for (let a = 0; a <= nums.length - 2 * k; a++) {
    let first = true;
    let second = true;

    for (let i = a; i < a + k - 1; i++) {
      if (nums[i] >= nums[i + 1]) {
        first = false;
        break;
      }
    }

    for (let i = a + k; i < a + 2 * k - 1; i++) {
      if (nums[i] >= nums[i + 1]) {
        second = false;
        break;
      }
    }

    if (first && second) return true;
  }

  return false;
};
console.log(hasIncreasingSubarrays([1, 2, 3, 4, 5, 6], 3)); // true
console.log(hasIncreasingSubarrays([-3, -19, -8, -16], 2)); // false
console.log(hasIncreasingSubarrays([1, 3, 2, 4, 5, 6], 2)); // false