'use strict';

console.log(`Запит даних...`);

const req = new Promise(function (resolve, reject) {
    setTimeout(() => {
        console.log('Підготовка даних...')

        const product = {
            name: 'TV',
            price: 2000
        };

        resolve(product);
    }, 2000);
});

req.then(() => {
    setTimeout((product) => {
        product.status = 'order',
            console.log(product);
    })
})