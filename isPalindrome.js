/* Given an integer x, return true if x is a palindrome, and false otherwise. */

var isPalindrome = function (x) {
  return x.toString().split("").reverse().join("") === x.toString();
};

var isPalindrome1 = function (x) {
  if (x < 0) return false;

  let str = x.toString();

  for (let i = 0; i < str.length / 2; i++) {
    if (str[i] !== str[str.length - (i + 1)]) {
      return false;
    }
  }
  return true;
};

console.log(isPalindrome(121), isPalindrome1(121)); // true
console.log(isPalindrome(-121), isPalindrome1(-121)); // false
console.log(isPalindrome(10), isPalindrome1(10)); // false
