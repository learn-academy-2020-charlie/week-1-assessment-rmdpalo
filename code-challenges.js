// ASSESSMENT 1: Coding practical questions

// Please read all questions thoroughly
// Psuedo coding is highly recommended

// --------------------1) Create a function that determines if a temperature is below boiling point, at boiling point or above boiling point. Boiling point is 212 degrees Farhenheit.
// Use the test variables provided below. Expected outcome: "35 is below boiling point", "350 is above boiling point", "212 is at boiling point"

var temp1 = 35
var temp2 = 350
var temp3 = 212
var temp4 = "miguel"

//creating a function that passes an argument of temp that will contain our logic
const willItBoil = (temp) => {
    //set the boiling point as 212
    let boilingPoint = 212 
    //begins logic determining if entered temp is above our boiling point or below our boiling point, and returns the result.
    if (temp > 212) {
        return `${temp} is above boiling point.`;
    } else if (temp < 212) {
        return `${temp} is below boiling point.`;
    //if it is neither above or below, it is right at the boiling point and returns the result.
    } else if ( temp === 212) {
        return `${temp} is at boiling point.`;
    } else {
        return "That is not a valid number"
    }
}
//pass desired temp as an argument.
// console.log(willItBoil(temp1));
// console.log(willItBoil(temp2));
// console.log(willItBoil(temp3));
// console.log(willItBoil(temp4));



// --------------------2) Create a function that multiplies each number in the array by 5 using a for loop.
// Use the test variable provided below. Expected outcome: [15, 35, 0, 30, -45]

var myNumbers1 = [3, 7, 0, 6, -9]

//created a function that takes in an array to pass into our logic
const multiplier = (array) => {
    //create an empty array to store out multiplied numbers
    let multArray = []
    //create a for loop that iterates throughout the whole length of the array.
    for (let i = 0; i < array.length; i++) {
        //create a variable to store our multiplied number
        let tempNum = array[i] * 5;
        //push the multiplied number into our multiplied array.
        multArray.push(tempNum);
    }
    //return the multiplied array.
    return multArray;
}
//pass desired array as an argument.
// console.log(multiplier(myNumbers1));


// --------------------3) Create a function that multiplies each number in the array by 5 using map.
// Use the test variable provided below. Expected outcome: [40, -35, 0, 30, 10]

var myNumbers2 = [8, -7, 0, 6, 2]

//create a function that will hold our higher order function inside it
const mapMultiply = (array) => {
    //not quite sure here, but I think I created an array named 'multi5' that stores the product of (value(aka array[i])* 5) through every iteration through the array.
    let multi5 = array.map(value => value * 5)
    //return the multi5 array.
    return multi5
}
//pass the array through here
// console.log(mapMultiply(myNumbers2));



// --------------------4) Create a function that takes in an array and returns an array with only the values at odd indexes.
// Use the test variables provided below. Expected output: [ "Chai tea", "Mocha", "Double espresso" ]

var coffeeRun = ["Vanilla latte", "Chai tea", "Black coffee", "Mocha", "Americano", "Double espresso"]

//create a function that takes in an array
const iNeedThis = (array) => {
    //create an empty array to store odd index elements.
    //use the filter method to only push elements in odd indexes to a new array
    let oddIndexes = array.filter((value, index) => {
        //need more elaboration on why there's an if statement needed if it has one built in, and why it doesn't need curly braces for it to work.
        if (index % 2 !== 0)
        return value
    })
    //returns an array with only the values at odd indexes. INDEXES START AT 0 MIGUEL.
    return oddIndexes
}

// console.log(iNeedThis(coffeeRun));




// --------------------5) Create a function that removes all the vowels from a string.
// Use the test variables provided below. Expected output: "HyThrLrnStdnt" "LvJvScrpt"

var stringWithVowels1 = "HeyThereLearnStudent"
var stringWithVowels2 = "ILoveJavaScript"



//create a function
const noVowels = (string) => {
    //created a new variable no store our string with removed vowels.
    
    //string.replace we enter what we want to be replaced in between two /'s. It can be a word or single characters separated by |, in this case we used | to separate vowels. 
    
    //The argument following the / / can either be g (global), or gi (global case-insensitive). Used gi to cover uppercase vowels as well.
    
    //Then it is followed by what we want it replaced with. In this case nothing so we put ""
    let nVwls = string.replace(/a|e|i|o|u/gi, "")
    //return the string with no vowels
    return nVwls
}
//call the function and enter argument here.
// console.log(noVowels(stringWithVowels1));
// console.log(noVowels(stringWithVowels2));

//IGNORE BELOW IGNORE BELOW IGNORE BELOW IGNORE BELOW
//following along with the class on this block of code, alternate way of solving problem

const noVowelsPlease = (string) => {
    let vowelArray = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]
    let charArr = string.split("")
    let noVowelArray = charArr.filter((value, index) => {
        let isValue = true
        return isValue !== vowelArray.includes(charArr[index])
    })
let noVowelString = noVowelArray.join("")
return noVowelString
}
// console.log(noVowelsPlease(stringWithVowels1));
// console.log(noVowelsPlease(stringWithVowels2));

// const zeroVowels = (str) => {
//     let arrayVowel = str.split("")
//     arrayVowel.filter(value =>{
//         value != "a" &&
//     }).join("")
// }

//IGNORE ABOVE IGNORE ABOVE IGNORE ABOVE IGNORE ABOVE


// --------------------6) Expand the logic from #5 to inform your user if the variable passed into the vowel removal function is not a string.
// Copy and paste or rewrite the function. Use the test variables provided below.

var stringWithVowels3 = true
var stringWithVowels4 = 42
var stringWithVowels5 = "CodingIsGreat"

const noVowelsExpanded = (string) => {
    //created a new conditional that checks the data type, if it is a "string" it moves on to remove vowels.
    if(typeof string === "string") {
        //reused the logic from the previous question
        let nVwls = string.replace(/a|e|i|o|u/gi, "")
        return nVwls
    //if the data type is anything other than a "string" it informs the user that it is not.
    } else {
        return "This is not a string"
    }
}
//call the function and enter argument here.
// console.log(noVowelsExpanded(stringWithVowels3));
// console.log(noVowelsExpanded(stringWithVowels4));
// console.log(noVowelsExpanded(stringWithVowels5));

//IGNORE BELOW IGNORE BELOW 
// const noVowelsPlease = (string) => {
//     let vowelArray = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]
//     let charArr = string.split("")
//     let noVowelArray = charArr.filter((value, index) => {
//         let isValue = true
//         return isValue !== vowelArray.includes(charArr[index])
//     })
// let noVowelString = noVowelArray.join("")
// return noVowelString