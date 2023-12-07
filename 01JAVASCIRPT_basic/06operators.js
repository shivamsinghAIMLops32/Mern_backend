// Different types of opeators are there [ arithmetic, logical, assignment, relational]

// 1. ARITHMETIC OPERATOR -> [+,-,*,/,%,**]
console.log(10+20);             // x plus y
console.log(10-20);           // x subtract y
console.log(10*20);           // x multiply y
console.log(20/10);          // divide x by y gives quotient
console.log(2**3);          // for power x^y or exponent operator
console.log(20%10);        // remainder in result

// 2. ASSIGNMENT OPERATOR -> [ =, +=, -=, *=, /=, %=]
let a = 10;                  // right hand value get assigned to left variable
console.log(a);

a += 2;                       // a = a + 2;     ->  a = 10 +2;
console.log(a);

a -= 3;                     // a = a - 3;      -> a = 12-3;
console.log(a);

a *= 5;                     // a = a * 5;     -> a = 9 * 5;
console.log(a);

a **= 2;                     // a = a ** 2;     -> a = 45 * 45;
console.log(a);

a /= 5;                      // a = a / 5;      -> a = 2025 / 5;
console.log(a);

a %= 6;                      // a = a % 6;      -> a = 405 % 6;
console.log(a);

// 3. RELATIONAL OPERATOR  ->  [ >, <, <=, >=, !=, ==, ===] comparison opoerator always return true or false 
let value1 = 20;
let value2 =  20.1;
 console.log(value1 > value2);
 console.log(value1 < value2);
 console.log(value1 >= value2);
 console.log(value1 <= value2);
 console.log(value1 != value2);
 console.log(value1 == value2);
 console.log(value1 === value2);

 // 4. LOGICAL OPERATOR  -> [&&, ||, !] = [ AND, OR, NOT].     LOGIC GATES gives boolean output.
 let num1 = 5;
 let num2 = 10;

 // ? how does it work (if condition1 is true) && (if condition2 is true) then and operator gives true.
 console.log(num1 &&  num2);

 console.log( (num1  > num2) && (num1 < num2));   // false && true = false
 console.log( (num1  > num2) || (num1 < num2));   // false || true = true
 console.log(!(num1 == num2));
 console.log( !((num1 > num2) || (num1 < num2)));   // not (result) = if result = true it'll convert false or vice versa 

