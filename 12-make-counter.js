function makeCounter(initialValue = 0) {
    // Your implementation
    let counter = initialValue;

    return {
        increment: function() {
            counter++;
            return counter;
        },
        decrement: function() {
            counter--;
            return counter;
        },
        reset: function () {
            counter = initialValue;
            return counter;
        }
    }
}

const counter = makeCounter(1);
console.log(counter.increment())
console.log(counter.decrement())

module.exports = makeCounter;