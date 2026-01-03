/**You have a grid of size n x 3 and you want to paint each cell of the grid with exactly one of the three colors: Red, Yellow, or Green while making sure that no two adjacent cells have the same color (i.e., no two cells that share vertical or horizontal sides have the same color).

Given n the number of rows of the grid, return the number of ways you can paint this grid. As the answer may grow large, the answer must be computed modulo 109 + 7. */

var numOfWays = function (n) {
  const MOD = 1_000_000_007;

  let twoColorRow = 6; // r y r
  let threeColorRow = 6; // r g y

  for (let i = 2; i <= n; i++) {
    //after a 2 color row you can go to 3 new two color rows then 2 new three color rows
    let newTwoColorRow = (twoColorRow * 3 + threeColorRow * 2) % MOD;
    //after a 3 color row you can go to 2 new two color rows then 2 new three color rows

    let newThreeColorRow = (twoColorRow * 2 + threeColorRow * 2) % MOD;

    twoColorRow = newTwoColorRow;
    threeColorRow = newThreeColorRow;
  }

  return (twoColorRow + threeColorRow) % MOD;
};
console.log(numOfWays(1)); // 12
console.log(numOfWays(2)); // 54
