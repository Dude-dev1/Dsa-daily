/* You are given an array nums consisting of positive integers.

Return the total frequencies of elements in nums such that those elements all have the maximum frequency.

The frequency of an element is the number of occurrences of that element in the array. */

var maxFrequencyElements = function (nums) {
  let set = new Map();
  let maxFreq = 0;
  let result = 0;

  for (let num of nums) {
    set.set(num, (set.get(num) || 0) + 1);
    maxFreq = Math.max(maxFreq, set.get(num));
  }

  for (let count of set.values()) {
    if (count === maxFreq) {
      result += count;
    }
  }

  return result;
};

console.log(maxFrequencyElements([1, 3, 2, 2, 3, 1])); // 6
console.log(maxFrequencyElements([1, 1, 1, 2, 2, 2, 3])); // 6
