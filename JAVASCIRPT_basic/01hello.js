console.log('hello world');

// for checking type of a operator we will use typeof

console.log(typeof null);    // object
console.log(typeof 0);       // number
console.log(typeof "shivam");   // string

console.log(typeof (5 == 6));       // boolean

console.log(typeof (5 | 6));          // number cause it will return a number after bit by bit comparison

console.log(typeof (() => {
  console.log("i am function type");
}));
