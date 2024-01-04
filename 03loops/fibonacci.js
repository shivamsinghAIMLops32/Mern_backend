// 0 1 1 2 3 5 8 etc if n = 6

let n = 6;
 
if(n == 0){
  console.log(0);
  return;
}
if(n>=1){
  console.log(1);
}
let last = 1;
let secondlast = 0;
for(let i = 2 ; i<=n ;i++){
   let ans = last + secondlast;
   console.log(ans);
   secondlast = last;
   last = ans;
}


// recursion way 
function fib(n){
  if(n <=1) return n;
  let ans = fib(n-1) + fib(n-2);
  return ans;
 }

 function printFib(k) {
  for(let i = 0; i < k; i++){
    console.log(fib(i));
  }
}

 let k = 10;
 printFib(k);