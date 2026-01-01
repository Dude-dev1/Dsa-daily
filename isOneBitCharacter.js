/*We have two special characters:

The first character can be represented by one bit 0.
The second character can be represented by two bits (10 or 11).
Given a binary array bits that ends with 0, return true if the last character must be a one-bit character. */

var isOneBitCharacter = function (bits) {
  let i = 0;

  while (i < bits.length - 1) {
    if (bits[i] === 1) {
      i += 2; // two-bit character
    } else {
      i += 1; // one-bit character
    }
  }

  return i === bits.length - 1;
};

console.log(isOneBitCharacter([1, 0, 0])); // true
console.log(isOneBitCharacter([1, 1, 1, 0])); // false
