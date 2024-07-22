function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
      console.log(year + " is a leap year.");
      return true;
    } else {
      console.log(year + " is not a leap year.");
      return false;
    }
  }
  
  
  isLeapYear(2024); 
  isLeapYear(2023); 
  isLeapYear(1900); 
  isLeapYear(2000); 
  