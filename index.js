let hacker1 = 'Humberto';
// console.log(`The driver's name is ${hacker1}`);

let hacker2 = 'Carlos';
// console.log(`The navigator's name is ${hacker2}`);

  if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters`);
  }
  else if (hacker1.length < hacker2.length) {
    console.log(`Yo, navigator got the longest name, it has ${hacker2.length} characters`);
  }
  else if (hacker1.length = hacker2.length) {
    console.log(`Wow, you both got equally long names, ${hacker1.length} characters!`);
  }

// -----------------------------------------------------------------------------------------------

// Make letters uppercase and add space between letters  
console.log (hacker1.toUpperCase().split('').join(' '));

// Print navigator's name backwards

// By using .reverse() method
const hacker2 = 'Humberto'

let reversed = hacker2.split('').reverse().join('')

console.log (reversed);

// By using a for loop to iterate backwards through the array, and slice 
// and chartAt to upper case first letter
let reversed = '';
for (let i = hacker2.length - 1; i >= 0; i--) {
  reversed += hacker2[i];
}
reversed = reversed.slice (0, reversed.length - 1) + reversed.charAt(reversed.length - 1).toUpperCase();

console.log (reversed);

// By using a for loop to iterate backwards through the array
let reversed = '';
for (let i = hacker2.length - 1; i >= 0; i--) {
  if (reversed.length !== hacker2.length - 1) 
  reversed += hacker2[i];
  else reversed += hacker2[i].toUpperCase();
};

console.log (reversed)

// By creating an empty array and using unshift to take the letter that is looping through 
// and adding the beginning of the new array, then upper casing the first one
let newReversed = [];
for (let i = 0; i < hacker2.length; i++) {
  newReversed.unshift(hacker2[i]) // array method that adds element to the beginning of the array
};

newReversed = newReversed.join('');

console.log (newReversed)

// -----------------------------------------------------------------------------------------------

// How many words in the string?
const longString = 'this is a super long string';

const longStringCount = longString.split(' ').length;

console.log (longStringCount);

// Other way to do it by treating the contents of the string
const longString = 'this is, a super long string and IS different because it is';

const arrayOfWords = longString.split(' '); // create an array or each word in the string
let wordCount = 0; // declare a variable to store the counting of the words "is"
for (let i = 0; i < arrayOfWords.length; i++) { // loop through each word of the array
    let bringToLowerCase = arrayOfWords[i].toLowerCase(); // declare a variable to store the value of i in lower case
    if (bringToLowerCase === 'is' || bringToLowerCase === 'is,') wordCount++; // if the stored value is "is" or "is,", add 1 to the count of words
}

console.log(wordCount) // log the final count stored in the variable

// lexicographic order
let compare = hacker1.localeCompare(hacker2);

if (compare == 1) {
  console.log (`Yo, the navigator goes first definitely.`);
}
else if (compare == -1) {
  console.log (`The driver's name goes first.`);
}
else {
  console.log (`What?! You both got the same name?`);
}

// -----------------------------------------------------------------------------------------------

// Check if word is a palindrome (same if you reverse the order of the letters)
let phraseToCheck = 'race car';
let stringWithoutSpaces = '';

// 1. join the words in the string by removing the space
for (let i = 0; i < phraseToCheck.length; i++) {
  if (phraseToCheck[i] !== ' ')
  stringWithoutSpaces += phraseToCheck[i]
}

console.log (stringWithoutSpaces)

// 2. reverse the resulting string
let reversedString = '';
for (let i = stringWithoutSpaces.length -1; i >= 0; i--) {
  reversedString += stringWithoutSpaces[i];
}

console.log (reversedString)

// 3. compare the original string with the reversed string
if (stringWithoutSpaces === reversedString)
  console.log (`${phraseToCheck} is a palindrome`);
else console.log (`${phraseToCheck} is not palindrome`);