/*You are given a string num representing a large integer. An integer is good if it meets the following conditions:

It is a substring of num with length 3.
It consists of only one unique digit.
Return the maximum good integer as a string or an empty string "" if no such integer exists.

Note:

A substring is a contiguous sequence of characters within a string.
There may be leading zeroes in num or a good integer.*/

var largestGoodInteger = function (num) {
  let max = -1;

  for (let i = 0; i < num.length - 2; i++) {
    if (num[i] === num[i + 1] && num[i + 1] === num[i + 2]) {
      let str = num[i] + num[i + 1] + num[i + 2];

      max = Math.max(parseInt(str), max);
    }
  }
  return max == -1 ? "" : max === 0 ? "000" : max.toString();
};
console.log(largestGoodInteger("6777133339")); // "777"
console.log(largestGoodInteger("2300019")); // "000"
console.log(largestGoodInteger("42352338")); // ""
