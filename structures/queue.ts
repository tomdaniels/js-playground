class QueueNode {
  value: any;
  next: QueueNode | null;

  constructor(val: any) {
    this.value = val;
    this.next = null;
  }
}

class Queue {
  first: QueueNode | null;
  last: QueueNode | null;
  size: number;

  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  enqueue(val: any): Queue {
    const node = new QueueNode(val);
    if (!this.first || !this.last) {
      this.first = node;
      this.last = node;
    } else {
      this.last.next = node;
      this.last = node;
    }
    this.size++;
    return this;
  }

  dequeue(): QueueNode {

  }
}

const q = new Queue();

q.enqueue('FIRST');

// console.log(q);