/*In the town of Digitville, there was a list of numbers called nums containing integers from 0 to n - 1. Each number was supposed to appear exactly once in the list, however, two mischievous numbers sneaked in an additional time, making the list longer than usual.

As the town detective, your task is to find these two sneaky numbers. Return an array of size two containing the two numbers (in any order), so peace can return to Digitville.*/

var getSneakyNumbers = function (nums) {
  const res = [];
  const arr = new Map();

  for (const x of nums) {
    arr.set(x, (arr.get(x) || 0) + 1);

    if (arr.get(x) === 2) {
      res.push(x);
    }
  }
  return res;
};

console.log(getSneakyNumbers([1, 2, 3, 4, 2, 5, 3])); // [2,3]
console.log(getSneakyNumbers([0, 1, 2, 3, 4, 5, 0, 1])); // [0,1]
