'use strict'

const arr = [1, 67, 3, 4, 28];
arr.sort(compareNum); // sort використовує алгоритм швидкого сортування
console.log(arr);

function compareNum(a, b) {
    return a - b;
};

// arr.forEach(function(item, i, arr) {
//     console.log(`Порядковий номер: ${i}. Елемент: ${item} в середині масиву ${arr}`);
// });

// arr.pop(); видаляє останній елемент масиву
// arr.push(10); додає елемент в кінець масиву
// console.log(arr);

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// } перебір всіх елементів масиву

// for (let value of arr) {
//     console.log(value);
// } // перебір за допомогою конструкції for..of. 

