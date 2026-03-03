function toCamelCase(str) {
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "_" || str[i] === "-") {
      str = str.slice(0, i) + str[i + 1].toUpperCase() + str.slice(i + 2);
    }
  }
  return str;
}

console.log(toCamelCase("the_stealth_warrior"));
console.log(toCamelCase("The-Stealth-Warrior"));
console.log(toCamelCase("A_B_C"));
console.log(toCamelCase(""));
