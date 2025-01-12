'use strict';

const user = {
    name: 'Alex',
    surname: 'Smith',
    birthday: '02/04/1993',
    showMyPublicData: function () {
        console.log(`${this.name} ${this.surname}`)
    }
};

const userMap = new Map(Object.entries(user));
console.log(userMap)

const newUserObj = Object.fromEntries(userMap);
console.log(newUserObj);

const shops = [
    { rice: 500 },
    { oil: 200 },
    { bread: 50 }
];

const budget = [5000, 15000, 25000];

const map = new Map([
    [{ paper: 400 }, 8000] // встановлюємо початкове значення і доказуємо, що це масив з масивами
]);

// key    // value
shops.forEach((shop, i) => { // встановлення значення за допомогою циклу 
    map.set(shop, budget[i])
});

// // key    // value
// map.set(shops[0], 5000) // встановлення для кожного елемента вручну
//     .set(shops[1], 15000)
//     .set(shops[2], 25000);

// console.log(map.get(shops[0]));
// console.log(map.has(shops[0]));
// map.delete(key);
// map.clear();
// map.size;
// map.keys();


// методи перебору карти

// const goods = [];
// for (let shop of map.keys()) {
//     goods.push(Object.keys(shop)[0])
// };

// console.log(goods)

// let result = 0
// let average = 0;
// for (let price of map.values()) {
//     result += price;
//     average = result / map.size
// }

// console.log(result, average)

// for (let [shop, value] of map.entries()) {
//     console.log(shop, value)
// }

// map.forEach((value, key, map) => {
//     console.log(key, value)
// })

