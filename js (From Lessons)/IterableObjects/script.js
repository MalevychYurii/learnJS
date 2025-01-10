let salaries = {
    start: 1,
    end: 5,
    testMethod: function () {
        console.log("Hello")
    },
    [Symbol.iterator]() { // створюємо власний ітератор
        let current = this.start;
        let last = this.end;
        return {
            next() {
                if (current <= last) {
                    return { value: current++, done: false };
                } else {
                    return { value: undefined, done: true };
                }
            }
        };
    }
};

for (let num of salaries) {
    console.log(num);
};


