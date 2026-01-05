const arr = new Array(100);
for (let i = 0; i < arr.length; i++) {
  arr[i] = i;
}

const binarySearch = (array, target) => {
  let low = 0;
  let high = array.length - 1;

  while (low <= high) {
    let middle = Math.floor(low + (high - low) / 2);
    let value = array[middle];

    if (value > target) {
      high = middle - 1;
    } else if (value < target) {
      low = middle + 1;
    } else {
      return middle;
    }
  }
  return -1;
};

const index = binarySearch(arr, 42);

if (index === -1) {
  console.log("Element not found");
} else {
  console.log("Element found at index: " + index);
}
