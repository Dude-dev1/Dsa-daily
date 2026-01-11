/* Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

You must write an algorithm with O(log n) runtime complexity. */
// var searchInsert = function (nums, target) {
//   nums.push(target);
//   nums.sort((x, y) => x - y);
//   return nums.indexOf(target);
// };
// console.log(searchInsert([1, 3, 5, 6], 5)); // 2
// console.log(searchInsert([1, 3, 5, 6], 2)); // 1
// console.log(searchInsert([1, 3, 5, 6], 7)); // 4
// console.log(searchInsert([1, 3, 5, 6], 0)); // 0
// console.log(searchInsert([1, 3], 2)); // 1
// var searchInsertBinary = function (nums, target) {
//   let left = 0;
//   let right = nums.length - 1;

//   while (left <= right) {
//     const mid = Math.floor((left + right) / 2);

//     if (nums[mid] === target) {
//       return mid;
//     } else if (nums[mid] < target) {
//       left = mid + 1;
//     } else {
//       right = mid - 1;
//     }
//   }
//   return left;
// };
// console.log(searchInsertBinary([1, 3, 5, 6], 5)); // 2
// console.log(searchInsertBinary([1, 3, 5, 6], 2)); // 1
// console.log(searchInsertBinary([1, 3, 5, 6], 7)); // 4
// console.log(searchInsertBinary([1, 3, 5, 6], 0)); // 0
// console.log(searchInsertBinary([1, 3], 2)); // 1
let a = 10;
console.log(a.toBinaryString());
// Output: "1010"
Number.prototype.toBinaryString = function () {
  if (this === 0) return "0";
  let num = this;
  let binaryStr = "";
  while (num > 0) {
    binaryStr = (num % 2) + binaryStr;
    num = Math.floor(num / 2);
  }
  return binaryStr;
};
