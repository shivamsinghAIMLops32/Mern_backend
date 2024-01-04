// print sum of n  numbers

function numSum(n){
  let sum = 0;
  let i = 1;
  while(i <= n){
    sum += i;
    i++;
  }
  return sum;
}

let n = 10;
console.log(numSum(n));