// This on its own wont show in app you need get to use it
let count = 0;

const inc = () => ++count;
const dec = () => --count;

const getCount = () => count;

// You can export module functions to other files
// in this example its used on app.js
module.exports = {
    inc,
    dec,
    getCount
};


