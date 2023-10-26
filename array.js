const fruits = [
  "Apple",
  "Banana",
  "Orange",
  "Mango",
  "Pineapple",
  function comment() {
    // console.log("Oh! I love fruits");
  },
];

fruits[5]();

// console.log(fruits[fruits.length - 1]);
// console.log(fruits.at(-1));

// console.log(fruits.push("Grapes"));
// console.log(fruits.shift());
// console.log(fruits.unshift("Grapes"));

const arr = [124];

for (let fruit of fruits) {
  // console.log(fruit);
}

for (let fruit in fruits) {
  // console.log(fruits[fruit]);
}

// Using the Splice method of an array always returns the removed elements as an array

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//from index 0 remove 2 elements
const removedElements = array.splice(0, 2);

// console.log(removedElements);
// console.log(array);
// from index 2 remove 1 element and add "name" in its place
const removedElements1 = array.splice(2, 1, "name");
// console.log(removedElements1);
// console.log(array);
// from index 2 don't remove any element and add "Mophat" in its place
const removedElements2 = array.splice(2, 0, "Mophat");
// console.log(removedElements2);
// console.log(array);

const removedElements3 = array.splice(-2, 1, "Otieno");
// console.log(removedElements3);
// console.log(array);

// Slice method of an array always returns a new array
const array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const newArray = array1.slice(0, 4);
// console.log(newArray);
// splice from index 0 remove 4 elements
const removedArray4 = array1.splice(0, 4);
// console.log(removedArray4);

//copy of the array using slice
const array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const copyArray = array2.slice();
// console.log(copyArray);
// console.log(array2);

// Using concat array method
const array3 = ["Bezyl", "Mophat"];
const fullname = array3.concat("Otieno");
// console.log(fullname);

const brothers = array3.concat(["Byron", "Kinsley"], "Otieno");
// console.log(brothers);

const details = {
  name: "Breanna Astra",
  level: 200,
  [Symbol.isConcatSpreadable]: true,
};

const family = array3.concat(["Byron", "Kinsley"], "Otieno", details);
// console.log(family);

// Using the flat method of an array that returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.
const array4 = [1, 2, 3, [4, 5, 6, [7, 8, [9, [3]]]], [2]];
// console.log(array4.flat(3));

// forEach method of an array
const array5 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
array5.forEach((element, index, array) => {
  // console.log(element);
  // console.log(index);
  // console.log(array);
});

// indexof,lastIndexOf,includes
const array6 = [1, 2, 3, 4, 5, 6, 7, 3, 9];
// console.log(array6.indexOf(3));
// console.log(array6.lastIndexOf(3));
// console.log(array6.includes(3));

// find,findIndex

const array7 = [
  { name: "Mophat", age: 20 },
  { name: "Bezyl", age: 20 },
  { name: "Otieno", age: 20 },
  { name: "Byron", age: 20 },
  { name: "Kinsley", age: 20 },
];
const found = array7.find((item, index, array) => {
  return item.name === "Mophat";
});

// console.log(found);

//Filter method of an array
const array8 = [
  { name: "Mophat", age: 20 },
  { name: "Bezyl", age: 20 },
  { name: "Otieno", age: 20 },
  { name: "Byron", age: 20 },
  { name: "Kinsley", age: 20 },
];
const results = array7.filter((item, index, array) => {
  return item.name.includes("o");
});
console.log(results);
