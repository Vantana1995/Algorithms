// HashTable implementation using double hashing for collision resolution
class HashTable {
  constructor(size) {
    this.table = new Array(size); // Create an array of the specified size to store key-value pairs
  }

  // Primary hash function to calculate the initial index
  primaryHash(key) {
    return key % this.table.length; // Simple modulo-based hash function
  }

  // Secondary hash function to calculate the step size for double hashing
  secondaryHash(key) {
    return 1 + (key % (this.table.length - 1)); // Secondary hash function to resolve collisions
  }

  // Insert a key-value pair into the hash table
  insert(key, value) {
    let index = this.primaryHash(key); // Calculate the initial index
    let step = this.secondaryHash(key); // Calculate the step size for collision resolution

    while (this.table[index] !== undefined) {
      // Check if the current index is occupied
      index = (index + step) % this.table.length; // Update the index using double hashing
    }
    this.table[index] = [key, value]; // Store the key-value pair at the resolved index
  }

  // Search for a value using the key
  search(key) {
    let index = this.primaryHash(key); // Calculate the initial index
    let step = this.secondaryHash(key); // Calculate the step size

    while (this.table[index] !== undefined) {
      // Check if the current index is occupied
      if (this.table[index][0] === key) {
        // If the key matches, return the value
        return this.table[index][1];
      }
      index = (index + step) % this.table.length; // Update the index using double hashing
    }
    return undefined; // Return undefined if the key is not found
  }
}


const doubleHashTable = new HashTable(7);
doubleHashTable.insert(10, "Data Structures");
doubleHashTable.insert(20, "Hashing");
doubleHashTable.insert(15, "Double Hashing");
console.log(doubleHashTable.search(10)); // Output: "Data Structures"
console.log(doubleHashTable.search(20)); // Output: "Hashing"
console.log(doubleHashTable.search(15)); // Output: "Double Hashing"