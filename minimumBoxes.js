/*You are given an array apple of size n and an array capacity of size m.

There are n packs where the ith pack contains apple[i] apples. There are m boxes as well, and the ith box has a capacity of capacity[i] apples.

Return the minimum number of boxes you need to select to redistribute these n packs of apples into boxes.

Note that, apples from the same pack can be distributed into different boxes.*/

var minimumBoxes = function (apple, capacity) {
  let rem = 0;
  let totalApples = apple.reduce((a, b) => a + b, 0);
  capacity.sort((a, b) => b - a);

  for (let cap = 0; cap < capacity.length; cap++) {
    if (totalApples <= 0) break;
    totalApples -= capacity[cap];
    rem++;
  }
  return rem;
};

// console.log(minimumBoxes([1, 3, 2], [4, 3, 1, 5, 2])); result 2
// console.log(minimumBoxes([5, 7, 3], [6, 8, 1, 2])); result 3

var countPartitions = function (nums) {
  let count = 0;
  let sum = 0;
  let sumI = 0;
  let currentIndex = 1;

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      sum += nums[j];
      console.log("The sum");
      console.log(sum);
    }

    if (i !== 0) {
      for (let k = 0; k <= i; k++) {
        sumI += nums[k];
        console.log("The sumI");
        console.log(sumI);
      }
    }

    let val = i === 0 ? Math.abs(nums[i] - sum) : Math.abs(sumI - sum);
    console.log("The absolute vals");
    console.log(val);

    if (val % 2 === 0) {
      count++;
    }
    sumI = 0;
    sum = 0;
    currentIndex++;
  }

  return count;
};

// console.log(countPartitions([1, 2, 3])); // 2
console.log(countPartitions([10, 10, 3, 7, 6])); // 4
