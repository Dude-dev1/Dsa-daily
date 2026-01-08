/*Given a m x n matrix grid which is sorted in non-increasing order both row-wise and column-wise, return the number of negative numbers in grid.*/

var countNegatives = function (grid) {
  let count = 0;

  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[0].length; col++) {
      if (grid[row][col] < 0) {
        count++;
      }
    }
  }
  return count;
};

// console.log(countNegatives([[4, 3, 2, -1], [3, 2, 1, -1], [1, 1, -1, -2], [-1, -1, -2, -3]])); // 8
// console.log(countNegatives([[3, 2], [1, 0]])); // 0
