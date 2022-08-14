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

// *** Grasshopper - Grade book - 8 kyu
/*
  Complete the function so that it finds the average of the three scores passed to it and returns the letter value associated with that grade.

  Numerical Score	Letter Grade
  90 <= score <= 100	'A'
  80 <= score < 90	'B'
  70 <= score < 80	'C'
  60 <= score < 70	'D'
  0 <= score < 60	'F'
  Tested values are all between 0 and 100. Theres is no need to check for negative values or values greater than 100.
*/

function getGrade(s1, s2, s3) {
  const avgScore = ((s1 + s2 + s3) / 3).toFixed(2);
  if (avgScore >= 90) return 'A';
  else if (avgScore >= 80) return 'B';
  else if (avgScore >= 70) return 'C';
  else if (avgScore >= 60) return 'D';
  else return 'F';

  // with a switch statement
  // switch(true) {
  //   case (avgScore >= 90):
  //     return 'A';
  //   case (avgScore >= 80):
  //     return 'B';
  //   case (avgScore >= 70):
  //     return 'C';
  //   case (avgScore >= 60):
  //     return 'D'; 
  //   default:
  //     return 'F';   
  // }

}

console.log(getGrade(95,90,93)) // => 'A'
console.log(getGrade(84,79,85)) // => 'B'
console.log(getGrade(65,70,59)) // => 'D'

// *** Count by X - 8 kyu
/*
  Create a function with two arguments that will return an array of the first n multiples of x.
  Assume both the given number and the number of times to count will be positive numbers greater than 0.
  Return the results as an array or list ( depending on language ).

  Examples
  countBy(1,10) === [1,2,3,4,5,6,7,8,9,10]
  countBy(2,5) === [2,4,6,8,10]
*/
function countBy(x, n) {
  let z = [];
  for (let i = 1; i <= n; i++) { // i is your counter, counting up to and including 'n'
    z.push(x*i) // for each iteration, push the value of x * 1
  }
  return z;
}






