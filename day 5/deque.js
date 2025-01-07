//Double-ended Queue
class Deque {
  constructor() {
    this.items = [];
  }

  addFront(element) {
    this.items.unshift(element);
  }

  addBack(element) {
    this.items.push(element);
  }

  removeFront() {
    if (this.isEmpty()) {
      console.log("Deck empty");
      return null;
    }
    return this.items.shift();
  }

  removeBack() {
    if (this.isEmpty()) {
      console.log("Deck empty");
      return null;
    }
    return this.items.pop();
  }

  isEmpty() {
    return this.items.length === 0;
  }
}

const deque = new Deque();
deque.addFront(10);
deque.addBack(20);
console.log(deque.removeFront());
console.log(deque.removeBack());
