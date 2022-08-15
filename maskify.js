// *** Credit Card Mask *** //
// ************************ //
/*
  Your task is to write a function maskify, which changes all but the last four characters into '#'.
*/

function maskify(cc) {
  // const ccArr = cc.split(''); // change string into array
  // if (ccArr.length <= 4) return cc; // account for short cc
  // const lastFourEls = ccArr.slice(ccArr.length -4); // get last four elements of array
  // return ccArr.slice(0, ccArr.length - 4).map(el => { // get all but last four elements, map over array
  //   return el = "#"; // update elements to "#"
  // }).concat(lastFourEls).join(""); // concat with last four elements, join back to a string

  // alternative solution, using padStart() string method
  return cc.slice(-4).padStart(cc.length,'#')
}

console.log(maskify("4556364607935616")) // => "############5616"