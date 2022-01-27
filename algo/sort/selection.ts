import swap from './helpers/swap';

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

console.log(selectionSort([7,4,5,6,3,2,8]));
