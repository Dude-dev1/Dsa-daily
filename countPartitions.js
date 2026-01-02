/*You are given an integer array nums of length n.

A partition is defined as an index i where 0 <= i < n - 1, splitting the array into two non-empty subarrays such that:

Left subarray contains indices [0, i].
Right subarray contains indices [i + 1, n - 1].
Return the number of partitions where the difference between the sum of the left and right subarrays is even.*/

var countPartitions = function (nums) {
  let totalSum = 0;
  for (let num of nums) {
    totalSum += num;
  }

  let leftSum = 0;
  let count = 0;

  // We stop at n - 1 because right side must be non-empty
  for (let i = 0; i < nums.length - 1; i++) {
    leftSum += nums[i];
    let rightSum = totalSum - leftSum;

    if (Math.abs(leftSum - rightSum) % 2 === 0) {
      count++;
    }
  }

  return count;
};
console.log(countPartitions([1, 2, 3, 4, 5])); // 0
console.log(countPartitions([10, 10])); // 1
