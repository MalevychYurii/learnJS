'use strict'

const arr = [15, 29, 93];
// const arr1 = [1, 2, 3]
// const newArr = arr.concat(arr1); // використовується для об'єднання двох або більше масивів в один новий масив. 

// arr.splice(2, 2, 'q'); // використовується для зміни вмісту масиву, видаляючи або додаючи елементи на вказані індекси.
// let words = ["Hello", "world", "how", "are", "you"];
// let sentence = words.join(" ");
// console.log(sentence); перетворює array на string, об'єднує всі елементи масиву в 1 рядок

// let str = "Hello";
// let strArr = str.split(""); // перетворює string в array і розбиває рядок на окремі символи

// arr.push(5); // додає елемент в кінець масиву 
// arr.pop(); // видаляє останній елемент з масиву і повертає його
// arr.shift(); // видаляє перший елемент з масиву і повертає його
//arr.unshift('q'); // додає елемент в масив на початок
// delete arr[2]; // видаляє елемент масиву по індексу

// for (let i in arr) {
//     console.log(`Text ${i}`);
// } // перебір індексів

console.log(arr);
// console.log(newArr);
// console.log(strArr);


const arr1 = [
    { name: 'Yura', age: 20 },
    { name: 'Anton', age: 31 },
    { name: 'Bogdan', age: 59 },
    { name: 'anya', age: 18 },
]

arr1.sort((a, b) => a.name.localeCompare(b.name));
console.log(arr1);