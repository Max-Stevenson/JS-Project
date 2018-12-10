const { guarantee, check, group } = require('tyrion');
const stringUtils = require('../src/string-utils');

group('stringUtils', () => {
  group('method: capitalizeFirstLetter', () => {
    check('capitalizes the first letter of a string', () => {
      guarantee(stringUtils.capitalizeFirstLetter('why so serious?') === 'Why so serious?');
    });

    check('don\'t change the case of the remaining characters', () => {
      guarantee(stringUtils.capitalizeFirstLetter('why So Serious?') === 'Why So Serious?');
    });
  });

  group('method: isBlank', () => {
    check('returns true when passing an empty string', () => {
      guarantee(stringUtils.isBlank(''));
    });

    check('returns true when passing a string containing only spaces', () => {
      guarantee(stringUtils.isBlank('      '));
    });

    check('returns false when passing a non-blank string', () => {
      guarantee(!stringUtils.isBlank('whatever'));
    });
  });

  group('method: startsWith', () => {
    check('returns true when it starts with the passed string', () => {
      guarantee(stringUtils.startsWith('Just when I...', 'Just'));
    });

    check('returns false when it contains the passed string, but doesn\'t start with it', () => {
      guarantee(!stringUtils.startsWith('Just when I...', 'when I'));
    });

    check('returns false when it doesn\'t contain the passed string', () => {
      guarantee(!stringUtils.startsWith('Just when I...', 'corleone'));
    });
  });
});