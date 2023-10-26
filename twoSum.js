// [1,4,8,12] => 20 . Check from the array the numbers that when added returns 20 and return their indexes as an array .

const twoSum = (nums, target) => {
  const obj = {};

  for (let i = 0; i < nums.length; i++) {
    let n = nums[0];
    if (obj[target - n] >= 0) {
      return [obj[target - n], i];
    } else {
      obj[n] = i;
    }
  }
};

console.log(twoSum([1, 4, 8, 12], 20));
