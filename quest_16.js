//Check if a number is divisible by another number. 
function isDivisible(dividend, divisor) {
    return dividend % divisor === 0;
  }
  
  console.log(isDivisible(10, 2));
  console.log(isDivisible(10, 3));
  console.log(isDivisible(25, 5));
  console.log(isDivisible(15, 4));
  