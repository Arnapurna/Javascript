// There are 2 types of variables :-
//      1) Local variable =>The variables which are declare inside the function or inside the block, called local variables.
//      2) Global variable => The variables which are declared outside the function or outside the block, called global variables.

function greetMorning(){
    let msg="Good Morning";         //Local variable
    return console.log(msg);
} 

{
    let a=10;                       //Local variable
    console.log(a);
}
// console.log(a);                     //Outside the block we can not access the variable a


let x= 10;                          //Global variable
function greetMsg(){}

let y=20;                           //Global variable
{}

greetMorning();
greetMsg();

console.log(x);
console.log(y);