/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 * the function should return a promise just like before
 */

function sleep(ms) {
    return new Promise((resolve) => {
        const start = Date.now();
        while (Date.now() - start < ms) {
            // Busy-wait loop
        }
        resolve();
    });
}

// Usage example
sleep(2000).then(() => {
    console.log('2 seconds have passed');
});

module.exports = sleep;
