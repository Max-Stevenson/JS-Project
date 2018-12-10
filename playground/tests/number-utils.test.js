const { guarantee } = require('tyrion');
const numberUtils = require('../src/number-utils');

// Group: isPrime method
// Test: returns true for prime numbers
guarantee(numberUtils.isPrime(2));
guarantee(numberUtils.isPrime(3));
guarantee(numberUtils.isPrime(5));
guarantee(numberUtils.isPrime(7));
guarantee(numberUtils.isPrime(23));
// Test: returns false for non-prime numbers
guarantee(!numberUtils.isPrime(4));
guarantee(!numberUtils.isPrime(8));
guarantee(!numberUtils.isPrime(10));
guarantee(!numberUtils.isPrime(20));