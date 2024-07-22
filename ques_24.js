// Determine the number of days in a month. 
function daysInMonth(year, month) {
    return new Date(year, month, 0).getDate();
  }
  
  console.log(daysInMonth(2024, 1));
  console.log(daysInMonth(2024, 2));
  console.log(daysInMonth(2024, 4));
  console.log(daysInMonth(2024, 12));
  