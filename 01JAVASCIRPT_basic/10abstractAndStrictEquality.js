// EQUALITY OPERATOR -> (==)abstract equality operator  AND  (===)strict equality operator

// double equality operator also check for type like triple quality. but difference is (==) does type conversion(coercion) if both of type are difference and while (===) does return false if types are different and does type conversion if both are true.

console.log(5 == "5");       // true cause coercion takes place and convert string into number   
console.log(5 === "5");       // false cause both are of different choice

console.log("5" == 5);

console.log( 10 == "shivam");    // shivam cant be changed to a number but == will have to change to a num from string BUT it will be giving a NaN num as an return.   10 == NaN

