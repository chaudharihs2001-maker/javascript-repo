/*Practice Exercises
For after today's session. Work through these independently using the browser console or a
Node.js file. They cover exactly today's four topics — nothing more. We will review these together
at the start of tomorrow's session before moving ahead.*/

// Exercise 1 — Variables
// Declare three variables for a book: title (string), price (number), and inStock (boolean). Print all
// three in one console.log statement.
const title = "The power of mind";
 const price = 200;
 const inStock = true;
 const book ={
     title: 'the power of mind',
     price: 200,
     instock: true 
 };
    // Template Literals `  ` ${ } allow you to insert the value inside {} no need " +  + "
    // also make it easier to write sting accross multiple line.
    console.log(`title:, ${title}, price:, ${price}, instock:, ${inStock}`);

// Exercise 2 — const vs let
// Declare a const called birthYear. Try to reassign it and observe the error in your console. Then
// declare the same information using let instead, reassign it successfully, and print both values
// before and after.

// const birthYear = 2001;
// console.log(`birthyear:, ${birthYear}`);
const birthYearConst = 2001;
console.log("const before:", birthYearConst);

try {
  birthYearConst = 2002;
} catch (error) {
  console.log("const reassignment error:", error.message);
}

let birthYear = 2001;
console.log("let before:", birthYear);

birthYear = 2002;
console.log("let after:", birthYear);