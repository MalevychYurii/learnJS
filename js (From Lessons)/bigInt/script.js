'use strict';

const bigInt = 2141242352352352352352523523523523523523n;

const sameBigInt = BigInt(2141242352352352352352523523523523523523);

console.log(bigInt ** 2n)
console.log(5n/2n)

// console.log(5n + 5) // error

let int = 2n;
let num = 2;

console.log(int + BigInt(num));
console.log(Number(int) + num)