# Algorithms

- [Day 1](./day%201)
  [Linear alghoritm](./day%201/linearAlghs.js) is a simple algorithm to find a specific key in an unordered array. It starts at the first element and checks each one sequentially until it either finds the key or reaches the end of the array. If the key is found, the algorithm returns its index; otherwise, it indicates that the key is not in the array. This approach is particularly useful when the array is unsorted, as it does not require any prior sorting. The time complexity of linear search is O(n), where n is the number of elements in the array.
  [Binary algorithm](./day%201/binaryAlghs.js) is used when we have a sorted array. It works by repeatedly dividing the search range in half. The algorithm starts by selecting the middle element and compares it with the key. If the key matches, the algorithm stops. If not, it checks if the key is smaller or larger than the middle value. If the key is smaller, the search continues in the left half; if larger, the search continues in the right half. This process repeats until the key is found or the search range is exhausted.
  [Hashing algorithm](./day%201/hashAlghs.js) works by creating an array with a fixed number of empty slots. We then use a key to calculate an index using a hash function, typically by performing a modulo operation (key % array.length). The remainder of this division becomes the index where the data is stored. If two keys result in the same index (a collision), methods like chaining or open addressing are used to handle the collision.
  [Hashing table](./day%201/hashAlghs.js) works by creating an array with a fixed number of slots. We then create a function to add values, where each value has a key and data. The key is used to calculate the index by performing a modulo operation (key % arr.length). The key and its data are stored at the resulting index. A potential issue arises when two keys result in the same index (a collision). In this case, both values are stored in the same array slot. To retrieve the correct element, we use the key, which allows us to access the data. This is why both the key and the data are stored in the array.
  The main problem for both [hashing algorithms](./day%201/hashAlghs.js) and [hash tables](./day%201/hashAlghs.js) is collisions, where two different elements with the same key and data have the same hash. In this case, they are stored at the same index in the array. To resolve this, the[open addressing](./day%201/openAddressing.js) method is used. When calculating the index, we also check if the index is already occupied. If it is, the element is placed at the next available index.

- [Day 2](./day%202) i continue to learn ways to minimized collisions in hash tabs and there is some simple ways to minimize:
  In [Separate chainig](./day%202/separateChaining.js) method, we can store multiple pairs of `key` + `data` in the same storage location by creating an array (or linked list) at each index to hold all the pairs that map to that index.  
  [Double hashing](./day%202/doubleHashing.js) method little bit similar with a [open address](./day%201/openAddressing.js) method where we use a `hashKey + 1` for finding an empty storage location, but in double hashing we use [secondary hashing](./day%202/doubleHashing.js#L13) method which we set ourselves with any available and quick formula for finding a new empty socket.
  [Rehashing](./day%202/rehashing.js) is a very simple way to minimize collision but [function](./day%202/rehashing.js#L31) must always check occupancy condition of our array and [resize](./day%202/rehashing.js#L14) array in case of hit a critical point, while rehashing is an effective way to reduce collisions, it is not the most efficient method because each resize allocates more memory, leaving a large portion of the table unused. This leads to a less efficient utilization of space as the table grows over time.
- [Day 3-4](./day%203-4/) learn deeper how 1D massives work, [column massives](./day%203-4/massives.js#L37) and
  [find duplicate](./day%203-4/massives.js#L35). Learn and understanding what is 2D and nD massives. Singly linked and Doubly linked list has difference only in bilateral nodes which is help us to move in both side.
- [Day 5-7](./day%205)
