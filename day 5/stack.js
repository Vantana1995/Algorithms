class Stack {
  constructor() {
    this.items = [];
  }

  push(element) {
    this.items.push(element);
  }

  pop() {
    if (this.isEmpty()) {
      console.log("Stack is empty");
      return null;
    }
    return this.items.pop();
  }

  peek() {
    if (this.isEmpty()) {
      console.log("Stack is empty");
      return null;
    }
    return this.items[this.items.length - 1];
  }

  isEmpty() {
    return this.items.length === 0;
  }
}

const stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);

console.log(stack.peek());
console.log(stack.pop());
console.log(stack.peek());
