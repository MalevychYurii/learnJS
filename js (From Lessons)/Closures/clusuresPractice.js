function start() {
    let number = 5;

    function bottom() {
        console.log(number);
    }

    bottom();
}
start();

function createCounter() {
    let counter = 0;

    function counterChange() {
        counter = counter + 1;
        return counter
    }

    return counterChange;
}

const increment = createCounter();
const a1 = increment();
const a2 = increment();
const a3 = increment();

console.log(a1, a2, a3);

alert("1, 2, 3"[3]);