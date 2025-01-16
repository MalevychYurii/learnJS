const buttons = document.querySelectorAll('button'),
    wrapper = document.querySelector('.btn-block');

// console.log(buttons[0].classList.length);
// console.log(buttons[0].classList.item(0));
// console.log(buttons[0].classList.add('test', 'testClass'));
// console.log(buttons[0].classList.remove('some', 'testClass'));

// if (buttons[0].classList.contains('blue')) {
//     console.log('True!')
// }

buttons[0].addEventListener('click', () => {
    // if (!buttons[1].classList.contains('red')) {
    //     buttons[1].classList.add('red');
    // } else {
    //     buttons[1].classList.remove('red');
    // }

    buttons[1].classList.toggle('red');
});

wrapper.addEventListener('click', (event) => {
    if (event.target && event.target.tagName == "BUTTON") {
        console.log("Hello")
    }
});

// buttons.forEach((btn) => {
//     btn.addEventListener('click', () => {
//         console.log("Hello")
//     })
// })

const btn = document.createElement('button');
btn.classList.add('red');
wrapper.append(btn);