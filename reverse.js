// I will have to convert the string into an array ,
// I will have an empty array created
// I will have to loop through the array starting from the last index
// I will have to push the last index to the empty array
function reverseString(str) {
  let reversed = "";

  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }

  return reversed;
}
console.log(reverseString("hello"));
