// Using a built in Function
const maxNumber = (numbers) => {
  return Math.max(...numbers);
};
console.log(maxNumber([-1, -2, -3, -4, -5, -6, -7, -8, -9, -10]));

// Using a for loop

const maxnumber1 = (numbers) => {
  let maxInt = numbers[0];
  for (let index = 0; index < numbers.length; index++) {
    maxInt = numbers[index] > maxInt ? numbers[index] : maxInt;
  }
  return maxInt;
};

console.log(maxnumber1([-1, -2, -3, -4, -5, -6, -7, -8, -9, -10]));
