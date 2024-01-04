function greatestNum(num1,num2,num3){
  if(num1 > num2 && num1 > num3){
    console.log(`${num1} is greator than ${num2} and ${num3}`);
  }else if(num2 > num1 && num2 > num3){
    console.log(`${num2} is greator than ${num1} and ${num3}`);
  }
  else console.log(`${num3} is greator than ${num1} and ${num2}`);
}

let num1 = 7;
let num2 = 10;
let num3 = +Infinity;
greatestNum(num1,num2,num3);