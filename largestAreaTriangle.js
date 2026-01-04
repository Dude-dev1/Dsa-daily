/* Given an array of points on the X-Y plane points where points[i] = [xi, yi], return the area of the largest triangle that can be formed by any three different points. Answers within 10-5 of the actual answer will be accepted.

 */

var largestTriangleArea = function (points) {
  largest = 0;
  for (let i = 0; i < points.length; i++) {
    for (let j = 0; j < points.length; j++) {
      for (let k = 0; k < points.length; k++) {
        let [x1, y1] = points[i];
        let [x2, y2] = points[j];
        let [x3, y3] = points[k];

        let area =
          (1 / 2) * Math.abs(x1 * (y2 - y3) + x2 * (y3 - y1) + x3 * (y1 - y2));

        if (area > largest) {
          largest = area;
        }
      }
    }
  }
  return largest.toFixed(5);
};

console.log(
  largestTriangleArea([
    [0, 0],
    [0, 1],
    [1, 0],
    [0, 2],
    [2, 0],
  ])
); // 2
console.log(
  largestTriangleArea([
    [1, 0],
    [0, 0],
    [0, 1],
  ])
); // 0.5
