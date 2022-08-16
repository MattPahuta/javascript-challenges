// *** Double Char - 8 kyu
/*
  Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

  Examples (Input -> Output):
  * "String"      -> "SSttrriinngg"
  * "Hello World" -> "HHeelllloo  WWoorrlldd"
  * "1234!_ "     -> "11223344!!__  
*/

function doubleChar(str) {
  // Initial solution
  // let doubledStr = "";
  // for (let char of str) {
  //   doubledStr += char + char;
  // }
  // return doubledStr;

  // more modern solution:
  return str.split('').map(char => char + char).join('');
}

// console.log(doubleChar("String" ))
// console.log(doubleChar("Hello World"))
// console.log(doubleChar("1234!_ "))