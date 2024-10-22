'use strict'

const a = {
    a: 1,
    b: 5
}

let cloneA = a;
cloneA.b = 10

console.log(a);
console.log(cloneA); // standart clone

const obj = {
    ve: 10,
    je: 15
}

const copy = {}

console.log(obj);
console.log(Object.assign(copy, obj)); // use object.assign method to clone

const arr1 = [1, 2, 5]
const arr2 = [...arr1, 6, 7]

console.log(arr1);
console.log(arr2); // use spread syntax to clone
// all of this is shallow copy!!!