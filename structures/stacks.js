class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// stack works as a singly linked list, `shift` and `unshift` items into the stack
// giving constant time for insert and delete & follow LIFO
class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  push(val) {
    const newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = this.first;
    } else {
      newNode.next = this.first;
      this.first = newNode;
    }
    this.size++;
    return this;
  }

  pop() {
    if (!this.first) return undefined;
  
      let current = this.first;
      this.first = current.next;
      this.length--;
  
      if (this.length === 0) {
        this.last = null;
      }
  
      return current.value;
  }
}

const stack = new Stack();

stack.push("first");
