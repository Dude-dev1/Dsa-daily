// const linearSort = (arr1, arr2) => {
//   const sortedArr = [];
//   const T1 = [];
//   const T2 = [];
//   const T3 = [];

//   let countA = 0,
//     countB = 0,
//     countC = 0;

//   while (arr1.length > 0 && arr2.length > 0) {
//     if (arr1[0] < arr2[0]) {
//       sortedArr.push(arr1.shift());
//     } else {
//       sortedArr.push(arr2.shift());
//     }
//   }
//   while (arr1.length > 0) sortedArr.push(arr1.shift());
//   while (arr2.length > 0) sortedArr.push(arr2.shift());

//   for (let i = 0; i < sortedArr.length; i++) {
//     if (sortedArr[i] === "A") {
//       countA++;
//       T3.push(sortedArr[i]);
//     } else if (sortedArr[i] === "B") {
//       countB++;
//       T2.push(sortedArr[i]);
//     } else if (sortedArr[i] === "C") {
//       countC++;
//       T1.push(sortedArr[i]);
//     }
//     for (let j = 0; j < i; j++) {
//       if (sortedArr[i] < sortedArr[j]) {
//         let temp = sortedArr[i];
//         sortedArr[i] = sortedArr[j];
//         sortedArr[j] = temp;
//       }
//     }
//   }
//   console.log(countA, countB, countC, T1, T2, T3);

//   return sortedArr;
// };

// console.log(
//   linearSort(["A", "B", "C", "A", "C", "B", "B"], ["C", "A", "B", "C", "A"])
// );
