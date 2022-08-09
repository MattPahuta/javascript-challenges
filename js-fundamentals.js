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