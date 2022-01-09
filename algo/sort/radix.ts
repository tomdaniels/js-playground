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

// console.log(radixSort([23, 345, 5467, 12, 2345, 9852]));
