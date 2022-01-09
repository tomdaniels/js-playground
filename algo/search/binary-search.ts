function binarySearch(arr: any[], search: any): number {
  let left = 0;
  let right = arr.length -1;
  
  while (left <= right) {
    let middleIndex = Math.floor((left + right) / 2);
      if (search === arr[middleIndex]) return middleIndex;
      if (search > arr[middleIndex]) left = middleIndex + 1;
        else right = middleIndex -1;
  }
  
  return -1;
}

function binSearch(arr: any[], elem: number): number {
  let start = 0;
  let end = arr.length -1;
  let middle = Math.floor((start + end) / 2);
  
  while (arr[middle] != elem && start <= end) {
    if (arr[middle] < elem) start = middle + 1;
      else end = middle - 1;

    middle = Math.floor((start + end) /2);
  }
  
  return arr[middle] === elem ? middle : -1;
}

// log(
//   binarySearch([1,2,3,4,5,6,7,], 13),
//   binarySearch([1,2,3,4,5,6,7,8,9], 2),
//   binarySearch([1,2,3,4,5,6,7,8,9,13,14,15], 3),
//   binarySearch([1,2,3,4,5,], 6),
//   binarySearch([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15], 13),
// );


// log(
//   binSearch([1,2,3,4,5,6,7,], 13),
//   binSearch([1,2,3,4,5,6,7,8,9], 2),
//   binSearch([1,2,3,4,5,6,7,8,9,13,14,15], 3),
//   binSearch([1,2,3,4,5,], 6),
//   binSearch([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15], 13),
// );
