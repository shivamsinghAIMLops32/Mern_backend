let n = 568;

let sum =0;
for(let i = 0 ; i < n; i++){
  sum += n % 10;
  n = Math.floor(n / 10);
}
console.log(sum);