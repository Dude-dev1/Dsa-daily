// Given an binary array nums and an integer k, return true if all 1's are at least k places away from each other, otherwise return false.

function kLengthApart(nums, k) {
  let lastOne = -1;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      if (lastOne !== -1 && i - lastOne - 1 < k) {
        return false;
      }
      lastOne = i;
    }
  }

  return true;
}

console.log(kLengthApart([1, 0, 0, 1, 0, 0, 1], 2)); // true
console.log(kLengthApart([1, 0, 1, 0, 1, 0, 0, 1], 2)); // false
