/*No-Zero integer is a positive integer that does not contain any 0 in its decimal representation.

Given an integer n, return a list of two integers [a, b] where:

a and b are No-Zero integers.
a + b = n
The test cases are generated so that there is at least one valid solution. If there are many valid solutions, you can return any of them.*/

var getNoZeroIntegers = function (n) {
  for (let i = 0; i < n; i++) {
    let b = n - i;

    if (!i.toString().includes("0") && !b.toString().includes("0")) {
      return [i, b];
    }
  }
};
console.log(getNoZeroIntegers(2)); // [1,1]
console.log(getNoZeroIntegers(11)); // [2,9]
console.log(getNoZeroIntegers(10000)); // [1,9999]
