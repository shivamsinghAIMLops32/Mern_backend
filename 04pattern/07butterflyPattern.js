// print butterfly pattern.
let n = 7;
// upper part = (n-1)/2
for(let row = 1; row <= (n-1)/2; row++){
  let str = "";
  // star
  for(let j = 1; j <= row; j++){
    str+="*";
  }
  
  // space
  for(let j = 1; j<= n-2*row; j++){
    str+= " ";
  }

  // star
  for(let j = 1; j <= row; j++){
    str+="*";
  }
  console.log(str);
}

// middle part  only 1 row and n times star
let str = "";
for(let j = 1;j<=n;j++){
  str+="*"
}
console.log(str);

// lower part
for(let row = 1; row <= (n-1)/2; row++){
  let str = "";
  // star
  for(let j = 1; j <= ((n-1)/2)-row+1; j++){
    str+="*";
  }
  
  // space
  for(let j = 1; j<= 2*row-1; j++){
    str+= " ";
  }

  // star
  for(let j = 1; j <= ((n-1)/2)-row+1; j++){
    str+="*";
  }
  console.log(str);
}

