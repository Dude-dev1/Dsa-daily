/* Given an integer array nums, return the sum of divisors of the integers in that array that have exactly four divisors. If there is no such integer in the array, return 0.*/

var sumFourDivisors = function (nums) {
  let totalSum = 0;

  for (let num of nums) {
    let count = 0;
    let sum = 0;

    for (let i = 0; i * i <= num; i++) {
      if (num % i === 0) {
        let divOne = i;
        let divTwo = Math.floor(num / i);

        if (divOne === divTwo) {
          count++;
          sum += divOne;
        } else {
          count += 2;
          sum += divOne + divTwo;
        }

        if (count > 4) break;
      }
    }

    if (count === 4) {
      totalSum += sum;
    }
  }
  return totalSum;
};

console.log(sumFourDivisors([21, 4, 7])); // 32
console.log(sumFourDivisors([1, 2, 3, 4, 5])); // 0
console.log(sumFourDivisors([21, 21])); // 64
