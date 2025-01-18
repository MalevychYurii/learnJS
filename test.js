'use strict';

let counter = 0;

const timerId = setInterval(() => {
    counter++
    console.log(`${counter} секунда`);

    if (counter === 5) {
        clearInterval(timerId);
    }
}, 1000,)