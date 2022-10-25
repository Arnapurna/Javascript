// To take user input we use prompt() function

let a = prompt("Enter a value");
let b = prompt("Enter b value");

console.log("a value is " + a);
console.log("b value is " + b);

// The default type of user input is string type.
// If we want to convert string to number type, we use Number() or '+' symbol.

let c = Number(prompt("Enter c value"));
let d = +prompt("Enter d value");
console.log(c + d);

// Number() function is a function used to convert string to number datatype
let x = Number("abc");
console.log(x, typeof x);                   // NaN 'number'

// NaN is a special value in JS
// NaN = Not a Number
// We get NaN as a result when expected input is number type but got different type.