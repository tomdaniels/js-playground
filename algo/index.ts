// for (let i = 1; i < 101; i++) {
//   const fizz = i % 3 === 0;
//   const buzz = i % 5 === 0;
//   // console.log(
//   fizz && buzz ? 'fizzBuzz' : fizz ? 'fizz' : buzz ? 'buzz' : i;
//   // );
// }

// /////////////

// function anagram(s1: string, s2: string): boolean {
//   const lookup: { [key: string]: any } = {};

//   for (let char of s1) {
//     lookup[char] = (lookup[char] || 0) + 1;
//   }

//   for (let char of s2) {
//     if (!lookup[char]) return false;
//     lookup[char] -= 1;
//   }
//   return true;
// }

// function palindrome(str: string): boolean {
//   const reveresed = str.split('').reverse().join('');
//   return str === reveresed || false;
// }

// /**
//  * A function that returns true or false if any letters of a string form a palindrome
//  * @param str any word
//  * @returns boolean if any arrangement of letters forms a palindrome
//  *
//  * @example isAnyPermutationPalindrome('toto') => true
//  * @example isAnyPermutationPalindrome('civil) => false
//  * @example isAnyPermutationPalindrome('vicic') => true
//  */
// function isAnyPermutationPalindrome(str: string): boolean {
//   const unmatched = new Set<string>();
//   str.split('').forEach((x) => {
//     if (unmatched.has(x)) unmatched.delete(x);
//     else unmatched.add(x);
//   });
//   return unmatched.size <= 1;
// }

// /**
//  * A function to return a valid number of open and close parens ()
//  * @param s string
//  * @returns boolean
//  *
//  * @example validParens('()') => true
//  * @example validParens('())') => false
//  */
// function validParens(s: string): boolean {
//   let depth = 0;

//   for (let i = 0; i < s.length; i++) {
//     const char = s[i];
//     if (char === '(') {
//       depth++;
//     } else if (char === ')') {
//       depth--;
//     } else {
//       throw Error('invalid input');
//     }
//   }

//   return depth === 0;
// }

// // console.log(validParens('(()(()))'));

// ////////////////////

// const countUniqueValues = (arr: any[]): number => {
//   if (arr.length === 0) {
//     return 0;
//   }

//   var i = 0;
//   for (var j = 1; j < arr.length; j++) {
//     if (arr[i] !== arr[j]) {
//       i++;
//       arr[i] = arr[j];
//     }
//   }
//   return i + 1;
// };

// // log(
// //   'results',
// //   countUniqueValues([1,1,1,2]),
// //   countUniqueValues([1,2,2,3,4,5,6,6,6,7,7,8]),
// // );

// // ---------------------------------- ^ unique values ^ ---------------------------------- //

// const sameFrequency = (...args: any[]): boolean => {
//   if (args.length < 2) {
//     return false;
//   }

//   const first = args[0].toString();
//   const lookup: { [key: string]: any } = {};

//   for (let num of first) {
//     lookup[num] = (lookup[num] || 0) + 1;
//   }

//   const second = args[1].toString();

//   for (let num of second) {
//     if (!lookup[num]) {
//       return false;
//     }
//     lookup[num] -= 1;
//   }

//   return true;
// };

// // log(
// //   sameFrequency(182, 812),
// //   sameFrequency(34, 14),
// //   sameFrequency(3589578, 3589578),
// //   sameFrequency(22, 222),
// // );

// // ---------------------------------- ^ freq counter ^ ---------------------------------- //

// const areThereDuplicates = (...args: any): boolean => {
//   // console.log(new Set(arguments).size);
//   if (args.length < 2) {
//     return false;
//   }

//   const lookup: Record<string, number> = {};
//   for (let item of args) {
//     lookup[item] = (lookup[item] || 0) + 1;
//   }

//   for (let key in lookup) {
//     if (lookup[key] >= 2) {
//       return true;
//     }
//   }

//   return false;
// };

// // console.log(
// //   areThereDuplicates(1, 2, 3),
// //   areThereDuplicates(1, 2, 2),
// //   areThereDuplicates('a', 'b', 'c', 'a'),
// // );

// // ---------------------------------- ^ averages ^ ---------------------------------- //

// function averagePair(arr: any[], avg: number): boolean {
//   let start = 0;
//   let end = arr.length - 1;

//   while (start < end) {
//     const result = (arr[start] + arr[end]) / 2;
//     if (result === avg) {
//       return true;
//     }

//     if (result < avg) {
//       start++;
//     } else {
//       end--;
//     }
//   }
//   return false;
// }

// // log(
// //   averagePair([1, 2, 3], 2.5),
// //   averagePair([1,3,3,5,6,7,10,12,19], 8),
// // );

// // ---------------------------------- ^ pair challenge ^ ---------------------------------- //

// function isSubsequence(str1: string, str2: string): boolean {
//   var i = 0;
//   var j = 0;

//   if (!str1) return true;
//   while (j < str2.length) {
//     if (str2[j] === str1[i]) i++;
//     if (i === str1.length) return true;
//     j++;
//   }

//   return false;
// }

// // log(
// //   isSubsequence('hello', 'hello world'),
// //   isSubsequence('sing', 'sting'),
// //   isSubsequence('abc', 'acb'),
// // )

// // ---------------------------------- ^ subsequence challenge ^ ---------------------------------- //

// function add(a: string, b: string): string;
// function add(a: number, b: number): number;
// function add(a: any, b: any): any {
//   return a + b;
// }

// add('Hello ', 'Steve'); // returns "Hello Steve"
// add(10, 20); // returns 30

// // ---------------------------------- ^ overloading ^ ---------------------------------- //

export enum CHART_TYPE {
  AREA = 'Area',
  AREA_CONTINUOUS = 'Area Continuous',
  AREA_STACKED_100 = '100% Stacked Area',
  BAR_COLORED = 'Colored Bar',
  BAR_GROUPED = 'Grouped Bar',
  BAR_STACKED = 'Stacked Bar',
  BAR_STACKED_100 = '100% Stacked Bar',
  COLUMN_COLORED = 'Column Colored',
  COLUMN_GROUPED = 'Grouped Column',
  COLUMN_STACKED = 'Stacked Column',
  COLUMN_STACKED_100 = '100% Stacked Column',
  COMBO_GROUPED = 'Grouped Combo',
  COMBO_STACKED = 'Stacked Combo',
  DONUT = 'Donut',
  GAUGE = 'Gauge',
  GEO_CHOROPLETH = 'Geospatial Choropleth',
  GEO_HEATMAP = 'Geospatial Heatmap',
  GEO_SCATTER = 'Geospatial Scatter',
  HEATMAP = 'Heatmap',
  LINE = 'Line',
  LINE_CONTINUOUS = 'Line Continuous',
  NUMBER = 'Number',
  SCATTER = 'Scatter',
  TABLE = 'Data Table',
  TOP_ITEM = 'Top Item',
  WORD_CLOUD = 'Word Cloud',
}

console.log('hjfdshjfh', CHART_TYPE);
