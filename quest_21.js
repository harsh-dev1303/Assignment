//Find the second largest element in an array. 
function findSecondLargest(arr) {
    if (arr.length < 2) return null;
    
    let first = -Infinity;
    let second = -Infinity;
  
    for (let num of arr) {
      if (num > first) {
        second = first;
        first = num;
      } else if (num > second && num < first) {
        second = num;
      }
    }
  
    return second === -Infinity ? null : second;
  }
  
  console.log(findSecondLargest([10, 20, 4, 45, 99])); 
  console.log(findSecondLargest([3, 1, 4, 1, 5, 9])); 
  console.log(findSecondLargest([7, 7, 7, 7]));       
  console.log(findSecondLargest([1]));                
  