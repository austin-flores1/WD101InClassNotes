/*
- Also called Fat Arrow Functions
-They are NOT (function) declarations
-Do NOT get hoisted
-Two types:
    - Concise Body --> Return is automatic
    -Block Body --> Return is NOT automatic
- A concise way to write function expressions
*/

//CONCISE BODY
//speak('dog';)<-- Example to show no hoisting
let speak = (name) => console.log(`The ${name} goes woof!`);

speak('dog');

let firstName = 'Peter';
let lastName = 'Parker';

let concatName = (first, last) => `${first} ${last}`;
let fullName = concatName (firstName, lastName);
console.log(fullName);


//BLOCK BOD
// Use {curly bros}
let speakAgain = name => {
    console.log(`The ${name} goes woof! - Line 27 console.log`);
}

speakAgain('dog');

let concat = (first, last) =>{
    return `${first} ${last}`
}

let newFullName = concat(firstName,lastName);
console.log(newFullName);

let x = 27;
let y = 47;

let sum = (num1, num2) => {
  return num1+ num2
}

let returnedValue = sum(x,y);
console.log(returnedValue);


function fizzBuzz(fb) {
    if (fb % 5 == 0 && fb % 3 ==0){
        return"FizzBuzz";
    }
else if (fb % 3 == 0){
    return "Fizz";
}
else if(fb % 5 == 0){
    return "Buzz";
}
else return " Not divisible by 3 or 5"
}

