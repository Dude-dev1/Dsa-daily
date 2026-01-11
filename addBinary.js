/* Given two binary strings a and b, return their sum as a binary string.  */

var addBinary = function (a, b) {
  let i = a.length - 1;
  let j = b.length - 1;
  let carry = 0;
  let result = "";

  while (i >= 0 || j >= 0 || carry > 0) {
    let sum = carry;

    if (i >= 0) {
      sum += a[i] - "0";
      i--;
    }
    if (j >= 0) {
      sum += b[j] - "0";
      j--;
    }

    result = (sum % 2) + result;
    carry = Math.floor(sum / 2);
  }

  return result;
};
console.log(addBinary("11", "1")); // "100"
console.log(addBinary("1010", "1011")); // "10101"
console.log(addBinary("0", "0")); // "0"
