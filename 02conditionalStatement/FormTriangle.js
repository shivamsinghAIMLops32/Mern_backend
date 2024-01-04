// given three sides of a triangle find out whether it is possible to form a triangle.

let side1 = 1;
let side2 = 10;
let side3 = 12;
isTriangle(side1,side2,side3);

// for forminf a triangle the sum of two sides should be greator than the side size for all sides 
// for side1 = side2+side3 should be greator than size of side1.

function isTriangle(side1,side2,side3){
  if((side2+side3 > side1) && (side1 + side2 > side3) && (side1 + side3 > side2)){
    console.log(`triangle is possible`);
  }else console.log(`triangle is not possible`);
}