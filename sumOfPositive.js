// *** Sum of positive  - 8 kyu
/*
You get an array of numbers, return the sum of all of the positives ones.

Example [1,-4,7,12] => 1 + 7 + 12 = 20

Note: if there is nothing to sum, the sum is default to 0.
*/
function positiveSum(arr) {
  let sum = 0;
  // if (arr.length <= 1) {
  //   return 0;
  // }
  // const positiveNums = arr.filter(num => num > 0);

  // for (let i = 0; i < positiveNums.length; i +=1) {
  //   sum += positiveNums[i];
  // }

  // return sum;
  // *** Old ES5 solution
  for (i = 0; i < arr.length; i += 1) {
    if (arr[i] > 0) {
      sum += arr[i];
    }
  }
  return sum;

  // *** Submited version:
  // return arr.filter(num => num > 0)
  //           .reduce((a,b) => a + b, 0);

}

console.log(positiveSum([-1,2,0,0,3,4,-5])) // => 9
console.log(positiveSum([4,4,4])) // => 9
console.log(positiveSum([1])) // => 9