// I will have to convert the string into an array ,
// I will create an array of vowels
// I will have to loop through the array of vowels and check if the string contains the vowels
// I will have to return the number of vowels in the string

const vowelCount = (str) => {
  const vowels = ["a", "e", "i", "o", "u"];
  let count = 0;
  str = str.toLowerCase().trim().split("");
  str.forEach((element) => {
    if (vowels.includes(element)) {
      count++;
    }
  });

  return count;
};

console.log(vowelCount("helo world"));
