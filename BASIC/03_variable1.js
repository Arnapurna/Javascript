// Variable is a container or small memory location which is used to store a single value.
// To declare a variable we use three keywords :-   let, var, const
// Rules
//  1) Variable name should start with lowercase letter
//  2) Variable name should not start with number
//  3) If we are having multiple words for variable name, then every 2nd word 1st character should be uppercase

// Var

var value = 3;
console.log(value);


var firstName = "Arnapurna";
console.log(firstName);


//let

let a = 1;
a = a--;
console.log(a);
a = --a;
console.log(a);

let lastName = "Bedi";
console.log(lastName);

// const  
// 1) In const keyword at the time of declaration initialization is compulsary

// const a;         // This will throw error
console.log(a);

// 2)For const variable re-assignment is not possible. i.e, We can not change the value of const variable after declaration

const x = 10;
console.log(x);
x = 20;               //This will throw error
console.log(x)
