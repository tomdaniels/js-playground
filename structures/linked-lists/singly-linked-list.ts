class SingleListNode {
  value: any;
  next: SingleListNode | null;

  constructor(val: any) {
    this.value = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  head: SingleListNode | null;
  tail: SingleListNode | null;
  length: number;

  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val: any): SinglyLinkedList {
    const newNode = new SingleListNode(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail!.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop(): Pick<SingleListNode, 'value'> | undefined {
    if (!this.head) return undefined;

    let current = this.head;
    let newTail = current;
    while(current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;

    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current.value;
  }

  shift(): Pick<SingleListNode, 'value'> | undefined {
    if (!this.head) return undefined;

    let current = this.head;
    this.head = current.next;
    this.length--;

    if (this.length === 0) {
      this.tail = null;
    }

    return current.value;
  }

  unshift(val: any): SinglyLinkedList {
    const newNode = new SingleListNode(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  get(i: number): SingleListNode | null {
    if (i < 0 || i >= this.length) return null;
    var count = i;
    let node = this.head;
    while (count > 0) {
      node = node!.next;
      count--;
    }
    return node;
  }

  set(i: number, val: any): boolean {
    const found = this.get(i);
    if (found) {
      found.value = val;
      return true;
    }
    return false;
  }

  insert(i: number, val: any): boolean {
    if (i < 0 || i > this.length) return false;
    if (i === this.length) return !!this.push(val);
    if (i <= 0) return !!this.unshift(val);

    const newNode = new SingleListNode(val);
    const prevNode = this.get(i - 1);
    const prevNext = prevNode!.next;
    prevNode!.next = newNode;
    newNode.next = prevNext;
    this.length++;
    return true;
  }

  remove(i: number): SingleListNode | boolean | null {
    if (i < 0 || i >= this.length) return null;
    if (i === this.length - 1) return !!this.pop();
    if (i === 0) return !!this.shift();

    const node = this.get(i -1);
    const removed = node!.next;
    node!.next = removed!.next;
    this.length--;
    return removed;
  }

  reverse(): SinglyLinkedList {
    let node = this.head;
    this.head = this.tail;
    this.tail = node;

    let next;
    let prev = null;
    for (var i = 0; i < this.length; i++) {
      next = node!.next;
      node!.next = prev;
      prev = node;
      node = next;
    }
    return this;
  }
}

const list = new SinglyLinkedList();

list.push(120);
list.push(240);
list.push(480);
list.push(960);

// console.log(list);