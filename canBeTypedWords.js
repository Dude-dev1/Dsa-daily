/* There is a malfunctioning keyboard where some letter keys do not work. All other keys on the keyboard work properly.

Given a string text of words separated by a single space (no leading or trailing spaces) and a string brokenLetters of all distinct letter keys that are broken, return the number of words in text you can fully type using this keyboard.*/

var canBeTypedWords = function (text, brokenLetters) {
  let track = 0;
  let texts = text.split(" ");
  let broken = new Set(brokenLetters.split(""));

  for (let text of texts) {
    let type = true;

    for (let char of text) {
      if (broken.has(char)) {
        type = !type;
        break;
      }
    }

    if (type) track++;
  }

  return track;
};

console.log(canBeTypedWords("hello world", "ad")); // 1
console.log(canBeTypedWords("leet code", "lt")); // 1
console.log(canBeTypedWords("leet code", "e")); // 0
