'use strict';

const promise = new Promise((resolve, reject) => {
    console.log(`First log`)
    resolve();
});

promise.then(() => {
    setTimeout(() => {
        console.log(`Second log`)
    }, 2000);
}); // 1

const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve();
        reject();
    })
});

promise2.then(() => {
    console.log(`Completed`)
}).catch(() => {
    console.log(`Failed`)
}); // 2

function sendForm(data) {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            if (data.name) {
                resolve(`Completed`);
            } else {
                reject(`Failed`);
            }
        }, data.name ? 2000 : 1000);
    });
}

sendForm({ name: "Роман", email: "roman@example.com" })
    .then(response => console.log(response))
    .catch(error => console.error(error)); // 3


function task1() {
    return new Promise((resolve, reject) => {
        resolve(`log`);
    })
}

function task2() {
    return new Promise((resolve, reject) => {
        resolve(`log`);
    })
}

function task3() {
    return new Promise((resolve, reject) => {
        resolve(`log`);
    })
}

Promise.all([task1, task2, task3]).then(() => {
    console.log(`Completed`)
}) // 4