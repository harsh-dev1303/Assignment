//Check if a number is a power of 2. 
function isPowerOfTwo(num) {
    return num > 0 && (num & (num - 1)) === 0;
  }
  
  console.log(isPowerOfTwo(1));
  console.log(isPowerOfTwo(2));
  console.log(isPowerOfTwo(3));
  console.log(isPowerOfTwo(16));
  console.log(isPowerOfTwo(18));
  