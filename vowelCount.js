/*Return the number (count) of vowels in the given string.
We will consider a, e, i, o, u as vowels for this Kata (but not y).
The input string will only consist of lower case letters and/or spaces.*/

const vowels = ["a", "e", "i", "o", "u"]
function getCount(str) {
  let vowelsCount = 0;
  
  // enter your majic here
  for (let letter of str.toLowerCase()) {
        if (vowels.includes(letter)) {
            vowelsCount++;
        }
    }
  return vowelsCount;
}

const string = prompt('Enter a string: ');
const result = getCount(string);
console.log(result);
