// *** Ones and Zeros - 7 kyu
/* 
 Given an array of ones and zeroes, convert the equivalent binary value to an integer.

 Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1.
*/

function binaryArrayToNumber(arr) {
  // convert arr to string, wrap with Number to ensure proper type
  // use parseInt w/radix argument to convert to base 2
  return parseInt(Number(arr.join("")), 2); 
}