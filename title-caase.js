const titleCase = (string) => {
  let words = string.split(" ");
  let newArray = words.map((word) => {
    return word[0].toUpperCase() + word.slice(1);
  });
  return newArray.join(" ");
};

console.log(titleCase("hello mophat"));
