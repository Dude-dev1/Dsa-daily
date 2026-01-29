const bubbleSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let temp = 0;
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  console.log("Sorted Array: ", arr);
  return arr;
};

bubbleSort([64, 34, 25, 12, 22, 11, 90]);
bubbleSort([
  423, 17, 891, 64, 305, 738, 52, 966, 129, 487, 812, 23, 654, 941, 38, 572,
  809, 146, 695, 274, 93, 520, 367, 854, 219, 681, 45, 777, 132, 598, 326, 903,
  71, 445, 619, 284, 950, 107, 763, 192, 539, 876, 34, 627, 401, 258, 715, 992,
  168, 340, 0, 1,
]);
