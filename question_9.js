//Check if a number is a perfect square. 
function isPerfectSquare(num) {
    return Number.isInteger(Math.sqrt(num));
  }
  
  console.log(isPerfectSquare(16));
  console.log(isPerfectSquare(20));
  console.log(isPerfectSquare(25));
  console.log(isPerfectSquare(0));
  console.log(isPerfectSquare(1));
  console.log(isPerfectSquare(-4));
  