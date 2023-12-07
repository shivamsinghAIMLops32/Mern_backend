// in js we have numbers of special kind +0, -0, NaN, infinity, negative infinity.

// so negative 0 use to tell the direction. example a car is moving towards 0 in left direction and car velocity become 0 so it will tell the car is at velocity = 0 but facing towards 0. 
let num = -0;
console.log(num);

// ? what is NaN.
// IF we are bound to return a value but we cant return a number so use use NaN.
// suppose if have to return a index which consist 5. if doesnt exist we can't return -1 cause it can be a index number of any value.
const arr = [2, 3, 7];
console.log(NaN);
console.log(typeof NaN);           // its type is number.

// QUE :- WHICH IS A NUMBER IN JAVASCRIPT WHICH IS NOT EQUAL TO ITSELF ?  Ans = NaN
console.log(NaN === NaN);       // false

// infinity and negative infinity.
console.log(Infinity);
console.log(-Infinity);

console.log(10 < Infinity);      // true
