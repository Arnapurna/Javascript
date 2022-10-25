// A comparison operator compares its operands and returns a logical value based on whether the comparison is true.
// The operands can be numerical, string, logical, or object values.

//(
// Equal (==)                           //Returns true if the operands are equal.
// Not equal (!=)                       //Returns true if the operands are not equal.
// Strict equal (===)                   //Returns true if the operands are equal and of the same type. See also Object.is and sameness in JS.
// Strict not equal (!==)               //Returns true if the operands are of the same type but not equal, or are of different type.
// Greater than (>)                     //Returns true if the left operand is greater than the right operand.
// Greater than or equal (>=)           //Returns true if the left operand is greater than or equal to the right operand.
// Less than (<)                        //Returns true if the left operand is less than the right operand.
// Less than or equal (<=)              //Returns true if the left operand is less than or equal to the right operand.
//)

let a = 10;
let b = 20;
console.log(a == b);          //false
console.log(a != b);          //true
console.log(a === b);         //false
console.log(a !== b);         //true
console.log(a > b);           //false
console.log(a >= b);          //false
console.log(a < b);           //true
console.log(a <= b);          //true

let c = '10';
let d = 10;
console.log(c == d);          //true
console.log(c != d);          //false
console.log(c === d);         //false
console.log(c !== d);         //true
console.log(c > d);           //false
console.log(c >= d);          //true
console.log(c < d);           //false
console.log(c <= d);          //true
