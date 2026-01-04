/* You are given a string s consisting of lowercase English letters ('a' to 'z').

Your task is to:

Find the vowel (one of 'a', 'e', 'i', 'o', or 'u') with the maximum frequency.
Find the consonant (all other letters excluding vowels) with the maximum frequency.
Return the sum of the two frequencies.

Note: If multiple vowels or consonants have the same maximum frequency, you may choose any one of them. If there are no vowels or no consonants in the string, consider their frequency as 0.

The frequency of a letter x is the number of times it occurs in the string.*/

var maxFreqSum = function (s) {
  let count = new Map();
  let maxVowel = 0;
  let maxCons = 0;

  for (let i of s) {
    if (count.has(i)) {
      count.set(i, count.get(i) + 1);
    } else {
      count.set(i, 1);
    }
  }

  for (let [x, num] of count) {
    if ("aeiou".includes(x)) {
      maxVowel = Math.max(num, maxVowel);
    } else {
      maxCons = Math.max(num, maxCons);
    }
  }
  return maxVowel + maxCons;
};
console.log(maxFreqSum("abciiideff")); // 5
console.log(maxFreqSum("aeiou")); // 1
console.log(maxFreqSum("leetcode")); // 4
