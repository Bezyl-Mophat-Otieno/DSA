// Create an array from the string ,
// Reverse the array ,
// compare it with the original array

// if true that means it is a pallindrome

const getPallindrome = (str) => {
  str = str.toLowerCase().trim();

  const originalArray = str.split("");
  const newArray = originalArray.reverse();

  const isPallindrome = str === newArray.join("") ? true : false;
  return isPallindrome;
};

console.log(getPallindrome("Bob   "));
