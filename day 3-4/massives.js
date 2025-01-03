let numbers = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];

const maxNumber = () => {
  for (num of numbers) {
    let max = Math.max(...numbers);
    return max;
  }
};

const minNumber = () => {
  for (num of numbers) {
    let min = Math.min(...numbers);
    return min;
  }
};

maxNumber(numbers);
minNumber(numbers);

console.log(maxNumber());
console.log(minNumber());

let firstMassive = [3, 7, 13, 15, 17, 22, 29, 31, 33, 56, 78, 98, 109, 128];
let secondMassive = [
  1, 2, 3, 5, 9, 11, 13, 19, 21, 23, 29, 35, 46, 56, 68, 78, 99, 109, 110, 123,
];

const findDuplicate = (massive, masive2) => {
  return massive.filter((value) => masive2.includes(value));
};

findDuplicate(firstMassive, secondMassive);
console.log(findDuplicate(firstMassive, secondMassive));

const columnMassives = (massive, masive2) => {
  return [...new Set([...massive, ...masive2])].sort((a, b) => a - b);
};

columnMassives(firstMassive, secondMassive);
console.log(columnMassives(firstMassive, secondMassive));
