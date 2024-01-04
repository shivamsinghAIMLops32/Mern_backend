let n = 4;

for(let i = 1; i<=n;i++){
  let str = "";
  // for space
  for(let j = 1; j<= n-i;j++){
    str+=" ";
  }
  // star
  for(let j = 1 ; j <= i;j++){
    str+="*";
  }

  console.log(str);
}