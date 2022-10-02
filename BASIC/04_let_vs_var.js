// let Vs var

// 1) In JS if I declare a variable using let keyword re-declaration is not possible. But with var keyword re-declarartion is possible

let a=10;
console.log(a);

// let a= 20;      // Here Re-declaration of variable is not possible
console.log(a);

var b=10;
console.log(b);

var b=20;           // Here Re-declaration of variable is possible
console.log(b);

// 2) Variable re-initialisation or re-assignment is possible using both let and var keyword.

let c=10;
console.log(c);
c=20;
console.log(c);

var d=10;
console.log(d);
d=20;
console.log(d);
