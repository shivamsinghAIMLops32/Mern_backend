// print only even num till n

function printEven(n) {
  let i = 1;
  while(i <= n){
    if(i % 2 == 0){
      console.log(`${i} is even number`);
    }else console.log(`${i} is not a even number`);
    i++;
  }
}

let n = 5;
printEven(n); 
