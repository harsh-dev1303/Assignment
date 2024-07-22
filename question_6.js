
function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  }
  
 
  console.log(isPrime(2));  
  console.log(isPrime(4));  
  console.log(isPrime(17)); 
  console.log(isPrime(1)); 
  console.log(isPrime(0));  
  console.log(isPrime(-5)); 
  