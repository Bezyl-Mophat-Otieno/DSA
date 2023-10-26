// Design an algorithm that checks if a word is an anagram

const isAnagram = (word1, word2) => {
  if (word1.length < word2.length) return false;

  word1 = word1.toLowerCase().split("").sort().join("");
  word2 = word2.toLowerCase().split("").sort().join("");

  if (word1 === word2) return true;
};

console.log(isAnagram("tea", "eat"));
