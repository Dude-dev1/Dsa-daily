/* You are given an integer array nums.

Start by selecting a starting position curr such that nums[curr] == 0, and choose a movement direction of either left or right.

After that, you repeat the following process:

If curr is out of the range [0, n - 1], this process ends.
If nums[curr] == 0, move in the current direction by incrementing curr if you are moving right, or decrementing curr if you are moving left.
Else if nums[curr] > 0:
Decrement nums[curr] by 1.
Reverse your movement direction (left becomes right and vice versa).
Take a step in your new direction.
A selection of the initial position curr and movement direction is considered valid if every element in nums becomes 0 by the end of the process.

Return the number of possible valid selections. */

var countValidSelections = (nums) => {
  let sum = 0;
  let arr = [];

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    arr.push(sum);
  }

  let result = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      if (arr[i] * 2 === arr.at(-1)) {
        result += 2;
      } else if (Math.abs(arr[i] * 2 - arr.at(-1)) === 1) {
        result += 1;
      }
    }
  }

  return result;
};

console.log(countValidSelections([2, 3, 4, 0, 4, 1, 0])); // 0
console.log(countValidSelections([1, 0, 2, 0, 3])); // 2
