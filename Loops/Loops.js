let result = '';
const lenght = 7;

/* for (let i = 1; i < lenght; i++) {
    for (let j = 0; j < i; j++) {
        result = result + "*";
    }
    result = result + "\n"; // Коротка форма: result += "\n";
}

console.log(result); */ // трикутник зірочок

/* for (let i = lenght - 1; i > 0; i--) {
    for (let j = 0; j < i; j++) {
        result = result + "*";
    }
    result = result + "\n"
}

console.log(result); */ // зворотній трикутник зірочок

First: for (let i = 0; i < 3; i++) {
    console.log(`First level: ${i}`);
    for (let j = 0; j < 3; j++) {
        console.log(`Second level: ${j}`);
    }
    for (let k = 0; k < 3; k++) {
        if (k === 2) break First;
        console.log(`Third level: ${k}`);
    }
}
