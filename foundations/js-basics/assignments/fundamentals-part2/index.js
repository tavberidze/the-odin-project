function troubleshooting() {
  const a = 1;
  const b = 1;

  let result;

  result = a + b;

  return result;

}

const result = troubleshooting();

if (result === 2) {
  console.log("Congrats! you got the right answer");
} else if (typeof result === 'number') {
  console.log(`You returned the number ${result}, the result should be the number 2`);
} else {
  console.log(`You returned string "${result}", the result should be the number 2`)};

  