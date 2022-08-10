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