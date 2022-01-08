for (let i = 1; i < 101; i++) {
  const fizz = i % 3 === 0;
  const buzz = i % 5 === 0;
  const fizzbuzz = fizz &&  buzz
    ? 'fizzBuzz'
    : fizz
      ? 'fizz'
      : buzz
        ?'buzz'
        : i;
  console.log(fizzbuzz);
}

/////////////


function anagram(s1: string, s2: string): boolean {
  const lookup: { [key: string]: any} = {};

  for (let char of s1) {
    lookup[char] = (lookup[char] || 0) + 1;
  }

  for (let char of s2) {
    if (!lookup[char]) return false;
    lookup[char] -= 1
  }
  return true;
}

function palindrome(str: string): boolean {
  const reveresed = str.split('').reverse().join('');
  return str === reveresed || false
}

/**
 * A function that returns true or false if any letters of a string form a palindrome
 * @param str any word
 * @returns boolean if any arrangement of letters forms a palindrome
 * 
 * @example isAnyPermutationPalindrome('toto') => true
 * @example isAnyPermutationPalindrome('civil) => false
 * @example isAnyPermutationPalindrome('vicic') => true
 */
function isAnyPermutationPalindrome(str: string): boolean {
  const unmatched = new Set<string>();
  str.split('').forEach(x => {
    if (unmatched.has(x)) unmatched.delete(x);
    else unmatched.add(x);
  })
  return unmatched.size <= 1;
}

/**
 * A function to return a valid number of open and close parens ()
 * @param s string
 * @returns boolean
 * 
 * @example validParens('()') => true
 * @example validParens('())') => false
 */
function validParens(s: string): boolean {
  let depth = 0;

  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (char === '(') {
      depth++
    } else if (char === ')') {
      depth--
    } else {
      throw Error('invalid input')
    }
  }

  return depth === 0;
}

console.log(validParens('(()(()))'));
