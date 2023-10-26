// fibonacci series is a series of numbers in which each number is the sum of the two preceding numbers.

const series = (num) => {
  const start = [0, 1];

  if (start <= 1) return start;

  for (let i = 2; i <= num; i++) {
    start.push(start[i - 2] + start[i - 1]);
  }

  return start;
};

const fibonacciSeries = series(10);

// Finding th fibonacci series of a number recursively

const fibonacciRecursively = (number) => {
  if (number <= 1) return number;
  return fibonacciRecursively(number - 2) + fibonacciRecursively(number - 1);
};

console.log(fibonacciRecursively(4));

//fb(4) => fb(2) + fb(3)

//fb(2)=>fb(0) + fb(1)= 0 + 1 = 1

//fb(3)=>fb(1)+fb(2) = 1 + 1 = 2

//fb(4)=>fb(2)+fb(3) = 1 + 2 = 3
