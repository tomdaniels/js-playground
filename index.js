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

const once = require('lodash/once');
const { unique } = require('underscore');

const call = once((thing) => {console.log(thing); return thing});

// console.log(call(1));
// console.log(call(2));
// console.log(call(3));
