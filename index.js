function isPalindrome(word) {
  // Write your algorithm here
  let splitWord = word.split('')
  let reverseArray = splitWord.reverse()
  let reversedWord = reverseArray.join('')
  return(reversedWord === word)
}

/* 
  Add your pseudocode here
  take sring and reverse each character placement
    -split string into an array of characters
    -reverse array
    -join array
  compare to original string
  return boolean
*/

/*
  Add written explanation of your solution here
  
  To solve this I broke it down into 3 steps:
    1. take the word and reverse the characters
    2. compare to original word
    3. return result of comparison
  
  To complete step 1, I had to break the process down even further.  The reverse method didn't seem to work on the string so i had to break down the string into an array of characters using the split method.
  I was then able to use the reverse method on the new array splitWord.  Now in order to compare it to the original word, i used the join method to turn the array back into a string.  
  to complete the solution i had the function return the comparison.
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
