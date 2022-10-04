// Logical operators

// Logical operators are typically used with Boolean (logical) values; when they are, they return a Boolean value.
// However, the && and || operators actually return the value of one of the specified operands, so if these operators are used with non-Boolean values, they may return a non-Boolean value.
// The logical operators are :-

//(
//    Logical AND (&&)  (a && b)            // Returns a if it can be converted to false; otherwise, returns b. Thus, when used with Boolean values, && returns true if both operands are true; otherwise, returns false.
//    Logical OR (||)   (a || b)            // Returns a if it can be converted to true; otherwise, returns b. Thus, when used with Boolean values, || returns true if either operand is true; if both are false, returns false.
//    Logical NOT (!)   (~a)                // Returns false if its single operand that can be converted to true; otherwise, returns true
//)

console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);

console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log(false || false);

console.log(~true);
console.log(~false);