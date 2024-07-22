 
function sumOfPositiveNumbers(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > 0) {
        sum += arr[i];
      }
    }
    return sum;
  }
  
  
  console.log(sumOfPositiveNumbers([1, -2, 3, 4, -5])); 
  console.log(sumOfPositiveNumbers([-1, -2, -3, -4, -5])); 
  console.log(sumOfPositiveNumbers([10, 20, 30, -10, -20])); 
  