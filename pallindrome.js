// A palindrome is a word, phrase, number, or other sequence of characters which reads the same backward or forward.
//Example of "level" is a palindrome

const palindrome = (word) => {
  return word.split("").reverse().join("") === word;
};

const isPalindrome = palindrome("level");
