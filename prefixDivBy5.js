/*You are given a binary array nums (0-indexed).

We define xi as the number whose binary representation is the subarray nums[0..i] (from most-significant-bit to least-significant-bit).

For example, if nums = [1,0,1], then x0 = 1, x1 = 2, and x2 = 5.
Return an array of booleans answer where answer[i] is true if xi is divisible by 5. */

var prefixesDivBy5 = function (nums) {
  let result = [];
  let value = 0;

  for (let i = 0; i < nums.length; i++) {
    value = (value * 2 + nums[i]) % 5;
    result.push(value === 0);
  }

  return result;
};
console.log(prefixesDivBy5([0, 1, 1])); // [true, false, false]
console.log(prefixesDivBy5([1, 1, 1])); // [false, false, false]
