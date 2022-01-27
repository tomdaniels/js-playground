class StackNode {
  value: any;
  next: StackNode | null;

  constructor(val: any) {
    this.value = val;
    this.next = null;
  }
}

// stack works as a singly linked list, `shift` and `unshift` items into the stack
// giving constant time for insert and delete & follow LIFO
class Stack {
  first: StackNode | null;
  last: StackNode | null;
  size: number;

  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  push(val: any): any {
    const newNode = new StackNode(val);
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

  pop(): any {
    if (!this.first) return undefined;
  
      let current = this.first;
      this.first = current.next;
      this.size--;
  
      if (this.size === 0) {
        this.last = null;
      }
  
      return current.value;
  }
}

const stack = new Stack();

stack.push("first");
stack.push("second");
stack.push("third");

