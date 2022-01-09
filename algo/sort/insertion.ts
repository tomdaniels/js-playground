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

// console.log(insertionSort([4,5,7,6,8,2]));
