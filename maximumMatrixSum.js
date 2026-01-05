/* You are given an n x n integer matrix. You can do the following operation any number of times:

Choose any two adjacent elements of matrix and multiply each of them by -1.
Two elements are considered adjacent if and only if they share a border.

Your goal is to maximize the summation of the matrix's elements. Return the maximum sum of the matrix's elements using the operation mentioned above.  */

var maxMatrixSum = function (matrix) {
  let sum = 0;
  let countNeg = 0;
  let min = Infinity;

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      sum += Math.abs(matrix[i][j]);
      if (matrix[i][j] < 0) countNeg++;
      min = Math.min(min, Math.abs(matrix[i][j]));
    }
  }
  if (countNeg % 2 !== 0) return sum - 2 * min;
  return sum;
};

console.log(
  maxMatrixSum([
    [1, 2, 3],
    [-1, -2, -3],
    [1, 2, 3],
  ])
); // 16
console.log(
  maxMatrixSum([
    [1, -1],
    [-1, 1],
  ])
); // 4
