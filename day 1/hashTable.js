// Create a hash table with 10 buckets
const hashTable = Array.from({ length: 10 }, () => []); // 10 buckets or our hash table

let step = 0; // Variable to track the number of operations (steps)

// Function to insert a key-value pair into the hash table
function insert(hashTable, key, value) {
  const hashKey = key % hashTable.length; // Calculate the hash key (index) for the bucket
  const bucket = hashTable[hashKey]; // Get the bucket based on the hash key

  let keyExist = false; // Flag to check if the key already exists

  step++; // Increment the step counter for this operation

  // Loop through the bucket to check if the key already exists
  for (let i = 0; i < bucket.length; i++) {
    const [k, v] = bucket[i]; // Destructure the key-value pair

    if (k === key) { // If the key exists
      bucket[i] = [key, value]; // Update the value for the existing key
      keyExist = true; // Mark that the key exists
      break; // Exit the loop
    }
  }

  // If the key does not exist, add a new key-value pair to the bucket
  if (!keyExist) {
    bucket.push([key, value]);
  }
}

// Function to retrieve a value based on a key
function get(hashTable, key) {
  const hashKey = key % hashTable.length; // Calculate the hash key (index) for the bucket
  const bucket = hashTable[hashKey]; // Get the bucket based on the hash key

  step++; // Increment the step counter for this operation

  // Loop through the bucket to find the key-value pair
  for (let i = 0; i < bucket.length; i++) {
    const [k, v] = bucket[i]; // Destructure the key-value pair

    if (k === key) { // If the key matches
      return v; // Return the corresponding value
    }
  }

  return null; // Return null if the key is not found
}

// Insert some key-value pairs into the hash table
insert(hashTable, 10, "Apple");
insert(hashTable, 25, "Banana");
insert(hashTable, 20, "Cherry");

// Log the entire hash table structure
console.log(hashTable);
// Log the total number of steps performed
console.log(`Total steps: ${step}`);

// Retrieve values based on their keys and log the results
console.log(get(hashTable, 10)); // Should return "Apple"
console.log(get(hashTable, 20)); // Should return "Cherry"
console.log(get(hashTable, 25)); // Should return "Banana"
console.log(get(hashTable, 30)); // Should return null (key not found)
