// Initialize an array with 10 buckets (or slots) for our hash table, all set to null initially
const openAddressing = Array.from({ length: 10 }, () => null);

let step = 0; // Variable to track the number of operations (steps)

// Function to insert a key-value pair into the hash table
function insert(openAddressing, key, value) {
  // Compute the hash key by taking the remainder of the key divided by the table length
  let hashKey = key % openAddressing.length;

  step++; // Increment the step counter for this operation
  // Use linear probing to find an empty spot in the table
  while (openAddressing[hashKey] !== null) {
    // If the current position is already occupied, move to the next one
    hashKey = (hashKey + 1) % openAddressing.length;
  }

  // Once an empty spot is found, store the key-value pair at the computed hashKey
  openAddressing[hashKey] = [key, value];
}

// Insert a few values into the hash table
insert(openAddressing, 10, "Apple");
insert(openAddressing, 25, "Banana");
insert(openAddressing, 20, "Cherry");

// Log the entire hash table to the console
console.log(openAddressing);
// Log the total number of steps performed
console.log(`Total steps: ${step}`);
