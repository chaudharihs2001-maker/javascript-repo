//  function calculator (a, b){
// // console.log(a + b)
// // }
// // calculator (5, 6);
// return 5 + 5 ;
//  };
//  console.log(calculator);


//  function test (number){
//     return (number * number)
//  }
//  console.log(test(5));

// function test () {
//     let result = 0
//     if (cond)
//     {
//         result = 10 
//     }
//     return 'test function'
//     console.log(test(1));
// }

// function greet (name){   // parameter
//     console.log(`my name is ${name}`);
// }
// greet('John'); //passing argument 
// greet('Doe');

function isEven (number){
    return number % 2 === 0;
}
console.log(isEven(10));

function isdecreasing (number){
if (!isEven(number))
    console.log(`{number} is odd`);
else {
    console.log(`{number} is even`);
}
}
Isdecreasing(10);
