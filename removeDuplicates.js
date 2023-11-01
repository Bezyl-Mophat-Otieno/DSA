// Remove duplicates from a sorted array
// Given a sorted array nums, remove the duplicates in-place such that each element appears only once and returns the new length.

const uniqueness = (arr) => {
  let newArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (!newArray.includes(arr[i])) {
      newArray.push(arr[i]);
    }
  }
  return newArray;
};

console.log(
  uniqueness(["hello", "hello", "world", "world", "mophat", "mophat"])
);

const uniqueness1 = (arr) => {
  return Array.from(new Set(arr));
};
