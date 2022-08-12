// *** Mumbling - 7 kyu
/*
  Examples:
  accum("abcd") -> "A-Bb-Ccc-Dddd"
  accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
  accum("cwAt") -> "C-Ww-Aaa-Tttt"

  The parameter of accum is a string which includes only letters from a..z and A..Z.
*/

function accum(s) {
  // const result = []; // initialize an empty array
  // const lowerStr = s.toLowerCase(); // change str to lowercase

  // for (let i = 0; i < lowerStr.length; i++) { // loop through lowerStr
  //   let str = lowerStr[i].toUpperCase(); // make new str w/each first char upperCase
  //   for (let j = 0; j < i; j++) { // loop through each char up to index number
  //     str += lowerStr[i]; // concat same char, lowercased, to str
  //   }
  //   result.push(str) // push each str as element of result array
  // }

  // return result.join("-");

  // using split, map, repeat, join
  return s.split('').map((char, index) => (char.toUpperCase() + char.toLowerCase().repeat(index))).join('-');

  // same as above, but with spread
  // return [...s].map((char, index) => (char.toUpperCase() + char.toLowerCase().repeat(index))).join("-")
}

console.log(accum("abcd"));
console.log(accum("RqaEzty"));
console.log(accum("cwAt"));
