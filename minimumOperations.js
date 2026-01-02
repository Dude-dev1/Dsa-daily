/*You are given an integer array nums. In one operation, you can add or subtract 1 from any element of nums.

Return the minimum number of operations to make all elements of nums divisible by 3.*/

var minimumOperations = function (nums) {
  let numOp = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 3 === 0) {
      numOp;
    } else if (nums[i] !== 1 && nums[i] % 3 === 1) {
      nums[i] = nums[i] - 1;
      numOp++;
    } else {
      nums[i] = nums[i] + 1;
      numOp++;
    }
  }

  return numOp;
};

/*var minimumOperations = function(nums) {
 return nums.reduce((acc, num) => acc + (num % 3 !== 0 ? 1 : 0), 0);
*/
