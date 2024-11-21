'use strict'

// function countDown(number) {
//     for (let i = number; i > 0; i--) {
//         console.log(i)
//     }
// };

// console.log(countDown(10));

// function countUp(number) {
//     for (let i = 0; i <= number; i++) {
//         console.log(i)
//     }
// }

// countUp(10);

function countDownRecursion(number) {
    if (number <= 0) {
        console.log('Done!');
        return;
    } else {
        console.log(number);
        countDownRecursion(number - 1);
    }
}

countDownRecursion(10);

const arr = [1, 1, [2, 2], [[3, [4, 5, [0]], 3], 2]];

function concatArrRecursion(items) {
    const flattened = [];

    items.forEach((item) => {
        if (Array.isArray(item)) {
            flattened.push(...concatArrRecursion(item));
        } else {
            flattened.push(item);
        }
    });

    return flattened;
}

concatArrRecursion(arr)