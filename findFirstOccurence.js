/* Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack. */
var strStr = function (haystack, needle) {
  return haystack.indexOf(needle);
};
console.log(strStr("hello", "ll")); // 2
console.log(strStr("aaaaa", "bba")); // -1
console.log(strStr("leetcode", "leeto")); // -1

var strStr1 = function (haystack, needle) {
  if (needle === "") return 0;

  for (let i = 0; i <= haystack.length - needle.length; i++) {
    let j = 0;
    for (; j < needle.length; j++) {
      if (haystack[i + j] !== needle[j]) {
        break;
      }
    }
    if (j === needle.length) {
      return i;
    }
  }
  return -1;
};
console.log(strStr1("hello", "ll")); // 2
console.log(strStr1("aaaaa", "bba")); // -1
console.log(strStr1("leetcode", "leeto")); // -1
