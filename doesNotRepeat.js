var doesNotRepeat = function (nums) {
  const map = new Map();
  let num = 0;

  for (let i = 0; i < nums.length; i++) {
    map.set(nums[i], (map.get(nums[i]) || 0) + 1);
  }

  for (let i = 0; i < nums.length; i++) {
    if (map.get(nums[i]) === 1) {
      num = nums[i];
      break;
    }
  }
  return num;

//   for (let i = 0; i < nums.length; i++) {
//     num ^= nums[i]
//   }
};
console.log(doesNotRepeat([3, 3, 4, 5, 4]));
