function swap(x: number[], idx: number, idj: number): number[] {
  console.log('swapping', x[idx], x[idj]);
  const temp = x[idx];
  x[idx] = x[idj];
  x[idj] = temp;
  return x;
}

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

// select the smallest value and place at the beggining
function selectionSort(x: any[]): any[] {
  for (let i = 0; i < x.length; i++) {
    let smallest = i;
    for(let j = i+1; j < x.length; j++) {
      if (x[j] < x[smallest]) {
       smallest = j; 
      }
    }
    if (i !== smallest) {
      swap(x, i, smallest)
    }
  }
  return x;
}

// inserts a value into its correct place in each pass
function insertionSort(x: any[]): any[] {
  for (let i = 1; i < x.length; i++) {
    const currentVal = x[i];
    for (var j = i - 1; j >= 0 && x[j] > currentVal; j--) {
      x[j+1] = x[j];
    }
    x[j+1] = currentVal;
   }
  return x;
}

// -------- ^ elementary sorting algos ^ -------- //

/**
 * merge two sorted arrays
 */
function merge(first: any[], second: any[]): any[] {
  const merged = [];
  let i = 0;
  let j = 0;

  while(i < first.length && j < second.length) {
    if (first[i] < second[j]) {
      merged.push(first[i]);
      i++;
    } else {
      merged.push(second[j]);
      j++;
    }
  }

  while (i < first.length) {
    merged.push(first[i]);
      i++;
  }
  while (j < second.length) {
    merged.push(second[j]);
      j++;
  }
  return merged;
}

function mergeSort(arr: any[]): any[] {
  if (arr.length <= 1) return arr;
  const mid = Math.floor(arr.length/2);
  const group1 = mergeSort(arr.slice(0, mid));
  const group2 = mergeSort(arr.slice(mid));
  return merge(group1, group2);
}

// console.log(merge([1,3,4,8], [2, 5, 6, 7, 9]));
// console.log(mergeSort([9,2,3,5,4,6]))

// -------- ^ merge sort ^ -------- //

function pivot(arr: any[], start: number = 0, end: number = arr.length + 1): number {
  let pivot = arr[start];
  let swapIdx = start;

  for (let i = start + 1; i <= end; i++) {
    if(pivot > arr[i]) {
      swapIdx++;
      swap(arr, swapIdx, i);
    }
  }
  swap(arr, start, swapIdx);
  return swapIdx;
}

function quickSort(arr: any[], left: number = 0, right = arr.length -1): any[] {
  if (left < right) {
  }
  return arr;
}

// console.log(quickSort([7,3,5,6,4,1,8]));

// -------- ^ quick sort ^ -------- //

function getDigit(num: number, i: number): number {
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

function digitCount(num: number): number {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function mostDigits(list: any[]): number {
  let maxDigits = 0;
  for (let i = 0; i < list.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(list[i]));
  }
  return maxDigits;
}

function radixSort(arr: number[]): number[] {
  const maxLength = mostDigits(arr);

  for (let i = 0; i < maxLength; i++) {
    let buckets: any[] = Array.from({ length: 10 }, () => []);

    for (let j = 0; j < arr.length; j++) {
      const digit = getDigit(arr[j], i);
      buckets[digit].push(arr[j]);
    }
    arr = [].concat(...buckets);
  }
  return arr;
}

console.log(radixSort([23, 345, 5467, 12, 2345, 9852]));

// -------- ^ radix sort ^ -------- //
