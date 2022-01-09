import swap from './helpers/swap';

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
  if(left < right){
    let pivotIndex = pivot(arr, left, right);
    quickSort(arr,left,pivotIndex-1);
    quickSort(arr,pivotIndex+1,right);
  }
  return arr;
} 
         
// console.log(quickSort([100,-3,2,4,6,9,1,2,5,3,23]));
