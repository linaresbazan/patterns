/**
 * You can assume that `n` is an integer.
 * @param {number} n
 * @returns {number} the sum of all integers from 1 to n, inclusive
 * @returns `0` if n is 0 or negative
 */
export function sumToN(n) {
  if (typeof n !== "number") return NaN;

  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}

/**
 * @param {number} n
 * @returns {number} the product of all integers from 1 to n, inclusive
 * @returns `NaN` if n is not a number
 * @returns `undefined` if n is negative
 * @returns `1` if n is 0
 */
export function factorial(n) {
  if (typeof n !== "number") {
    return NaN;
  } else if (n < 0) {
      return undefined;
  }

  let product = 1;
  for (let i = 1; i <= n; i++) {
    product *= i;
  }
  return product;
}

/**
 * @param {number} n
 * @returns {number[]} an array of integers from 1 to n, inclusive
 * @returns `null` if n is not a number
 * @returns `[]` if n is 0 or negative
 */
export function buildNArray(n) {
  if (typeof n !== "number") {
    return null;
  }
  const numArr = [];

  for (let i = 1; i <= n; i++) {
    numArr.push(i);
  }
  return numArr;
}

/**
 * @param {string[]} strings
 * @returns {string} the longest string in `strings`
 */
export function getLongestString(strings) {

  let longestString = '';

  for (let i = 0; i < strings.length; i++) {
    const currentString = strings[i];
    if (currentString.length > longestString.length) {
      longestString = currentString;
    }
  }

  return longestString;
}

/**
 * @param {boolean[]} attendance - `true` means a student is present, `false` means a student is absent
 * @returns {number} the number of students present
 */
export function countPresent(attendance) {
  let studentsPresentCount = 0;

  for (let i = 0; i < attendance.length; i++) {
    const currentStudentIsPresent = attendance[i];
    if (currentStudentIsPresent) {
      studentsPresentCount++;
    }
  }
  return studentsPresentCount;
}

/**
 * In DNA strings, the symbols `A` and `T` are complements of each other,
 * and the symbols `C` and `G` are complements of each other.
 * A complementary strand is a string formed by the complement
 * of each nucleobase in the original string.
 *
 * @param {string} dna - a string of the symbols `A`, `T`, `C`, or `G`
 * @returns {string} the complementary DNA strand
 * @returns `null` if `dna` is not a string
 */
export function complementDNA(dna) {
  if (typeof dna !== "string") {
    return null;
  }

  let complementaryDNA = "";

  for (let index = 0; index < dna.length; index++) {
    const currentDNA = dna[index];
    
    if (currentDNA === "A") {
      complementaryDNA += "T";
    } else if (currentDNA === "T") {
      complementaryDNA += "A";
    } else if (currentDNA === "C") {
      complementaryDNA += "G";
    } else if (currentDNA === "G") {
      complementaryDNA += "C";
    }

    // switch (currentDNA) {
    //   case "A":
    //     complementaryDNA += "T";
    //     break;
    //   case "T":
    //     complementaryDNA += "A";
    //     break;
    //   case "C":
    //     complementaryDNA += "G";
    //     break;
    //   case "G":
    //     complementaryDNA += "C";
    //     break;
    // }
  }
  return complementaryDNA;
}
