/*Given an integer n, return any array containing n unique integers such that they add up to 0. */

var sumZero = function (n) {
  let arr = [];

  if (n % 2 !== 0) {
    arr.push(0);
  }

  for (let i = 1; i <= Math.floor(n / 2); i++) {
    arr.push(i);
    arr.push(-i);
  }
  return arr;
};

// var sumZero = function (n) {
//   const result = [];
//   let num = 1;

//   if (n % 2 !== 0) {
//     result.push(0);
//   }

//   while (result.length < n) {
//     result.push(num);
//     result.push(-num);
//     num++;
//   }

//   return result;
// };

// console.log(sumZero(5)); // [-2,-1,0,1,2]
// console.log(sumZero(3)); // [-1,0,1]
