// Difference between == and ===

// == is a normal comparison operator.
// Incase of == operator type coersion happens.
// === operator is a strict comparison operator
// Incase of === operator type coersion will not happens.
// Incase of == it will check only value of both the operand.
// But incase of === it will check value as well as datatypes of both the operand.

let a = 10;
let b = '10';
if (a == b)
    console.log("Both are same");
else
    console.log("Both are not same");

let c = 10;
let d = "10";
if (c === d)
    console.log("Both are same");
else
    console.log("Both are not same");