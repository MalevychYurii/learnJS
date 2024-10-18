let num = 15;

 if (num > 20) {
    console.log('Num>20');
} else if (num === 13) {
    console.log('Num=13');
} else {
    console.log('test');
} 

(num < 10) ? console.log('TRUE') : console.log('FALSE');

switch (num) {
    case 49: 
        console.log('NePravda');
        break;
    case 100:
        console.log('NePravda');
        break;
    case 16: 
        console.log('Pravda');
        break;
    default: 
        console.log('ne vgadav')
}