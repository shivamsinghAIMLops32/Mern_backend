// given a valid triangle sides check if its scalene,isosceles,equilateral
// scalene = none of sides should be equal
// isosceles = 2 sides should be equal 
// equilateral = all 3 sides should be equal

let side1 =12;
let side2 = 10;
let side3 = 12;
checkTriangle(side1,side2,side3);

function checkTriangle(a,b,c){
  if(a == b && b==c  && a ==c){
    console.log(`it is equilateral triangle`);
  }
    else if(a!= b && b!= c && c!=a){
      console.log(` it is scalene triangle`);
    }
  else console.log(` it is isosceles triangle`);
}