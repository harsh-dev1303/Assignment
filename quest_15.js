//Determine if a year is a century year or not. 
function isCenturyYear(year) {
    return year % 100 === 0;
  }
  
  console.log(isCenturyYear(1900));
  console.log(isCenturyYear(2000));
  console.log(isCenturyYear(2024));
  console.log(isCenturyYear(2100));
  