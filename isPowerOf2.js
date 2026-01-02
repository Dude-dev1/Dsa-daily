/*Given an integer n, return true if it is a power of two. Otherwise, return false.

An integer n is a power of two, if there exists an integer x such that n == 2x.*/

// use bitwise operations.

var isPowerOfTwo = function (n) {
  return n > 0 && (n & (n - 1)) === 0;
};
console.log(isPowerOfTwo(1)); // true
console.log(isPowerOfTwo(16)); // true
console.log(isPowerOfTwo(3)); // false
