// const counter = require("./myModule");
// With this u can write shorter function calls not counter.something
const {inc, dec, getCount} = require("./myModule");
inc();
inc();

console.log(getCount());
dec();
console.log(getCount());