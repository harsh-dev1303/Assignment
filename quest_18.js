//Calculate the sum of digits of a number. 
function sumOfDigits(num) {
    return num.toString().split('').reduce((sum, digit) => sum + Number(digit), 0);
  }
  
  console.log(sumOfDigits(1234));
  console.log(sumOfDigits(567));
  console.log(sumOfDigits(908));
  console.log(sumOfDigits(0));
  