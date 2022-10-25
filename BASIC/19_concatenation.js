//  Concatenation means joining or combining two or more operand.

//  number+number -> Addition
//  number+string -> concatenation
//  string+number -> concatenation
//  string+string -> concatenation

console.log(1+1);                       // 2
console.log(1+2+"3");                   // 33

let res = 1+2+"Hi"+3+4+'A'+"B"+5;
console.log(res, typeof res);           // 3Hi34AB5 string