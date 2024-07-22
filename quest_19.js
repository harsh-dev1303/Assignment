//Check if a number is a strong number or not.
function factorial(n) {
    if (n === 0 || n === 1) return 1;
    let result = 1;
    for (let i = 2; i <= n; i++) {
      result *= i;
    }
    return result;
  }
  
  function isStrongNumber(num) {
    const sumOfFactorials = num.toString().split('').reduce((sum, digit) => sum + factorial(Number(digit)), 0);
    return sumOfFactorials === num;
  }
  
  console.log(isStrongNumber(145));
  console.log(isStrongNumber(2));
  console.log(isStrongNumber(40));
  console.log(isStrongNumber(40585));
  