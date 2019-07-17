// // import './utils.js';
// import add, { square } from './utils';
// import canDrink from './person';
// console.log('app.js is running');
// console.log(square(5));
// console.log(add(5,3));
// //console.log(isAdult(5));
// console.log(canDrink(22));


console.log('hola');

var square = (x) => x** 2 ;
const add = (a, b) => a + b;
export  {
    square,
    add as default
};