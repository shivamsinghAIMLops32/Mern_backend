// ?SHORT CIRCUITING = let if there's not an boolean value given to logical operator then js itself convert those operands into boolean
// 10 && 8 we haven't gave any boolean value to && operator
console.log(10 && 8);      // it will give value as 8;

// SO javascript selfy  convert these values or can say self conversion(type conversion).

// ToBoolean(arguments) -> abstract operation ToBoolean converts agruments to a value of type boolean.

// QUE:- what values are falsy value.
// ANS -> null,false,undefined,emptyString '', +0,-0, NaN(not a number)


// COERCION -> type InterConversion. JS does selfy someb type conersion so it known as coercion.

 // how logical and works internally ?  why console.log(10 && 8); is 8 not 10.
 // if first input is as true than js will get on second input whatever will be second input js will return.
 console.log(10 && 4); // 10 is true by coercion and then js check 4 which is also true so it will return the second input
 
 // if first input is false then js will never go on second input and will return first input as false.
 console.log(false && 5);
 console.log('' && 'shivam');
 console.log(null && true);     // it wil return null cause it's false so js will never check second cause both should be true to be true but it's already false.


 // OR gate
 console.log(true || false);
 console.log(false || '');      // false then check '' it's falsy value so result will be '' second value.
 console.log('' || "shivam");    // answer is shivam as it is second value.