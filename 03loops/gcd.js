// find the gcd of 2 numbers
let num1 = 78;
let num2 = 36;

let gcd = 1;
for(let i = 2; i< Math.min(num1,num2); i++){
  if(num1 % i == 0 && num2 % i == 0){
    gcd = i;
  }else {gcd = gcd};
}
console.log(gcd);