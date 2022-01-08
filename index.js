// const token = require('./tkn').trim();
// const { usersTxnApiV1, streetProfileApiV1 } = require('@domain-group/fe-node-clients');

// const client = usersTxnApiV1({
//   apiUrl: 'https://no-cdn-s-users-api.baby.domain.com.au',
//   lifecycle: 'PerRequest',
// });

// const runClient = async () => {
//   let response;
//   try {
//     response = await client.loanTools.getCalculatorData({
//       calculator: 'ufc',
//       accessToken: token,
//       deviceSessionId: '31eb4506-64df-42a0-9e38-abac4932ab61',
//       noCache: false,
//     });
//   } catch (error) {
//     console.log('nah mate: ', error);
//   }

//   console.table(response);
//   return response;
// };

// runClient()


// ---------------------------------- ^ NODE CLIENT TESTING ^ ---------------------------------- //

const moment = require('moment');

// const todaysDate = moment().format('L'); 

const today = new Date();
const todaysDate = today.toLocaleDateString();
const twentyFourHours = new Date(today.setDate(today.getDate() + 1)).toLocaleDateString()

// console.log(todaysDate)
// console.log(twentyFourHours);

// ---------------------------------- ^ DATE TIME TESTING ^ ---------------------------------- //

const target = {sourceId: "CX-7532-UB", sourceType: "News - Index"};

const result = Object.entries(target)
  .map(([key, value]) => `${key}=${value.replace(' ', '')}`)
  .join('&');

// ---------------------------------- ^ QUERY PARAM TESTING ^ ---------------------------------- //

const { mapKeys, mapValues } = require('lodash');

const obj = {
  header: 'sometihg',
  url: 'something',
  displayCount: 4, 
};

// mapKeys(obj, (keys) => console.log('keys', keys));
// mapValues(obj, (keys) => console.log('values', keys));

// ---------------------------------- ^ MAPKEYS/VALUES ^ ---------------------------------- //


// create the alphabet

const toChars = (value, index) => String.fromCharCode(index + 65);
const alphabet = Array.from(Array(26)).map(toChars);

// map the alphabet
let incr = 1;
const alphaMap = alphabet.reduce((obj, item) => {
  obj[item.toLowerCase()] = incr++;
  return obj;
}, {});

// map the string
const testString = 'The sunsents ya bastard';
const alphaPosition = (item) => alphaMap;
// console.log(testString.split('').map((letter) => alphaMap[letter.toLowerCase()]));

// ---------------------------------- ^ ALPHABET TEST ^ ---------------------------------- //

const template = require('lodash/template');

const ratesTitle = template(
  'home loan rates as low as <%= interestRate %>% p.a | <%= compRate %>% p.a comp rate',
);
// ratesTitle({ interestRate: 1.88, compRate: 2.87 });


// ---------------------------------- ^ TEMPLATES ^ ---------------------------------- //

const map = fn => mappable => mappable.map(fn);

const pipe = (...fns) => x => fns.reduce((y, f) => f(y), x);
const log = (...args) => console.log(args);

const arr = [1, 2, 3, 4];

const isEven = n => n % 2 === 0;
const stripe = n => isEven(n) ? 'dark' : 'light';

const stripeAll = map(stripe);
const striped = stripeAll(arr);
// log(striped);

const double = n => n * 2;
const doubleAll = map(double);
const doubled = doubleAll(arr);
// log(doubled);


// ---------------------------------- ^ comp ^ ---------------------------------- //

const { homeLoansApiV1 } = require('@domain-group/fe-node-clients');

// const client = homeLoansApiV1({
//   apiUrl: 'https://stage-home-loans-api.domainloanfinder.com.au',
// });

// (async () => {
  // console.log(await client.homeLoanRates());
// })()

// ---------------------------------- ^ client ^ ---------------------------------- //

const once = require('lodash/once');
const { unique } = require('underscore');

const call = once((thing) => {console.log(thing); return thing});

// console.log(call(1));
// console.log(call(2));
// console.log(call(3));



// ---------------------------------- ^ once ^ ---------------------------------- //

const validAnagram = (str1, str2) => {
  if (str1.length !== str2.length) {
    return false
  };

  let lookup = {};
  for (let char of str1) {
    lookup[char] ? lookup[char] += 1 : lookup[char] = 1;
  }

  for (let char of str2) {
    if (!lookup[char]) {
      return false;
    }
    lookup[char] -= 1;
  }

  return true;
}

// log(
//   validAnagram('string', 'gnirts'),
//   validAnagram('hello', 'olleh'),
//   validAnagram('aaz', 'zza'),
//   validAnagram('cinema', 'iceman'),
// );

// ---------------------------------- ^ anagrams ^ ---------------------------------- //

const countUniqueValues = (arr) => {
  if (arr.length === 0) {
    return 0;
  }

  var i = 0;  
  for (var j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }
  return i + 1;
}

// log(
//   'results',
//   countUniqueValues([1,1,1,2]),
//   countUniqueValues([1,2,2,3,4,5,6,6,6,7,7,8]),
// );

// ---------------------------------- ^ unique values ^ ---------------------------------- //

const sameFrequency = (...args) => {
  if (args.length < 2) {
    return false;
  }
  
  const first = args[0].toString();
  const lookup = {};

  for (let num of first) {
    lookup[num] = (lookup[num] || 0) + 1;
  }

  const second = args[1].toString();

  for (let num of second) {
    if (!lookup[num]) {
      return false
    }
    lookup[num] -= 1;
  }
  
  return true;
}

// log(
//   sameFrequency(182, 812),
//   sameFrequency(34, 14),
//   sameFrequency(3589578, 3589578),
//   sameFrequency(22, 222),
// );

// ---------------------------------- ^ freq counter ^ ---------------------------------- //


const areThereDuplicates = (...args) => {
  // console.log(new Set(arguments).size);
  if (args.length < 2) {
    return false;
  }

  const lookup = {};
  for (let item of args) {
    lookup[item] = (lookup[item] || 0) + 1;
  }

  for (let key in lookup) {
    if (lookup[key] >= 2) {
      return true;
    }
  }

  return false;
}

// log(
//   areThereDuplicates(1, 2, 3),
//   areThereDuplicates(1, 2, 2),
//   areThereDuplicates('a', 'b', 'c', 'a'),
// );

// ---------------------------------- ^ averages ^ ---------------------------------- //


function averagePair(arr, avg) {
  let start = 0;
  let end = arr.length -1;

  while (start < end) {
    const result = (arr[start] + arr[end]) / 2;
    if (result === avg) {
      return true;
    }

    if (result < avg) {
      start++;
    } else {
      end--;
    }
  }
  return false;
}

// log(
//   averagePair([1, 2, 3], 2.5),
//   averagePair([1,3,3,5,6,7,10,12,19], 8),
// );


// ---------------------------------- ^ pair challenge ^ ---------------------------------- //

function isSubsequence(str1, str2) {
  var i = 0;
  var j = 0;

  if (!str1) return true;
  while (j < str2.length) {
    if (str2[j] === str1[i]) i++;
    if (i === str1.length) return true;
    j++
  }

  return false;
}

// log(
//   isSubsequence('hello', 'hello world'),
//   isSubsequence('sing', 'sting'),
//   isSubsequence('abc', 'acb'),
// )


// ---------------------------------- ^ subsequence challende ^ ---------------------------------- //


function binarySearch(arr, search){
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

function binSearch(arr, elem) {
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

// ---------------------------------- ^ binary search ^ ---------------------------------- //

function naiveStringSearch(str, substring) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < substring.length; j++) {
      if (str[i+j] !== substring[j]) break;
      if (j === substring.length - 1) count++;
    }
  }

  return count;
};

// log(
//   naiveStringSearch('lorie loled', 'lol'),
// );

function collectOdds(arr) {
  console.log('arr', arr);
  let result = [];

  if (arr.length === 0) {
    return result;
  }

  if (arr[0] % 2 !== 0) {
    result.push(arr[0]);
  }

  result = result.concat(collectOdds(arr.slice(1)));
  return result;
};

// log(collectOdds([1,2,3,4,5]));

// ---------------------------------- ^ collect odds recursion ^ ---------------------------------- //


function power(base, exponent){
  if (exponent === 0) return 1;
  return base * power(base, exponent -1);
}

// log(
//   power(2,0),
//   power(2,2),
//   power(2,4)
// )


function factorial(num){
  if (num === 1) return 1;
  console.log(num -1);
  return num * factorial(num - 1);
}

// log(
//   factorial(1),
//   factorial(2),
//   factorial(4),
//   factorial(7)
// )

// ---------------------------------- ^ factorial recursion ^ ---------------------------------- //


const { MongoClient } = require('mongodb');

// const uri = 'mongodb+srv://tomd-io:{PASS}@cluster0.qtwzf.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const client = new MongoClient(uri);


async function db() {
  // Use connect method to connect to the server
  await client.connect();
  console.log('Connected successfully to server');
  const db = client.db('tomd-io');
  const collection = db.collection('documents');

  // const result = await collection.insertMany([{thing: 1, other: 2, more: 3}]);

  // the following code examples can be pasted here...
  await collection.deleteMany({thing: 1});

  return collection.find({}).toArray();
}

db()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());

  // ---------------------------------- ^ mongodb ^ ---------------------------------- //
