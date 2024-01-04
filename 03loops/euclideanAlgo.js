// euclidean is a best approach for gcd problem

let num1 = 78;
let num2 = 36;

while(num1>0 && num2>0){
 if( num1 > num2){
  num1 = num1 % num2;
 }else num2 = num2 % num1;
}
if(num1 == 0){
  console.log(num2);
}else console.log(num1);