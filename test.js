'use strict';

const obj = {
    name: 'Alex',
    surname: 'Smith',
    age: 25
};

for (let key in obj) {
    console.log(key, obj[key])
}

const arr = ['b', 'a', 'c'];

// for (let key in arr) {
//     console.log(arr[key])
// }

// arr.forEach(item => {
//     console.log(item)
// });

for (let key of arr) {
    console.log(key)
}

let object = {
    ann: 1000,
    john: 1000,
    george: 2000,
    [Symbol.iterator]() {

        const values = Object.values(this);
        let index = 0;
        return {
            next() {
                if (index < values.length) {
                    return { value: values[index++], done: false }
                } else {
                    return { value: undefined, done: true }
                }
            }
        }
    }
};

let objArr = [...object];
let total = 0;

for (let value of objArr) {
    total += value;
}

let average = total / objArr.length;
console.log(average)