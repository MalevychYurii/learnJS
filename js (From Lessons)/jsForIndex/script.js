const box = document.getElementById('box'),
    btns = document.getElementsByTagName('button'),
    circles = document.getElementsByClassName('circle'),
    wrapper = document.querySelector('.wrapper'),
    hearts = wrapper.querySelectorAll('.heart'),
    oneHeart = wrapper.querySelector('.heart');

console.log(btns);

box.style.backgroundColor = 'blue';
box.style.width = '500px';

btns[1].style.borderRadius = '100%';
circles[0].style.backgroundColor = 'red';

// for (let i = 0; i < hearts.length; i++) {
//     hearts[i].style.backgroundColor = 'blue';
// }

hearts.forEach(item => {
    item.style.backgroundColor = 'green';
});

const div = document.createElement('div');

div.classList.add('black');
document.body.append(div);
div.innerHTML = "<h1>Hi!</h1>";

// circles[0].before(div);
// circles[0].after(div);
// hearts[0].replaceWith(circles[0]);
// hearts[1].after(div);

const test = document.createElement('div');

test.classList.add('black');
document.body.prepend(test);
test.innerHTML = "<h1>Hi</h1>";
