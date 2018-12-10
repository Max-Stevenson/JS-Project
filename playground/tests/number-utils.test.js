const { guarantee, check } = require('tyrion');
const numberUtils = require('../src/number-utils');

check('returns true for prime numbers', () => {
	guarantee(numberUtils.isPrime(2));
	guarantee(numberUtils.isPrime(3));
	guarantee(numberUtils.isPrime(5));
	guarantee(numberUtils.isPrime(7));
	guarantee(numberUtils.isPrime(23));
});

check('returns false for non-prime numbers', () => {
	guarantee(!numberUtils.isPrime(4));
	guarantee(!numberUtils.isPrime(8));
	guarantee(!numberUtils.isPrime(10));
	guarantee(!numberUtils.isPrime(20));
});

check('this test should fail', () => {
	guarantee(123 === 321);
});
