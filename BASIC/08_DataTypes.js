// JavaScript is a dynamic language with dynamic types.
// Variables in JavaScript are not directly associated with any particular value type, and any variable can be assigned (and re-assigned) values of all types:

let value = 42;     // value is now a number
value = "bar";      // value is now a string
value = true;       // value is now a boolean

// JavaScript is also a weakly typed language, which means it allows implicit type conversion when an operation involves mismatched types, instead of throwing type errors.

const num = 42;                 // num is a number
const result = num + "1";       // JavaScript coerces num to a string, so it can be concatenated with the other operand
console.log(result);            // 421


// There are two types of data types: -
//     1) Primitive(Pre - defined) -   a) Boolean
//                                     b) Undefined
//                                     c) Null
//                                     d) Number
//                                     e) BigInt
//                                     f) String
//                                     g) Symbol
// 2) Non-primitive (Derived) -        a)Class
//                                     b)Object
//                                     c)Function
//                                     d)Array
//                                     e)Regular Expression (RegExp)

// Number
// Number datatype used to store any numeric value(Integer,Decimal)
//'typeof' keyword used to check what type of vallue is assign to a variable

let a = 10;
console.log(a, typeof a);       // 10 number
let b = 10.04;
console.log(b, typeof b);       // 10.04 number

// String
// String datatype is used to store characters or group of characters
// In JS string can be enclosed within single quotes ('') or double quotes ("")

let string1 = "a";
console.log(string1);                       // a
console.log(typeof string1);                // string

let string2 = 'abc';
console.log(string2, typeof string2);       // abc string 

// Undefined
// Undefined is a datatypes which is used to store undefined value
// If we declared a variable without assigning any value, then the default value will be assigned by JS engine. (that default value is undefined)

let c;
console.log(c, typeof c);                   // undefined undefined
let x, y, z;
console.log(x, y, z);                       // undefined undefined undefined
x = 100; y = 200; z = 300;
console.log(x, y, z);                       // 100 200 300

// Boolean
// Boolean datatype is used to store true or false value.

let bool1 = true;
console.log(bool1);                         // true
let bool2 = false;
console.log(bool2);                         // false

// Null
// Null is a special value in JS, which represent empty value or dummy value.
// In JS the typeof null value is object.

let d=null;
console.log(d, typeof d);                   // null object