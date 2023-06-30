class MaxBinaryHeap {
  values: number[];

  constructor(values: number[] = []) {
    this.values = values;
  }

  insert(val: number) {
    this.values.push(val);
    this.bubbleUp();
  }

  extractMax() {
    // swap the first value with the last one
    const max = this.values[0];
    const min = this.values.pop() as number;
    this.values[0] = min;

    this.sinkDown();

    return max;
  }

  bubbleUp() {
    let idx = this.values.length - 1;
    const element = this.values[idx];

    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2);
      let parent = this.values[parentIdx];

      if (element <= parent) break;
      this.values[parentIdx] = element;
      this.values[idx] = parent;
      idx = parentIdx;
    }

    return this.values.length;
  }

  sinkDown() {
    const length = this.values.length;
    const element = this.values[0];

    let idx = 0;

    while (true) {
      let leftIdx = 2 * idx + 1;
      let rightIdx = 2 * idx + 2;
      let left, right;
      let swap = null;

      if (leftIdx < length) {
        left = this.values[leftIdx];
        if (left > element) {
          swap = leftIdx;
        }
      }

      if (rightIdx < length) {
        right = this.values[rightIdx];
        if (
          (swap === null && right > element) ||
          (swap !== null && left && right > left)
        ) {
          swap = rightIdx;
        }
      }

      if (swap === null) break;
      this.values[idx] = this.values[swap];
      this.values[swap] = element;
      idx = swap;
    }
  }
}
const heap = new MaxBinaryHeap();
heap.insert(41);
heap.insert(39);
heap.insert(33);
heap.insert(18);
heap.insert(27);
heap.insert(12);

heap.insert(55);
console.log(heap.values);

console.log(heap.extractMax());

console.log(heap.extractMax());
console.log(heap.values);
