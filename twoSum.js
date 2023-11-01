// Example :
// nums [1,5,30,8]
// target : 6
const twoSum = (nums, target) => {
  for (let i = 0; i < nums.length; ++i) {
    for (let j = i + 1; j < nums.length; ++j) {
      if (nums[i] + nums[j] === target) return [i, j];
    }
  }
  return "No match found";
};

console.log(twoSum([1, 5, 30, 8], 35));
