// const digitSum = (num) => {
//   let total = 0;
//   while (num > 0) {
//     let rem = num % 10;

//     total += rem;

//     num = Math.floor(num / 10);
//   }
//   return total;
// };

// console.log(digitSum(16));

const recursiveSum = (num) => {
  if (num === 0) return 0;
  return (num % 10) + recursiveSum(Math.floor(num / 10));
};
console.log(recursiveSum(16));
