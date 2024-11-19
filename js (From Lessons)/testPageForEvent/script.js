const btns = document.querySelectorAll('button'),
    overlay = document.querySelector('.overlay')

// btn.onclick = function () {
//     alert('Click!')
// };

let i = 0;
const testFunction = (e) => {
    console.log(e.currentTarget);
    console.log(e.type);
    // i++;
    // if (i == 1) {
    //     btn.removeEventListener('click', testFunction);
    // }
};

btns.forEach(btn => {
    btn.addEventListener('click', testFunction)
});

// btns.addEventListener('click', testFunction);
// overlay.addEventListener('click', testFunction);

const link = document.querySelector('a');

link.addEventListener('click', (event) => {
    event.preventDefault();

    console.log(event.target);
});