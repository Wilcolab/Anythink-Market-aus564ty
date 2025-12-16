/**
 * Converts strings from various formats to camelCase.
 * 
 * Handles multiple input formats including snake_case, kebab-case, PascalCase,
 * UPPER_SNAKE_CASE, and space-separated strings. Efficiently processes edge cases
 * such as empty strings, strings with only separators, and mixed formatting.
 * 
 * @function toCamelCase
 * @param {string} str - The input string to convert to camelCase
 * @returns {string} The converted camelCase string, or empty string if input is empty or contains only separators
 * 
 * @example
 * toCamelCase('hello_world'); // Returns: 'helloWorld'
 * @example
 * toCamelCase('foo-bar-baz'); // Returns: 'fooBarBaz'
 * @example
 * toCamelCase('PascalCase'); // Returns: 'pascalCase'
 * @example
 * toCamelCase('SCREEN_NAME'); // Returns: 'screenName'
 * @example
 * toCamelCase('first name'); // Returns: 'firstName'
 * @example
 * toCamelCase(''); // Returns: ''
 * @example
 * toCamelCase('___'); // Returns: ''
 * @example
 * toCamelCase('-a-b-'); // Returns: 'aB'
 */

/**
 * Converts strings from various formats to dot.case notation.
 * 
 * Transforms multiple input formats including snake_case, kebab-case, PascalCase,
 * UPPER_SNAKE_CASE, and space-separated strings into dot-separated lowercase words.
 * Handles edge cases including empty strings and strings containing only separators.
 * 
 * @function toDotCase
 * @param {string} str - The input string to convert to dot.case notation
 * @returns {string} The converted dot.case string, or empty string if input is empty or contains only separators
 * 
 * @example
 * toDotCase('hello_world'); // Returns: 'hello.world'
 * @example
 * toDotCase('foo-bar-baz'); // Returns: 'foo.bar.baz'
 * @example
 * toDotCase('PascalCase'); // Returns: 'pascal.case'
 * @example
 * toDotCase('SCREEN_NAME'); // Returns: 'screen.name'
 * @example
 * toDotCase('first name'); // Returns: 'first.name'
 * @example
 * toDotCase(''); // Returns: ''
 * @example
 * toDotCase('___'); // Returns: ''
 * @example
 * toDotCase('-a-b-'); // Returns: 'a.b'
 */
// Refined Prompt: Write a robust JavaScript function called toCamelCase that converts strings from various formats (snake_case, kebab-case, PascalCase, UPPER_SNAKE_CASE, space-separated) to camelCase.
// The function should handle edge cases such as empty strings, strings with only separators, leading/trailing separators, and mixed cases.
// Examples:
// - toCamelCase('hello_world') → 'helloWorld'
// - toCamelCase('foo-bar-baz') → 'fooBarBaz'
// - toCamelCase('PascalCase') → 'pascalCase'
// - toCamelCase('SCREEN_NAME') → 'screenName'
// - toCamelCase('first name') → 'firstName'
// - toCamelCase('') → ''
// - toCamelCase('___') → ''
// - toCamelCase('-a-b-') → 'aB'
// Ensure the function is efficient and uses regex or string methods appropriately.

function toCamelCase(str) {
  if (!str) return '';
  return str
    .replace(/([a-z])([A-Z])/g, '$1_$2')
    .toLowerCase()
    .split(/[-_\s]+/)
    .filter(word => word)
    .map((word, index) => index === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1))
    .join('');
}

// Examples:
// console.log(toCamelCase('hello_world')); // 'helloWorld'
// console.log(toCamelCase('foo-bar-baz')); // 'fooBarBaz'
// console.log(toCamelCase('PascalCase')); // 'pascalCase'
// console.log(toCamelCase('SCREEN_NAME')); // 'screenName'
// console.log(toCamelCase('first name')); // 'firstName'
// console.log(toCamelCase('')); // ''
// console.log(toCamelCase('___')); // ''
// console.log(toCamelCase('-a-b-')); // 'aB'

function toDotCase(str) {
  if (!str) return '';
  return str
    .replace(/([a-z])([A-Z])/g, '$1_$2')
    .toLowerCase()
    .split(/[-_\s]+/)
    .filter(word => word)
    .join('.');
}

// Examples:
// console.log(toDotCase('hello_world')); // 'hello.world'
// console.log(toDotCase('foo-bar-baz')); // 'foo.bar.baz'
// console.log(toDotCase('PascalCase')); // 'pascal.case'
// console.log(toDotCase('SCREEN_NAME')); // 'screen.name'
// console.log(toDotCase('first name')); // 'first.name'
// console.log(toDotCase('')); // ''
// console.log(toDotCase('___')); // ''
// console.log(toDotCase('-a-b-')); // 'a.b'
// console.log(toCamelCase('')); // ''
// console.log(toCamelCase('___')); // ''
// console.log(toCamelCase('-a-b-')); // 'aB'