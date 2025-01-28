'use strict';

const name = 'Alex';

function test() {
    console.log(this); // Перевіримо, що буде у this
}

test.call(name);  // 'this' тепер дорівнює 'Alex'
