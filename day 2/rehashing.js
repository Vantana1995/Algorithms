// HashTable implementation with dynamic resizing
class HashTable {
  constructor(size) {
    this.table = new Array(size); // Create an array of the specified size to store key-value pairs
    this.count = 0; // Keep track of the number of key-value pairs
  }

  // Hash function to calculate the index based on the key
  hashFunction(key) {
    return key % this.table.length; // Simple modulo-based hash function
  }

  // Resize the hash table when the load factor exceeds a threshold
  resize() {
    const oldTable = this.table; // Store the current table
    this.table = new Array(oldTable.length * 2); // Double the size of the table
    this.count = 0; // Reset the count

    for (let bucket of oldTable) {
      // Reinsert all key-value pairs into the new table
      if (bucket) {
        for (let pair of bucket) {
          this.insert(pair[0], pair[1]);
        }
      }
    }
  }

  // Insert a key-value pair into the hash table
  insert(key, value) {
    if (this.count / this.table.length > 0.7) {
      // Check if the load factor exceeds 0.7
      this.resize(); // Resize the table
    }

    const index = this.hashFunction(key); // Calculate the index for the key
    if (!this.table[index]) {
      this.table[index] = []; // Initialize the bucket if it doesn't exist
    }
    this.table[index].push([key, value]); // Add the key-value pair to the bucket
    this.count++; // Increment the count
  }

  // Search for a value using the key
  search(key) {
    const index = this.hashFunction(key); // Calculate the index for the key
    if (this.table[index]) {
      for (let pair of this.table[index]) {
        // Iterate through the bucket
        if (pair[0] === key) {
          return pair[1]; // Return the value if the key matches
        }
      }
    }
    return undefined; // Return undefined if the key is not found
  }
}

const dynamicHashTable = new HashTable(5);
console.log("Initial table size:", dynamicHashTable.table.length);
dynamicHashTable.insert(1, "Resizing Test 1");
dynamicHashTable.insert(2, "Resizing Test 2");
dynamicHashTable.insert(3, "Resizing Test 3");
dynamicHashTable.insert(4, "Resizing Test 4");
dynamicHashTable.insert(5, "Resizing Test 5"); // This triggers resizing
console.log("Final table size:", dynamicHashTable.table.length);
console.log(dynamicHashTable.search(1)); // Output: "Resizing Test 1"
console.log(dynamicHashTable.search(5)); // Output: "Resizing Test 5"
