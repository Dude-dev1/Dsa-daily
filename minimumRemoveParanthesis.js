/*Given a string s of '(' , ')' and lowercase English characters.

Your task is to remove the minimum number of parentheses ( '(' or ')', in any positions ) so that the resulting parentheses string is valid and return any valid string.

Formally, a parentheses string is valid if and only if:

It is the empty string, contains only lowercase characters, or
It can be written as AB (A concatenated with B), where A and B are valid strings, or
It can be written as (A), where A is a valid string.*/

var minRemoveToMakeValid = function (s) {
  let res = [];
  let remove = new Set();

  // First traverse: find invalid )
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      res.push(i);
    } else if (s[i] === ")") {
      if (res.length === 0) {
        remove.add(i); // unmatched )
      } else {
        res.pop(); // matched
      }
    }
  }

  // Remaining ( are unmatched
  for (let idx of res) {
    remove.add(idx);
  }

  // Build result
  let result = "";
  for (let i = 0; i < s.length; i++) {
    if (!remove.has(i)) {
      result += s[i];
    }
  }

  return result;
};
console.log(minRemoveToMakeValid("a)b(c)d")); // "ab(c)d"
console.log(minRemoveToMakeValid("))((")); // ""
console.log(minRemoveToMakeValid("(a(b(c)d)")); // "a(b(c)d)"
