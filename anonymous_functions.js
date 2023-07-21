// B. Anonymous functions

// Instructions:

// 1. Create a new JavaScript file named `anonymous_functions.js`.
// 2. Write JavaScript code to solve the following tasks using anonymous functions.
// 3. Use anonymous functions where specified.
// 4. Test your code by running the file in a web browser or a JavaScript runtime environment.

// Tasks:
// 1. Create an anonymous function that takes two numbers as parameters and returns their sum.

//    Example Input: 3, 5
//    Example Output: 8

// solution of qs 1 :
const add = (a, b) => {

  return a + b;

};

const result = add(3, 5);
console.log(result);
 

// 2. Create an array of numbers and use the `map()` method with an anonymous function to square each number in the array.

//    Example Input: [1, 2, 3, 4, 5]
//    Example Output: [1, 4, 9, 16, 25]

//solution of qs 2 :
const arr = [1, 2, 3, 4, 5];

const getSquareArr = arr.map((item) => {
    return item*item
})
   
console.log(getSquareArr);