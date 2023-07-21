// A. ES6 function returns

// Instructions:

// 1. Create a JavaScript program that explores the usage of ES6 function returns.
// 2. Implement the provided code snippets and answer the questions related to each snippet.
// 3. Ensure that the program runs without errors and provides the correct output.

// Requirements:

// 1.. Write your answers to the questions as comments in the code.
// Snippet 1 :

const add = (a, b) => {
  return a + b;
};
const result1 = add(3, 4);
console.log(result1);

// // Question 1: What is the value of the result1?
// ans: value of the result1 = 7

//  Snippet 2 :
const greet = (name) => {
  return { name };
};

const message = greet("Alice");
console.log(message);

// Question 2: What is the value of the message?
// ans : value of the message = { name: 'Alice' }

// Snippet 3 :
const calculateArea = (radius) => {
  const PI = 3.14159;

  const area = PI * radius * radius;

  return area;
};

const area = calculateArea(5);
console.log(area);

// Question 3: What is the value of area?
// ans=78.53975

// Snippet 4 :

const multiply = (a, b) => a * b;

const result2 = multiply(2, 5);
console.log(result2);

// // Question 4: What is the value of the result2?
// ans : value of the result2 = 10

// Snippet 5 :

const isEven = (num) => {
  if (num % 2 === 0) {
    return true;
  } else {
    return false;
  }
};

const evenNumber = isEven(8);
console.log(evenNumber);

// Question 5: What is the value of evenNumber?
// ans : value of evenNumber = true

// Snippet 6 :

const sayHello = () => {
  return "Hello!";
};

const hello = sayHello();
console.log(hello);

// Question 6: What is the value of hello?
// ans :  value of hello = Hello!

// Snippet 7 :

const calculateSquare = (num) => num * num;

const squaredNumber = calculateSquare(4);
console.log(squaredNumber);

// Question 7: What is the value of squaredNumber?
// ans : value of squaredNumber = 16

// Snippet 8 :

const divide = (a, b) => {
  if (b === 0) {
    return "Error: Division by zero.";
  }
  return a / b;
};

const result3 = divide(10, 2);

const result4 = divide(8, 0);

console.log(result3);
console.log(result4);

// // Question 8: What are the values of result3 and result4?
// ans :  values of result3 = 5
//   result4 = Error: Division by zero.
var x = 29;
