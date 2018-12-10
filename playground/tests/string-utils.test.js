const { guarantee, check } = require('tyrion');
const stringUtils = require('../src/string-utils');

check('capitalizes the first letter of a string', () => {
	guarantee(stringUtils.capitalizeFirstLetter('why so serious?') === 'Why so serious?');
});

check('don\'t change the case of the remaining characters', () => {
	guarantee(stringUtils.capitalizeFirstLetter('why So Serious?') === 'Why So Serious?');
});

check('returns true when passing an empty string', () => {
	guarantee(stringUtils.isBlank(''));
	guarantee(stringUtils.isBlank('      '));
	guarantee(!stringUtils.isBlank('whatever'));
});

check('returns true when it starts with the passed string', () => {
	guarantee(stringUtils.startsWith('Just when I...', 'Just'));
});

check('returns false when it contains the passed string, but doesn\'t start with it', () => {
	guarantee(!stringUtils.startsWith('Just when I...', 'when I'));
});

check('returns false when it doesn\'t contain the passed string', () => {
	guarantee(!stringUtils.startsWith('Just when I...', 'corleone'));
});
