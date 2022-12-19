class MaxBinaryHeap {
  values: number[];

  constructor(values: number[] = []) {
    this.values = values;
  }

  insert(val: number) {
    this.values.push(val);
    this.bubbleUp();
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
}
const heap = new MaxBinaryHeap([49, 39, 33, 18, 27, 12]);

heap.insert(55);
console.log(heap.values);

heap.insert(1);
console.log(heap.values);

heap.insert(28);
console.log(heap.values);
