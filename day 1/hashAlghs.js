// Simple Hash Function Example
const simpleHash = (key) => {
  return key % 10; // Simple modulo-based hash function
};

const hash_table = new Array(10).fill(null); // Create a hash table with 10 buckets initialized to null

let key = 35;
let value = "Apple";

const index = simpleHash(key); // Calculate the hash index

if (!hash_table[index]) {
  hash_table[index] = []; // Initialize the bucket as an empty array if it doesn't exist
}
hash_table[index].push([key, value]); // Add the key-value pair to the bucket

console.log(hash_table); // Log the hash table structure
