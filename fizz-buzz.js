// create an empty array
//using a for loop generate numbers from 1 to the passed argument in the function and push them to the array
//if number is divisible by 3 push fizz to the array
// if number is divisible by 5 push buzz to the array
// if number is divisible by 3 and 5 push fizzbuzz to the array

const fizzBuzz = (num) => {
  let fizzBuzzArray = [];
  for (let i = 1; i <= num; i++) {
    let arrayelement =
      i % 3 === 0 && i % 5 === 0
        ? "fizzBuzz"
        : i % 3 === 0
        ? "fizz"
        : i % 5 === 0
        ? "buzz"
        : i;

    fizzBuzzArray.push(arrayelement);
  }
  return fizzBuzzArray;
};

console.log(fizzBuzz(15));
