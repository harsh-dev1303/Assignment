// Find the largest element in an array. 
function findLargestElement(arr) {
    return Math.max(...arr);
  }
  
  console.log(findLargestElement([1, 2, 3, 4, 5]));
  console.log(findLargestElement([-10, -20, -5, -1]));
  console.log(findLargestElement([100, 200, 300, 400]));
  