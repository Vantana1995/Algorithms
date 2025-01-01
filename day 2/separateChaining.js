// HashTable implementation using chaining for collision resolution
class HashTable {
  constructor(size) {
    this.table = new Array(size); // Create an array of the specified size to store key-value pairs
  }

  // Hash function to calculate the index based on the key
  hashFunction(key) {
    return key % this.table.length; // Simple modulo-based hash function
  }

  // Insert a key-value pair into the hash table
  insert(key, value) {
    const index = this.hashFunction(key); // Calculate the index for the key
    if (!this.table[index]) {
      this.table[index] = []; // Initialize the bucket if it doesn't exist
    }
    this.table[index].push([key, value]); // Add the key-value pair to the bucket
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

const hashTable = new HashTable(10);
hashTable.insert(1, "JavaScript");
hashTable.insert(11, "Algorithms");
console.log(hashTable.search(1)); // Output: "JavaScript"
console.log(hashTable.search(11)); // Output: "Algorithms"
