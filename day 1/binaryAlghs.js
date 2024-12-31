let step = 0; // Reset the step counter
const binarySearch = (arr, target) => {
  let left = 0; // Left boundary of the search range
  let right = arr.length - 1; // Right boundary of the search range
  step = 0; // Reset step counter for binary search

  while (left <= right) {
    // Repeat until the range is valid
    step++; // Increment step for each iteration

    let mid = Math.floor((left + right) / 2); // Calculate the middle index

    if (arr[mid] === target) {
      // Check if the middle element is the target
      return mid; // Return the index if found
    } else if (arr[mid] < target) {
      // If the middle element is less than the target
      left = mid + 1; // Move the left boundary to the right of mid
    } else {
      right = mid - 1; // Move the right boundary to the left of mid
    }
  }
  return false; // Return false if the target is not found
};

arr = [1, 2, 3, 5, 7, 8, 13, 21, 45, 66, 78, 95, 99, 102, 106, 120, 135, 147];
target = 147;

console.log(binarySearch(arr, target)); // Log the result of binary search (index or false)
console.log(`Total steps: ${step}`); // Log the total steps taken during the binary search
