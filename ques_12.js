//Check if a given character is a vowel or consonant.
function isVowel(char) {
    char = char.toLowerCase();
    return ['a', 'e', 'i', 'o', 'u'].includes(char);
  }
  
  function checkVowelOrConsonant(char) {
    return isVowel(char) ? 'vowel' : 'consonant';
  }
  
  console.log(checkVowelOrConsonant('a'));
  console.log(checkVowelOrConsonant('b'));
  console.log(checkVowelOrConsonant('E'));
  console.log(checkVowelOrConsonant('z'));
  