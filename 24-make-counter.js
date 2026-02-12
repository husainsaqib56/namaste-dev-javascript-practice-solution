function makeCounter(initialValue = 0) {
    // Your implementation

    let count = initialValue;

    return {
        increment: function () {
            count++;
            return count;
        },
        decrement: function () {
            count--;
            return count;  
        },
        reset() {
            count = initialValue;
            return count;
        },

        getValue: function () {
            return count;
        }
    }
}

module.exports = makeCounter;