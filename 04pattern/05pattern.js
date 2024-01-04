let n = 5;

for(let row = 1; row<=n;row++){
  let str = "";

  let star = n;
  for(let j = 1; j<=star-row+1;j++){
    str+="*";
  }
  console.log(str);
}