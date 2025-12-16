function toKebabCase(input) {
    // Step 1: Input Validation
    if (typeof input !== 'string') {
        throw new TypeError('Input must be a string');
    }

    // Check for invalid characters (only letters, spaces, underscores, hyphens allowed)
    if (!/^[a-zA-Z\s_-]*$/.test(input)) {
        throw new Error('Input contains invalid characters. Only letters, spaces, underscores, and hyphens are allowed');
    }

    // Step 2: Normalization & Parsing
    const normalized = input.trim().toLowerCase();
    const words = normalized.split(/[\s_-]+/).filter(word => word.length > 0);

    // Step 3: Transformation & Output
    return words.join('-');
}

// Step 4: Verification - Example usages
try {
    // Valid string input
    console.log('Valid input:', toKebabCase('Hello World'));           // Output: hello-world
    console.log('Valid input:', toKebabCase('some_variable_name'));    // Output: some-variable-name
    console.log('Valid input:', toKebabCase('Mixed-Case_Input Here')); // Output: mixed-case-input-here

    // Non-string input
    console.log(toKebabCase(123));
} catch (error) {
    console.error('Error:', error.message); // TypeError: Input must be a string
}

try {
    // Invalid characters
    console.log(toKebabCase('hello@world'));
} catch (error) {
    console.error('Error:', error.message); // Error: Input contains invalid characters...
}