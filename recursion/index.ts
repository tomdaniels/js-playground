function collectOdds(arr: any[]): any[] {
  let result: any[] = [];

  if (arr.length === 0) {
    return result;
  }

  if (arr[0] % 2 !== 0) {
    result.push(arr[0]);
  }

  result = result.concat(collectOdds(arr.slice(1)));
  return result;
}

// log(collectOdds([1,2,3,4,5]));

// ---------------------------------- ^ collect odds recursion ^ ---------------------------------- //

function power(base: number, exponent: number): number {
  if (exponent === 0) return 1;
  return base * power(base, exponent - 1);
}

// log(
//   power(2,0),
//   power(2,2),
//   power(2,4)
// )

// ---------------------------------- ^ powerOf w/ recursion ^ ---------------------------------- //

function factorial(num: number): number {
  if (num === 1) return 1;
  console.log(num - 1);
  return num * factorial(num - 1);
}

// log(
//   factorial(1),
//   factorial(2),
//   factorial(4),
//   factorial(7)
// )

// ---------------------------------- ^ factorial recursion ^ ---------------------------------- //
