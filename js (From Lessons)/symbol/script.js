'use strict'

const obj = {
    name: 'Test',
    [Symbol('id')]: 1,
    getId: function () {
        return this[id];
    }
}

// let id = Symbol('id');
// obj[id] = 1;

console.log(obj);

for (let value in obj) {
    console.log(value)
}

console.log(obj[Object.getOwnPropertySymbols(obj)[0]]);