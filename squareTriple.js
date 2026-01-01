/*A square triple (a,b,c) is a triple where a, b, and c are integers and a2 + b2 = c2.

Given an integer n, return the number of square triples such that 1 <= a, b, c <= n*/

var countTriples = function (n) {
  let count = 0;
  for (let i = 1; i <= n; i++) {
    for (let j = i + 1; j <= n; j++) {
      let sqr = i * i + j * j;

      if (Number.isInteger(Math.sqrt(sqr)) && Math.sqrt(sqr) <= n) {
        count += 2;
      }
    }
  }
  return count;
};
// console.log(countTriples(5)); // 2
// console.log(countTriples(10)); // 4
