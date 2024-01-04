let n = 5;

for(let row = 1 ; row<=n;row++){
  let str = "";
  // space
  for(let j = 1;j<=n-row;j++){
    str+= " ";
  }
  
  // star
  for(let j = 1; j<= (2*row) -1;j++){
    str+= "*";
  }

  console.log(str);
}