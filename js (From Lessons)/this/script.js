'use strict';

function showThis(a, b) {
    console.log(this);

    function sum() {
        console.log(this);
        return a + b;
    }

    console.log(sum());
}

showThis(4, 5);

const obj = {
    a: 20,
    b: 15,
    sum: function () {
        function shout() {
            console.log(this)
        }
        shout();
    }
};
obj.sum()

function User(name, id) {
    this.name = name;
    this.id = id;
    this.human = true;
    this.hello = function () {
        console.log(`Hello + ${this.name}`);
    }
}
let ivan = new User('Ivan', 23);

function sayName(surname) {
    console.log(this);
    console.log(this.name + surname);
}

const user = {
    name: 'Alex'
};

sayName.call(user, 'Smith');
sayName.apply(user, ['Smith']);
// 1) Звичайна ф-я: this = window, але якщо є 'use strict', то - undefined
// 2) Контектс в методів об'єкта - це сам об'єкт
// 3) This в конструкторах і класах - це новий екземпляр об'єкта
// 4) Ручна прив'язка: call, apply, bind

const btn = document.querySelector('button');

btn.addEventListener('click', function () {
    console.log(this)
});