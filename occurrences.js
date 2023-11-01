// Case sesnsitive solution

const countOccurrences = (word, char) => {
  word = word.split("");
  let count = 0;
  word.forEach((character) => {
    if (character == char) {
      count++;
    }
  });

  return count;
};

// console.log(countOccurrences("hello", "l"));

// Case insensitive solution

const countOccurrences1 = (word, char) => {
  //convert the word and char to lowercase
  word = word.toLowerCase();
  char = char.toLowerCase();
  console.log(char);
  word = word.split("");
  let count = 0;
  word.forEach((character) => {
    if (character == char) {
      count++;
    }
  });

  return count;
};

console.log(countOccurrences1("hello", "L"));
