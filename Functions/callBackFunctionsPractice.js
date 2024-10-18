'use strict'

function test() {
    setTimeout(function testtime() {
        console.log('1'), 500;
    })
}

function afterTest() {
    console.log('2');
}

test();
afterTest();

function callBackFunction(lang, callback) {
    console.log(`Я вивчаю: ${lang}`);
    callback();
}

function done() {
    console.log('Я вивчаю callback функції!');
};

callBackFunction('JavaScript', done);