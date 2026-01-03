/*You are given a 2D 0-indexed integer array dimensions.

For all indices i, 0 <= i < dimensions.length, dimensions[i][0] represents the length and dimensions[i][1] represents the width of the rectangle i.

Return the area of the rectangle having the longest diagonal. If there are multiple rectangles with the longest diagonal, return the area of the rectangle having the maximum area.*/

var areaOfMaxDiagonal = function (dimensions) {
    let maxDiagonal = 0, maxArea = 0;

    for (let i = 0; i < dimensions.length; i++) {
        let [length, width] = dimensions[i];
        let diagonal = length * length + width * width;
        let area = length * width;

        if (diagonal > maxDiagonal || (diagonal === maxDiagonal && area > maxArea)) {
            maxDiagonal = diagonal;
            maxArea = area;
        }
    }

    return maxArea;
};

console.log(
  areaOfMaxDiagonal([
    [1, 2],
    [3, 4],
    [5, 6],
  ])
); // 30
console.log(
  areaOfMaxDiagonal([
    [2, 3],
    [3, 4],
    [4, 5],
  ])
); // 20
