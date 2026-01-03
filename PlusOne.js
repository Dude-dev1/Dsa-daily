// You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's.

// Increment the large integer by one and return the resulting array of digits.

function plusOne(digits) {
  for (let i = digits.length - 1; i >= 0; i--) {
    if (digits[i] < 9) {
      digits[i]++;
      return digits;
    }
    digits[i] = 0;
  }

  // If all digits were 9
  digits.unshift(1);
  return digits;
}

// console.log(plusOne([1, 2, 3])); returns [1, 2, 4]
// console.log(plusOne([9, 9, 9])); returns [1, 0, 0, 0]
console.log(plusOne([4, 3, 2, 1])); // returns [4, 3, 2, 2]
