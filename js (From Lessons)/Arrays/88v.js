'use strict';

// filter

const names = ['Alex', 'Yura', 'Ivan', 'Roman', 'Grigoriy'];

const shortNames = names.filter(name => {
    return name.length < 5;
});

console.log(shortNames);

// map 

const answers = ['OlEg', 'Hello'];

const result = answers.map(item => {
    return item.toLowerCase();
});

console.log(result);

// every/some

const some = [4, 'weqw', '43432'];

console.log(some.some(item => typeof(item) === 'number'));
console.log(some.every(item => typeof(item) === 'number'));

// reduce

// const arr = [4, 5, 1, 3, 2, 6];

// const arrResult = arr.reduce((sum, current) => {
//     return sum + current
// });

// console.log(arrResult);
const arr = ['apple', 'pear', 'plum'];

const arrResult = arr.reduce((sum, current) => {
    return sum + ', ' + current
}, 'banana');

console.log(arrResult);

const obj = {
    ivan: 'persone',
    ann: 'persone',
    dog: 'animal',
    cat: 'animal'
};

const newArr = Object.entries(obj)
.filter(item => item[1] === 'persone')
.map(item => item[0]);

console.log(newArr);