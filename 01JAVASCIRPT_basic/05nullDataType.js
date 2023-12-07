// non-zero value = It does stores something in it.
 const nonZero = 15
 console.log(typeof nonZero);

 // zero value = 0
 var Zero = 0;
 console.log(typeof Zero);

 // UNDEFINED IS blank space which can occupy something lateron , its type or kind of object it will store is yet to be define.
 const Undefined = undefined;
 let notDeclared;
 console.log(typeof Undefined);
 console.log(typeof notDeclared);


 // null is a void space having null or empty value. empty is considered as an value.
 const Null = null;
 console.log('null is type of '+typeof Null);

 let sum = 0;
 sum = null;
 console.log(sum);
 console.table({nonZero, Zero, undefined, notDeclared, Null, sum});