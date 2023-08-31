function add7(num) {
  return num + 7;
};

console.log(add7(20));

function multiply(num1, num2) {
  return num1 * num2;
};

console.log(multiply(3, 5));

function capitalize(str) {
  let firstLetter = str.charAt(0);
  let firstLetterCapitalized = firstLetter.toUpperCase();
  let string = str.replace(`${firstLetter}`, `${firstLetterCapitalized}`);
  return string;
};

console.log(capitalize("string"));

function lastLetter(str) {
  const lastLetter = str.slice(-1);
  return lastLetter;
};

console.log(lastLetter("string"));
