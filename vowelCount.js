/*Return the number (count) of vowels in the given string.
We will consider a, e, i, o, u as vowels for this Kata (but not y).
The input string will only consist of lower case letters and/or spaces.*/

//Case-1 Using for loop
const vowels = ["a", "e", "i", "o", "u"]
function getCount(str) {
  let vowelsCount = 0;
  
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

//Case-2 Using Regex
function countVowel(str) { 
    const count = str.match(/[aeiou]/gi).length;
    return count;
}

const string = prompt('Enter a string: ');
const result = countVowel(string);
console.log(result);
