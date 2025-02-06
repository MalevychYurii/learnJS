'use strict';

const promise = new Promise((resolve, reject) => {
    console.log(`First log`)
    resolve();
});

promise.then(() => {
    setTimeout(() => {
        console.log(`Second log`)
    }, 2000);
});