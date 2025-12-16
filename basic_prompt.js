// Prompt: Write a JavaScript function called toCamelCase that takes a string in snake_case or kebab-case and converts it to camelCase.
// For example, toCamelCase('hello_world') should return 'helloWorld', and toCamelCase('foo-bar-baz') should return 'fooBarBaz'.

function toCamelCase(str) {
  return str
    .split(/[-_\s]+/)
    .map((word, index) => index === 0 ? word.toLowerCase() : word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join('');
}

// Examples:
// console.log(toCamelCase('first name')); // 'firstName'
// console.log(toCamelCase('user_id')); // 'userId'
// console.log(toCamelCase('SCREEN_NAME')); // 'screenName'
// console.log(toCamelCase('mobile-number')); // 'mobileNumber'

function addNumbers(a, b) {
  if (a === null || a === undefined || typeof a !== 'number' || isNaN(a)) {
    throw new Error('First input must be a valid number.');
  }
  if (b === null || b === undefined || typeof b !== 'number' || isNaN(b)) {
    throw new Error('Second input must be a valid number.');
  }
  return a + b;
}

// Examples:
// console.log(addNumbers(5, 3)); // 8
// addNumbers('5', 3); // throws Error: First input must be a valid number.
// addNumbers(null, 3); // throws Error: First input must be a valid number.
// addNumbers(5, undefined); // throws Error: Second input must be a valid number.