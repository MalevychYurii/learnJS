'use strict';

function User(name, age) {
    this.name = name;
    this.age = age;
    this.human = true;
    this.hello = function () {
        console.log(`Hello ${this.name}`)
    }
}

const roman = new User('Roman', 21);
const alex = new User('Alex', 39)

roman.hello();
alex.hello();

console.log(alex);
console.log(roman);