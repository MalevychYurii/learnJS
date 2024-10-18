const obj = {
    userName: 'Yurii',
    age: 20,
    ocupation: 'Ukraine'
};

for (let key in obj) {
    console.log(`${key}: ${obj[key]}`)
};