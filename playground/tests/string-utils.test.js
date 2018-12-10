const { guarantee } = require('tyrion');
const stringUtils = require('../src/string-utils');

// Group: capitalizeFirstLetter method
// Test: capitalizes the first letter of a string
guarantee(stringUtils.capitalizeFirstLetter('why so serious?') === 'Why so serious?');
// Test: don't change the case of the remaining characters
guarantee(stringUtils.capitalizeFirstLetter('why So Serious?') === 'Why So Serious?');

// Group: isBlank method
// Test: returns true when passing an empty string
guarantee(stringUtils.isBlank(''));
// Test: returns true when passing a string containing only spaces
guarantee(stringUtils.isBlank('      '));
// Test: returns false when passing a non-blank string
guarantee(!stringUtils.isBlank('whatever'));

// Group: startsWith method
// Test: returns true when it starts with the passed string
guarantee(stringUtils.startsWith('Just when I...', 'Just'));
// Test: returns false when it contains the passed string, but doesn't start with it
guarantee(!stringUtils.startsWith('Just when I...', 'when I'));
// Test: returns false when it doesn't contain the passed string
guarantee(!stringUtils.startsWith('Just when I...', 'corleone'));