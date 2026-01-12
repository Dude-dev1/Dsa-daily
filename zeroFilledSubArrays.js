const zeroFilledSubarray = function (nums) {
  let total = 0;
  if (nums.length === 1 && nums[0] === 0) return 1;
  const spliceIndexes = [];
  let firstNonZeroIndex = 0;
  let closestNonZeroIndex = nums.length;
  if (nums[0] == 0) {
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] !== 0) {
        firstNonZeroIndex = i;
        break;
      }
    }
  }

  while (closestNonZeroIndex > 0) {
    if (nums[closestNonZeroIndex - 1] === 0) {
      break;
    }
    closestNonZeroIndex--;
  }

  //   console.log({ closestNonZeroIndex, firstNonZeroIndex });

  for (let i = firstNonZeroIndex; i < closestNonZeroIndex; i++) {
    if (nums[i] !== 0 && nums[i + 1] === 0) spliceIndexes.push(i);
  }
  if (nums[nums.length - 1] !== 0) {
    if (nums[nums.length - 1] == 0) spliceIndexes.push(nums.length);
  }
  spliceIndexes.push(closestNonZeroIndex);
  if (firstNonZeroIndex === spliceIndexes[0]) {
    spliceIndexes.unshift(-1);
  } else {
    total += firstNonZeroIndex;
  }

  if (spliceIndexes.length == 1 && firstNonZeroIndex == 0)
    spliceIndexes.unshift(-1);
  //   console.log({ spliceIndexes });

  for (let i = 0; i < nums.length - 1; i++) {
    let difference = spliceIndexes[i + 1] - spliceIndexes[i] - 1;
    while (difference) {
      total += difference;
      difference--;
    }
  }

  return total;
};

console.log(zeroFilledSubarray([0, 0, 0, 0, 0])); // 6
