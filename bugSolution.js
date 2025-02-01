function checkNumber(num) {
  if (typeof num !== 'number') {
    return "Invalid input: Not a number";
  }
  if (num > 10) {
    return "The number is greater than 10";
  } else if (num < 10) {
    return "The number is less than 10";
  } else {
    return "The number is 10";
  }
}

console.log(checkNumber(10)); // Output: The number is 10
console.log(checkNumber(5));  // Output: The number is less than 10
console.log(checkNumber(15)); // Output: The number is greater than 10
console.log(checkNumber('10')); // Output: Invalid input: Not a number