// Exercise 1 — Creating & Reading
// Create an object called movie with properties title, director, releaseYear, and rating. Print a
// sentence using a template literal: "Title (Year) directed by Director - Rating/10".

// const movie ={
//     title: "Om shanti Om",
//     director: "Ram",
//     releaseYear: 2026,
//     rating: 7/10
// }

// console.log(` ${movie.title} ${movie.releaseYear} directed by ${movie.director} - ${movie.rating}`);

// // Exercise 2 — Updating & Adding Properties
// // const laptop = { brand: "Dell", ram: 8 }; Update ram to 16 (an upgrade). Then add a new property
// // storage set to 512. Print the final object.

// const laptop = {
//     brand: "Dell", 
//     ram: 8
// };
// const updating = laptop["ram"] = 16
// laptop["storage set"] = 512
// console.log(updating); 
// console.log(laptop);

// Exercise 3 — Bracket Notation
// const survey = {}; (an empty object). Using bracket notation, add a property called "favorite color"
// (with the space) set to your favorite color. Print it back using bracket notation

// const survey = {};
// survey["favorite color"] = "Blue" ;
// // console.log(survey);

// console.log(survey['favorite color']);

// Exercise 4 — Dynamic Keys
// const scores = { math: 90, science: 85, english: 78 }; const subject = "science"; Print the score for
// whatever subject is currently stored in the subject variable, using bracket notation (not
// hard-coded)

const scores = {
    math: 90,
    science: 85,
    english: 78,
    }

// const subject = "science";
console.log(scores[90]);
console.log(scores['science']);
console.log(scores['english']);

// Exercise 5 — in and delete
// Using the laptop object from Exercise 2, check whether a "warranty" property exists. If it doesn't,
// delete the storage property instead. Print the final object either way.

