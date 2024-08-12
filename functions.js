// sayHello('Class of 2024-35-RTT')
// sayHello('Hello Optimus Prime')
// sayHello('Hello Jason')
// sayHello('Nocholas')

// function sayHello(name) {
//     console.log('Hello ' + name + '!');
// }



// function add(a, b) {
//     console.log(a + b);
// } add(27, 13)


// function divide(a, b) {
//     console.log(a / b);
// } divide(127, 63)


//  add = (a, b) => console.log(a + b)
// add(114, 297);


// function areBothEven(n1, n2) {
//     console.log(!(n1 % 2) && !(n2 % 2));
// }

// areBothEven(22, 10)
// areBothEven(2.965, 3.087)


// let height = 40
// let width = 16

// function computeArea(height, width) {
//     console.log( height * width);
// }   return area
// computeArea(width, height)



//can js take any number of arguments in a function?
// function bottleCap(bottle, cap='red cap'){
//     return `bottle is equal to: ${bottle}, and cap is equal to: ${cap}`
// }
// console.log(bottleCap('green bottle', 'white cap'));
//create a function that gives us an object that pushes skills into an array
// let learner1 = getDevObject('Maria', 'HTML', 'CSS', 'JavaScript', 'jQuery');
// let learner2 = getDevObject('Wendy', 'HTML', 'CSS', 'JavaScript', 'jQuery');
// let learner3 = getDevObject('Colton', 'Drinking coffee', 'Making witty comments if given enough coffee');
// function getDevObject(name) {
//     let skills = [];
//     for (let i = 1; i < arguments.length; i++) {
//       skills.push(arguments[i]);
//     }
//     return {
//       devName: name,
//       jobSkills: skills
//     };
// }
// console.log(learner1);
// console.log(learner2);
// function getDevObject(name, ...skills){
//     return {
//         devName: name,
//         jobSkills: skills
//     }
// }
// console.log(learner3);
//annonymous functions example
// let colorsList = ['red', 'green', 'blue'];
// colorsList.forEach(function(color) {
//   console.log(color);
// });
//iife example
// (function minus(a,b) {
//     console.log(a-b);
// })(5,2)
// minus(5,2)
// function hoistExample() {
//  console.log(x);  // outputs undefined, not a ReferenceError
//  const x = 25;
//  console.log(x);  // outputs 25
// }
// hoistExample()
// let x = 5;
// {
//   console.log(x);
//   let x = 6;
// }



//Hoisting Functions

// const val = { data: [...], type: ..., dateTime: ..., ... };
// const transformedData = populateValue(val);
// const response = sendRequest(data, {
//   someValue: ...,
//   otherConfigOption: ...,
// }, {
//   moreData: ...
// });
// const success = processResponse(response);

// console.log(success);

// function populateValue(val) {
//   /**
//    * Do a bunch of logic in here.
//    */
// }

// function sendRequest(data, config, ...) {
//   /**
//    * More function logic.
//    */
// }

// function processResponse(res) {
//   /**
//    * Dozens of lines of code.
//    */
// }



// //Nesting Functions

// function openNewAccount(name, openingBalance) {
//   let acctNum = generateAcctNum();

//   // createAccount is a function available outside this function
//   let acct = createAccount(acctNum, openingBalance);
//   return acct;

//   // helper function that provides a unique account number
//   function generateAcctNum() {
//     return Date.now();  // super amazing algorithm :)
//   }
// }

// let myVar = 20;

// function passBy(myVar) {
//     myVar = myVar * 10;
//     return myVar;
// }
// console.log(myVar);
// console.log(passBy(myVar));
// console.log(myVar);

//array reference*

// let numArray = [10, 20, 0, -10, 15, 28, -1000, 42, 7];

// function returnEven(array) {
//     for (let i in array) {
//         if (array[i] % 2 !== 0) {
//             array.splice(i, 1);
//         }
//     }

//     return array;
// }

// console.log(numArray);                  // (9) [10, 20, 0, -10, 15, 28, -1000, 42, 7]
// let newArray = returnEven(numArray);
// console.log(newArray);                  // (7) [10, 20, 0, -10, 28, -1000, 42]
// console.log(numArray);                  // (7) [10, 20, 0, -10, 28, -1000, 42]

//updated array reference that does not tamper with original array data by pushing*

// let numArray = [10, 20, 0, -10, 15, 28, -1000, 42, 7];

// function returnEven(array) {
//     let newArray = [];

//     array.forEach((element) => {
//         if (element % 2 == 0) {
//             newArray.push(element);
//         }
//     });

//     return newArray;
// }

// console.log(numArray);                  // (9) [10, 20, 0, -10, 15, 28, -1000, 42, 7]
// let newArray = returnEven(numArray);
// console.log(newArray);                  // (7) [10, 20, 0, -10, 28, -1000, 42]
// console.log(numArray);                  // (9) [10, 20, 0, -10, 15, 28, -1000, 42, 7]

//deep Copies*

// const myPerson = {
//   name: {
//       first: 'Timmy',
//       last: 'Timtim'
//   },
//   age: 30,
//   location: {
//       city: 'New York',
//       state: 'New York',
//       zip: 10001
//   }
// }

// //Use of JSON for strings**
// function copyPerson(oldPerson) {
//   let jsonString = JSON.stringify(oldPerson);

//   return JSON.parse(jsonString);
// }

// const myPersonCopy = copyPerson(myPerson);

//Without JSON**
// function copyPerson(oldPerson) {
//   const newPerson = {
//       name: {},
//       age: null,
//       location: {}
//   };

//   newPerson.name.first = oldPerson.name.first;
//   newPerson.name.last = oldPerson.name.last;
//   newPerson.age = oldPerson.age;
//   newPerson.location.city = oldPerson.location.city;
//   newPerson.location.state = oldPerson.location.state;
//   newPerson.location.zip = oldPerson.location.zip;

//   return newPerson;
// }

//const myPersonCopy = copyPerson(myPerson);
// console.log(myPersonCopy);
// console.log(myPerson);

//SAME OUTPUT**


//Alab 308.5.1 Practice in class**

//Take an array of numbers and return the sum*
function sumArray(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++){
    sum += numbers[i];
  }
  return sum;
}
let numbers = [1, 2, 3, 4, 5];
console.log(sumArray(numbers));

//Take an array of numbers and return the average.**
function averageArray(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++){
    sum += numbers[i];
  }
  return sum / numbers.length;
}
console.log(averageArray(numbers));


//Take an array of strings and return the longest string.***
function longestString(strings) {
  let longest = '';
  for (let i = 0; i < strings.length; i++){
    if (strings[i].length > longest.length) {
      longest = strings[i];
    }
  }
  return longest;
}
let strings = ['What', 'Am', 'I', 'Doing'];
console.log(longestString(strings));

//Take an array of strings, and a number and return an array of the strings that are longer than the given number.****

function stringsLongerThan(strings, length) {
  let result = [];
  for (let i = 0; i < strings.length; i++) {
    if (strings[i].length > length) {
      result.push(strings[i]);
    }
  }
  return result;
}
console.log(stringsLongerThan(['Say', 'I', 'Love', 'NY Pizza'], 3));

//Take a number, n, and print every number between 1 and n without using loops. Use recursion.*****

function printNumbers(n) {
  if (n < 1) 
  {
    return;
  }
  printNumbers(n - 1);
  console.log(n);
}
printNumbers(5);