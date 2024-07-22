// Determine if a number is a perfect number or not. 
function isPerfectNumber(num) {
    if (num <= 1) return false;
    
    let sum = 0;
    for (let i = 1; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        sum += i;
        if (i !== 1 && i !== num / i) {
          sum += num / i;
        }
      }
    }
    return sum === num;
  }
  
  console.log(isPerfectNumber(6));    
  console.log(isPerfectNumber(28));   
  console.log(isPerfectNumber(496));  
  console.log(isPerfectNumber(12));   
  