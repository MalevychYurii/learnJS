'use strict';

const now = new Date();
// new Date.parse('2025-01-19');

// console.log(now.setHours(22));
// console.log(now);

// console.log(now.getFullYear());
// console.log(now.getMonth());
// console.log(now.getDate());
// console.log(now.getDay());
// console.log(now.getUTCHours());

// console.log(now.getTimezoneOffset());
// console.log(now.getTime());
// console.log(now);

let start = new Date();

for (let i = 0; i < 1000000; i++) {
    let some = i ** 3;
}

let end = new Date();

console.log(`Цикл відпрацював за ${end - start} мілісекунд.`)