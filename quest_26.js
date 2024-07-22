// Check if a year is a leap year using the conditional operator (?:). 
function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0 ? 'Leap year' : 'Not a leap year';
  }
  
  console.log(isLeapYear(2024));
  console.log(isLeapYear(1900));
  console.log(isLeapYear(2000));
  console.log(isLeapYear(2023));
  