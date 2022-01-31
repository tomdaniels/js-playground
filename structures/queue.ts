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

  enqueue(val: any): number {
    const node = new QueueNode(val);
    if (!this.first || !this.last) {
      this.first = node;
      this.last = node;
    } else {
      this.last.next = node;
      this.last = node;
    }
    return ++this.size;
  }

  dequeue(): Pick<QueueNode, 'value'> | null {
    if (!this.first) return null;
    const temp = this.first;
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.size--;
    return temp.value;
  }
}

const q = new Queue();

q.enqueue('FIRST');
q.enqueue('SECOND');
q.enqueue('THIRD');

// console.log(q.dequeue());
// console.log(q);

