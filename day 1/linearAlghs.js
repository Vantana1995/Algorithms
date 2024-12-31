let step = 0; // Variable to track the number of operations (steps)
const linearAlghs = (arr, target) => {
  for (let i = 0; i < arr.length; i++) {
    step++; // Increment step for each iteration
    if (arr[i] === target) {
      // Check if the current element matches the target
      return i; // Return the index if found
    }
  }
  return -1; // Return -1 if the target is not found
};

let arr = [1, 5, 24, 6, 34, 18, 23, 45, 76, 7, 2, 9, 124, 68, 8];
target = 45;

const result = linearAlghs(arr, target);

if (result !== -1) {
  console.log(`Target found at index ${result}`); // Log the index of the found target
  console.log(`Total steps: ${step}`); // Log the total steps taken
} else {
  console.log(`Target not found`); // Log that the target was not found
}
