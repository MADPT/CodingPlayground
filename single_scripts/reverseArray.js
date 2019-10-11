const input = ["l", "o", "r", "e", "m", "i", "p", "s", "u", "m"];
const result = [];

function customReverse(accumulator, letter) {
  // Task 1: Implement this function such that it reverses the array when passing it to Array.prototype.reduce.
  return [letter, ...accumulator];
}

function assignResult(array) {
  // Task 2: Above defined "const result" should hold the value of array.
  return result.push(...array);
}

assignResult(input.reduce(customReverse, []));
const testPassed = input.reverse().join("") === result.join("");
// Bonus question: Why can't we check (result === input.reverse()) to find out whether the test has passed?

/**
  * They are different instances of objects and two object instances will never be equal, even if they contain same data.
  * That said, the identity operator (===) returns false.
*/
