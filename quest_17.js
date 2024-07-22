//sort three numbers in descending order. 
function sortDescending(a, b, c) {
    return [a, b, c].sort((x, y) => y - x);
  }
  
  console.log(sortDescending(3, 1, 2));
  console.log(sortDescending(10, 5, 8));
  console.log(sortDescending(7, 9, 6));
  