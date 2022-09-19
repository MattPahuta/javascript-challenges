// *** Code Wars Challenges *** //

// *** Binary Addition - 7 kyu
/*
  Implement a function that adds two numbers together and returns their sum in binary. The conversion can be done before, or after the addition.

  The binary number returned should be a string.

  Examples:(Input1, Input2 --> Output (explanation)))
  1, 1 --> "10" (1 + 1 = 2 in decimal or 10 in binary)
  5, 9 --> "1110" (5 + 9 = 14 in decimal or 1110 in binary)
*/

function addBinary(a,b) {
  const sum = a + b; // add the two nums, 5 + 9 => 14
  // convert sum to binary, 14 => 1110 
  // return binary num as a string
  return sum.toString(2);

  // more concise:
  // return (a + b).toString(2);
}

// *** Reduce but Grow - 8 kyu
/*
  Given a non-empty array of integers, return the result of multiplying the values together in order. 
  Example:
  [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24
*/

function grow(arr) {
  // using reduce
  return arr.reduce((prevVal, currVal) => prevVal * currVal, 1);

  // using a for loop
  // let product = 1;
  // for (let num of arr) {
  //   product *= num;
  // }
  // return product;
}

// *** Sum of Numbers - 7 kyu
/*
  Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.

  Note: a and b are not ordered!

  Examples (a, b) --> output (explanation)
  (1, 0) --> 1 (1 + 0 = 1)
  (1, 2) --> 3 (1 + 2 = 3)
  (0, 1) --> 1 (0 + 1 = 1)
  (1, 1) --> 1 (1 since both are same)
  (-1, 0) --> -1 (-1 + 0 = -1)
  (-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2)
*/

function getSum(a, b) {
  const numsToSum = [];
  if (a === b) return a;
  else if (a > b) {
    for (let i = b; i <= a; i++) {
      numsToSum.push(i);
    }
  } else {
    for (let i = a; i <= b; i++) {
      numsToSum.push(i);
    }
  }

  console.log(numsToSum)
  return numsToSum.reduce((prevVal, currVal) => prevVal + currVal, 0);
}