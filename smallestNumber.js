/*You are given a positive number n.

// Return the smallest number x greater than or equal to n, such that the binary representation of x contains only set bits*/

var smallestNumber = function (n) {
  let k = 1;

  while ((1 << k) - 1 < n) {
    k++;
  }
  return (1 << k) - 1;
};

console.log(smallestNumber(8)); // 15
console.log(smallestNumber(6)); // 7
