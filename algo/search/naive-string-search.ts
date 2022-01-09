// returns a count of how many substr matches are found within a string
function naiveStringSearch(str: string, substring: string): number {
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
