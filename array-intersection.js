// I will loop through the arrays and check if the element is in the array

const intersection = (array1, array2) => {
  let intersect = [];
  for (let i = 0; i < array1.length; i++) {
    array2.includes(array1[i]) && intersect.push(array1[i]);
  }
  return intersect;
};

console.log(intersection([1, 2, 7, 78, 5], [5, 4, 3, 2, 1]));

const instersetion1 = (array1, array2) => {
  const intersect = [];
  const set1 = new Set(array1);
  for (let num of array2) {
    set1.has(num) && intersect.push(num);
  }
  return intersect;
};
console.log(instersetion1([1, 2, 7, 78, 5], [5, 4, 3, 2, 1]));
