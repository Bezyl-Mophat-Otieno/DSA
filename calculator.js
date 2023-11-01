const calculator = (num1, num2, operator) => {
  const operators = ["+", "-", "*", "/"];
  const exist = operators.includes(operator);
  if (!exist) return "Invalid Operator";
  return eval(`${num1} ${operator} ${num2}`);
};
console.log(calculator(70, 50, "*"));
