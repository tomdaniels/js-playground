const moment = require('moment');

// const todaysDate = moment().format('L');

const today = new Date();
const todaysDate = today.toLocaleDateString();
const twentyFourHours = new Date(
  today.setDate(today.getDate() + 1)
).toLocaleDateString();

// console.log(todaysDate)
// console.log(twentyFourHours);

// ---------------------------------- ^ DATE TIME TESTING ^ ---------------------------------- //

const target = { sourceId: 'CX-7532-UB', sourceType: 'News - Index' };

const result = Object.entries(target)
  .map(([key, value]) => `${key}=${value.replace(' ', '')}`)
  .join('&');

// ---------------------------------- ^ QUERY PARAM TESTING ^ ---------------------------------- //

const { mapKeys, mapValues, stubFalse } = require('lodash');

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
  'home loan rates as low as <%= interestRate %>% p.a | <%= compRate %>% p.a comp rate'
);
// ratesTitle({ interestRate: 1.88, compRate: 2.87 });

// ---------------------------------- ^ TEMPLATES ^ ---------------------------------- //

const map = (fn) => (mappable) => mappable.map(fn);

const pipe =
  (...fns) =>
  (x) =>
    fns.reduce((y, f) => f(y), x);
const log = (...args) => console.log(args);

const arr = [1, 2, 3, 4];

const isEven = (n) => n % 2 === 0;
const stripe = (n) => (isEven(n) ? 'dark' : 'light');

const stripeAll = map(stripe);
const striped = stripeAll(arr);
// log(striped);

const double = (n) => n * 2;
const doubleAll = map(double);
const doubled = doubleAll(arr);
// log(doubled);

// ---------------------------------- ^ comp ^ ---------------------------------- //

const once = require('lodash/once');
// const { unique } = require('underscore');

const call = once((thing) => {
  console.log(thing);
  return thing;
});

// console.log(call(1));
// console.log(call(2));
// console.log(call(3));

// ---------------------------------- ^ once ^ ---------------------------------- //

const grid = [
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
];

const valid_grid = [
  [5, 3, 4, 6, 7, 8, 9, 1, 2],
  [6, 7, 2, 1, 9, 5, 3, 4, 8],
  [1, 9, 8, 3, 4, 2, 5, 6, 7],
  [8, 5, 9, 7, 6, 1, 4, 2, 3],
  [4, 2, 6, 8, 5, 3, 7, 9, 1],
  [7, 1, 3, 9, 2, 4, 8, 5, 6],
  [9, 6, 1, 5, 3, 7, 2, 8, 4],
  [2, 8, 7, 4, 1, 9, 6, 3, 5],
  [3, 4, 5, 2, 8, 6, 1, 7, 9],
];

function isValid(...args) {
  return args.reduce((acc, num) => acc + num) === 45;
}

function getCol(idx, grid) {
  var column = [];
  for (var i = 0; i < grid.length; i++) {
    column.push(grid[i][idx]);
  }
  return column;
}

function validSolution(grid) {
  let passed = false;
  let subgridsToCheck = 9;
  return grid.every((row, i) => {
    // horizontal
    if (isValid(...row)) {
      passed = true;
    }

    // vertical
    let column = getCol(i, grid);
    if (isValid(...column)) {
      passed = true;
    } else {
      passed = false;
    }

    const subgrids = [
      [0, 3],
      [3, 6],
      [6, 9],
    ];
    while (subgridsToCheck > 0) {
      subgrids.every(([x, y]) => {
        for (let j = 0; j < 3; j++) {
          const subgrid = grid
            .slice(x, y)
            .map((row) => row.slice(...subgrids[j]));

          if (passed && isValid(...subgrid.flat())) {
            subgridsToCheck = 0;
            passed = true;
          } else {
            passed = false;
          }
        }
        subgridsToCheck--;
      });
    }
    return passed;
  });
}

// console.log(validSolution(grid));
// console.log(validSolution(valid_grid));

// ---------------------------------- ^ sudoku ^ ---------------------------------- //

const _arr = Object.values({
  thing: 'one',
  second: 'thing',
  third: 'item',
});
const random = Math.floor(Math.random() * _arr.length);

// console.log(_arr, random);

// ---------------------------------- ^ random object value ^ ---------------------------------- //

const generateDateRange = (from, modifier = 'day') => {
  const dates = [];

  let currentDate = moment(from);

  const quarterly = modifier === 'quarterly';
  const daily = modifier === 'daily';

  let step = quarterly ? 3 : 1;
  let _modifier = quarterly
    ? 'month'
    : daily
    ? 'day'
    : modifier.replace('ly', '');

  let scheduleCount = 0;
  while (scheduleCount < 3) {
    dates.push(currentDate.format('YYYY-MM-DD'));
    currentDate = currentDate.add(step, _modifier);
    scheduleCount++;
  }

  return _modifier === 'once' ? dates.slice(0, 1) : dates;
};

// ['once', 'daily', 'weekly', 'monthly', 'quarterly'].forEach((f) =>
//   console.log(generateDateRange('2018-11-07', f))
// );

// ---------------------------------- ^ recurring date ranges ^ ---------------------------------- //

const Benchmark = require('benchmark');
const suite = new Benchmark.Suite('mapVreduce');

const collection = Array.from({ length: 100 }).map((_, i) => ({
  key: i++,
  checked: i % 3 === 0,
}));

suite
  .add('Array.prototype.map', () => {
    collection.map((x) => ({ ...x, checked: true }));
  })
  .add('Array.prototype.reduce', () => {
    collection.reduce((a, c) => [...a, { ...c, checked: true }], []);
  })
  .on('cycle', (event) => {
    const benchmark = event.target;
    console.log(benchmark.toString());
  })
  .on('complete', (event) => {
    const suite = event.currentTarget;
    const fastestOption = suite.filter('fastest').map('name');
    console.log(`The fastest option is ${fastestOption}`);
  });
// .run();
// ---------------------------------- ^ map vs reduce ^ ---------------------------------- //
