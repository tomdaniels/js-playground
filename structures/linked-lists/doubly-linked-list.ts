class ListNode {
  value: any;
  next: ListNode | null;
  prev: ListNode | null;

  constructor(val: any) {
    this.value = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  head: ListNode | null;
  tail: ListNode | null;
  length: number;

  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(value: any): DoublyLinkedList {
    const node = new ListNode(value);
    if (!this.tail) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      node.prev = this.tail;
      this.tail = node;
    }
    this.length++;
    return this;
  }

  pop(): ListNode | undefined {
    if (!this.tail) return undefined;
    const tail = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = tail.prev;
      this.tail!.next = null;
      tail.prev = null;
    }

    this.length--;
    return tail;
  }

  shift(): ListNode | undefined {
    if (!this.head) return undefined;
    const head = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = head.next;
      this.head!.prev = null;
      head.prev = null;
      head.next = null;
    }
    this.length--;
    return head;
  }

  unshift(value: any): DoublyLinkedList {
    const node = new ListNode(value);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.head.prev = node;
      node.next = this.head;
      this.head = node;
    }
    this.length++;
    return this;
  }

  get(i: number): ListNode | null {
    if (i < 0 || i >= this.length) return null;

    let count;
    let node; 
    if (i <= this.length /2) {
      count = 0;
      node = this.head;
      while (count !== i) {
        node = node!.next;
        count++;
      }
    } else {
      count = this.length - 1;
      node = this.tail;
      while (count !== i) {
        node = node!.prev;
        count--;
      }
    }

    return node;
  }

  set(i: number, val: any): boolean {
    const node = this.get(i);
    if (node !== null) {
      node.value = val;
      return true;
    };

    return false;
  }

    insert(i: number, value: any): boolean {
    if (i < 0 || i > this.length) return false;
    if (i === 0) return !!this.unshift(value);
    if (i === this.length) return !!this.push(value);

    const newNode = new ListNode(value);
    const prevNode = this.get(i - 1);
    newNode.next = prevNode!.next;
    newNode.prev = prevNode;

    prevNode!.next!.prev = newNode;
    prevNode!.next = newNode;

    this.length++;
    return true;
  }

  remove(i: number): ListNode | null | undefined {
    if (i < 0 || i >= this.length) return undefined;
    if (i === 0) return this.shift();
    if (i === this.length - 1) return this.pop();

    const before = this.get(i - 1);
    const removed = before!.next;
    const after = removed!.next;

    before!.next = after;
    after!.prev = before;
    removed!.next = null;
    removed!.prev = null;

    this.length--;
    return removed;
  }
}

const dll = new DoublyLinkedList()
dll.push(99);
dll.push(100);

// console.log(dll);