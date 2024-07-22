// Check if a number is a palindrome. 
function isPalindrome(num) {
    const str = num.toString();
    const reversedStr = str.split('').reverse().join('');
    return str === reversedStr;
  }
  
  console.log(isPalindrome(121));
  console.log(isPalindrome(-121));
  console.log(isPalindrome(12321));
  console.log(isPalindrome(12345));
  