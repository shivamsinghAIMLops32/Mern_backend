let n = 3;

// upper part
for(let row = 1;row<=n;row++){
  let str = "";
  // space
  for(let j =1;j<= n-row;j++){
      str+= " ";
  }

  // star 
  for(let j = 1;j<= 2*row-1;j++){
    str+= "*";
  }
  console.log(str);
}

// lower part
for(let row = 1;row<=n-1;row++){
  let str = "";
  // space
  for(let j =1;j<= row;j++){
      str+= " ";
  }

  // star 
  for(let j = 1;j<= 2*(n-row)-1;j++){
    str+= "*";
  }
  console.log(str);
}