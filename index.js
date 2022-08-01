function isPalindrome(word) {
  // Write your algorithm here
  const wordValues = word.split('');
  // console.log('split', wordValues)
  const wordReverse = wordValues.reverse();
  // console.log('reverse', wordReverse)
  const wordJoin = wordReverse.join('')
  // console.log('join', wordJoin)


  if(word === wordJoin){
      return true
  } else {return false}
}

/* 
  Add your pseudocode here
- take word and split each one to be its on array
- use the reverse() to take each word and check if the letters match being read backwards
- join the letter back together
*/
 
 /*
 Add written explanation of your solution here
 The function will take in a word, evaluate it and if it sees it as a Palindrome, it will return 'true', otherwise it will return 'false'
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
