/*You are given a positive integer num consisting only of digits 6 and 9.

Return the maximum number you can get by changing at most one digit (6 becomes 9, and 9 becomes 6).*/

var maximum69Number = function (num) {
  for (let i = 0; i < num.toString().length; i++) {
    if (num.toString()[i] === "6") {
      return parseInt(
        num.toString().substring(0, i) + "9" + num.toString().substring(i + 1)
      );
    }
  }
  return num;
};
console.log(maximum69Number(9669)); // 9969
console.log(maximum69Number(9996)); // 9999
console.log(maximum69Number(9999)); // 9999
