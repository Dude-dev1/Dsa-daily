/*ou are given an array nums of n integers and two integers k and x.

The x-sum of an array is calculated by the following procedure:

Count the occurrences of all elements in the array.
Keep only the occurrences of the top x most frequent elements. If two elements have the same number of occurrences, the element with the bigger value is considered more frequent.
Calculate the sum of the resulting array.
Note that if an array has less than x distinct elements, its x-sum is the sum of the array.

Return an integer array answer of length n - k + 1 where answer[i] is the x-sum of the subarray nums[i..i + k - 1].*/

var findXSum = function (nums, k, x) {
  const n = nums.length;
  const answer = [];

  for (let i = 0; i <= n - k; i++) {
    const freq = new Map();

    for (let j = i; j < i + k; j++) {
      freq.set(nums[j], (freq.get(nums[j]) || 0) + 1);
    }

    const sorted = Array.from(freq.entries()).sort((a, b) => {
      if (b[1] !== a[1]) return b[1] - a[1];
      return b[0] - a[0];
    });

    const topX = new Set(sorted.slice(0, x).map(([num]) => num));

    let sum = 0;
    for (let j = i; j < i + k; j++) {
      if (topX.has(nums[j])) sum += nums[j];
    }

    answer.push(sum);
  }

  return answer;
};

console.log(findXSum([3, 8, 7, 8, 7, 5], 2, 2)); // [11,15,15,15,12]
console.log(findXSum([1, 1, 2, 2, 3, 4, 2, 3], 6, 2)); // [6,10,12]
