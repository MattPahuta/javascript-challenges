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