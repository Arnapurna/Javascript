// Assignment operators
// ( Assignment = 
//   Addition assignment +=
//   Subtraction assignment -=
//   Multiplication assignment *=
//   Division assignment /=
//   Remainder assignment %=
//   Exponentiation assignment **=
//   Left shift assignment <<= 
//   Right shift assignment >>=
//   Unsigned right shift assignment >>>=
//   Bitwise AND assignment &=
//   Bitwise XOR assignment ^=
//   Bitwise OR assignment |=
//   Logical AND assignment &&=
//   Logical OR assignment ||=
//   Logical nullish assignment ??=
//)
//An assignment operator assigns a value to its left operand based on the value of its right operand.

let a=10;
console.log(a);
console.log(a+=10);
console.log(a-=10);
console.log(a*=50);
console.log(a/=2);
console.log(a%=2);
console.log(a**=2);
a=5;
console.log(a<<=2);             //The left shift assignment operator (<<=) moves the specified amount of bits to the left and assigns the result to the variable.
                                //  0101 << 2 => 10100
console.log(a>>=1);             // The right shift assignment operator (>>=) moves the specified amount of bits to the right and assigns the result to the variable.
                                // 10100 >> 1 => 1010
 
a= 16;                               
console.log(a>>>=2);            // The unsigned right shift assignment operator (>>>=) moves the specified amount of bits to the right and assigns the result to the variable.
                                // 10000 >>> 2 => 100
 a=5;                               
console.log(a&=3);              // The bitwise AND assignment operator (&=) uses the binary representation of both operands, does a bitwise AND operation on them and assigns the result to the variable.
                                // 101 & 11 => 1
a=5;
console.log(a^=3);              // The bitwise XOR assignment operator (^=) uses the binary representation of both operands, does a bitwise XOR operation on them and assigns the result to the variable.
                                // 101 ^ 11 => 110
a=5;
console.log(a|=3);               // The bitwise OR assignment operator (|=) uses the binary representation of both operands, does a bitwise OR operation on them and assigns the result to the variable.
                                 // 101 | 11 => 111
a=1;
console.log(a&&=2);              // The logical AND assignment (x &&= y) operator only assigns if x is truthy.
let b=0;
console.log(b&&=2);

a=50;
console.log(a||=2);             // The logical OR assignment (x ||= y) operator only assigns if x is falsy.
b= '';
console.log(b||=2);             // The logical OR assignment (x ||= y) operator only assigns if x is falsy.
