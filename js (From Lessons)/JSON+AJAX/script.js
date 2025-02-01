'use strict';

const person = {
    name: 'Alex',
    age: 23,
    parents: {
        mom: 'Olga',
        dad: 'Oleg'
    }
}

console.log(JSON.parse(JSON.stringify(person)));

const clone = JSON.parse(JSON.stringify(person));
clone.name = 'Yura';
console.log(clone);

