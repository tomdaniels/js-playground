import swap from './helpers/swap';

// bubble the largest value to the "top" (end)
function bubbleSort(x: number[]): number[] {
  for (let i = x.length; i > 0; i--) {
    let noSwaps = true;
    for (let j = 0; j < i - 1; j++) {
      if (x[j] > x[j+1]) {
        swap(x, j, j+1);
        noSwaps = false;
      }
    }
    if (noSwaps) break;
  }
  return x;
}

console.log(bubbleSort([4,6,5,3,2,1]));
