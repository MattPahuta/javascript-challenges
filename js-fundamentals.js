// *** Codewars, Coderbyte, etc. 

// Remove First and Last Character of String 
function removeChar(str) {
  // *** long, step-by-step, convert to array then to string
  // const myStrArr = [];
  // for (let i = 0; i < str.length; i += 1) {
  //   myStrArr.push(str[i]);
  // }
  // myStrArr.pop();
  // myStrArr.shift();
  // const newStr = myStrArr.join('');
  // return newStr;

  // *** Shorter, array to string method
  strArr = str.split('');
  strArr.shift();
  strArr.pop();
  return strArr.join('');


  // *** slice method
  // return str.slice(1, -1);

  // *** substring method
  // return str.substring(1, str.length -1);

};

// console.log(removeChar("HHello Worldd"))
// console.log(removeChar("Mass Effectt"))
// console.log(removeChar("John"))
// console.log(removeChar("Dog"))

// const myStr = 'HHello Worldd';
// const myStrArr = [];
// for (let i = 0; i < myStr.length; i += 1) {
//   myStrArr.push(myStr[i]);
// }

// console.log(myStrArr)
// myStrArr.pop();
// myStrArr.shift();
// console.log(myStrArr);
// const newStr = myStrArr.join('');
// console.log(newStr);

// *** Return Negative 

function makeNegative(num) {
  // if (num <= 0) {
  //   return num;
  // } else {
  // return Math.abs(num) * -1;
  // }
  return num < 0 ? -num : num;

}

console.log(makeNegative(-5)); // return -5
console.log(makeNegative(1)); // return -1
console.log(makeNegative(0)); // return 0
console.log(makeNegative(0.12)); // return -0.12

// *** Vowel Count
// Return the number of vowels in a given string
function getCount(str) {
  var vowelsCount = 0;
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  // use a nested for...loop
  // for (let i = 0; i < str.length; i += 1) {
  //   for (let j = 0; j < vowels.length; j += 1) {
  //     if (str[i] === vowels[j]) {
  //       vowelsCount += 1;
  //     }
  //   }
  // }
  // use a nested for...of loop
  for (let letter of str) {
    for (let vowel of vowels) {
      if (letter === vowel) {
        vowelsCount += 1;
      }
    }
  }

  return vowelsCount;
}

// console.log(getCount('miranda'));
// console.log(getCount('commander shepard'));
// console.log(getCount('aeiouuai'))

// *** Highest and Lowest 
// argument is string of space seperated numbers - return highest and lowest numbers in string format, highest number first
// *My Attempt:
function highAndLowOld(numbers) {
  // convert string to array of strings
  // convert array of strings into array of nums
  const numsArray = numbers.split(' ').map(Number); // didn't need the map function here (see below)
  // find highest num in array
  const high = Math.max(...numsArray);
  // find lowest num in array
  const low = Math.min(...numsArray);

  return `${high} ${low}`;
  // return highest and lowest in string format

}
// * Better Solution:
function highAndLow(numbers){
  numbers = numbers.split(' ');
  // console.log(numbers);
  // console.log(Math.max(...numbers));
  // console.log(Math.min(...numbers));
  return `${Math.max(...numbers)} ${Math.min(...numbers)}`; // Math.max, min convert the strings to numbers for you (in this case)
}

highAndLow("1 2 3 4 5");  // return "5 1"
highAndLow("1 2 -3 4 5"); // return "5 -3"
highAndLow("1 9 3 4 -5"); // return "9 -5"
highAndLow("4 5 29 54 4 0 -214 542 -64 1 -3 6 -6"); // return "542 -214"
highAndLow("1 9 3 4 -5 dfdsdfefef"); // return NaN NaN

// *** Descending Order 
// accept non-negative integer and return it with digits in descending order
function descendingOrder1(num) {
  const numArray = Array.from(String(num), Number);
  const sortedArray = numArray.sort(function(a, b) {
    return b - a;
  })
  .join('')
  return parseInt(sortedArray);
}

// *Better solution
function descendingOrder(n) {
  return parseInt(String(n).split('').sort().reverse().join(''));
}

// [1, 2, 3, 4, 5]

// *** Reversed Strings 
// reverse characters of string passed into function
function solution(str) {
  return str.split('').reverse().join('');
}

solution('world'); // => 'dlrow'

// *** Disemvowel Trolls
// function takes a string and returns new string with vowels removed
function disemvowel(str) {
  return str.replace(/[aeiou]/gi, '');

  // using split, filter, and join
  // const vowels = ['a', 'e', 'i', 'o', 'u'];

  // return str.split('').filter(function(el) {
  //   return vowels.indexOf(el) == -1;
  // }).join('');

}

disemvowel('This website is for losers LOL!');
