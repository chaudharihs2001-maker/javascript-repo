// Exercise 1 — Creating & Reading
// Create an array called colors with five colors of your choice. Print the third color using its index.
// Print the array's length. Print the last color without hard-coding its index number.

// const colors = ["red", "pick", "black", "yellow", "white"];
// const indexxx = colors.at(3);
// console.log(indexxx);
// // console.log(indexxx.);

// Exercise 2 — Changing a Value
// const days = ["Mon", "Tue", "Wedday", "Thu", "Fri"]; There's a typo at index 2. Fix it in place (don't
// recreate the array) so it reads "Wed", and print the corrected array.


// const days = ["Mon", "Tue", "Wedday", "Thu", "Fri"];
// days[2] = 'Wed'; //replace direct bracket notation
// console.log(days);

// const days = ["Mon", "Tue", "Wedday", "Thu", "Fri"];
// const updating = days.with(2, 'Wed');
// console.log(updating);

// Exercise 3 — push & pop
// Start with const stack = [1, 2, 3]; Push 4 and then 5 onto it. Then pop twice, printing what each
// pop() call returns. Print the final array

// const stack = [1, 2, 3];
// stack.push(4, 5);
// const poping = stack.pop();
// const twicepop = stack.pop();
// console.log(poping);
// console.log(twicepop);
// console.log(stack);

// Exercise 4 — unshift & shift
// Start with const line = ["Person A", "Person B"]; A new person, "Person C", joins the front of the
// line. Then the front person is served and leaves. Print the queue after both steps, and print who
// got served.

// const line = ["Person A", "Person B"];
// line.unshift("Person C");
// const leaves = line.shift();
// console.log(line);
// console.log(leaves);

// Exercise 5 — indexOf & includes
// const toppings = ["cheese", "onion", "mushroom", "olive"]; Find the index of "mushroom". Check
// whether "pepper" is in the list. Check whether "cheese" is in the list.

// const toppings = ["cheese", "onion", "mushroom", "olive"];

// const indexfinding = toppings.indexOf("mushroom");
// const finding = toppings.includes("pepper");
// const findin1 = toppings.includes("cheese");
// console.log(indexfinding);
// console.log(toppings);
// console.log(finding);
// console.log(findin1);

// Exercise 6 — slice vs splice
// const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"]; Using slice, create a new array with just
// the last two months, without changing the original. Then use splice to remove "Mar" and "Apr"
// entirely from the original array (no replacement). Print both results
// const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];
// const newarray = months.slice(-2);
// const remove = months.splice(2, 2);

// console.log(newarray);
// console.log(remove);


// Exercise 7 — Looping & Totals
// const temperatures = [30, 32, 28, 35, 31]; Using any loop style you like, print each temperature
// with its day number (Day 1, Day 2, ...). Then calculate and print the highest temperature by
// comparing values inside the loop (hint: keep a variable like let highest = temperatures[0]; and
// update it with an if statement inside the loop)

// const temperatures = [30, 32, 28, 35, 31];

// for (i=0; i<temperatures; i++);
// {
//     // console.log(temperatures[i]);
//     console.log(`Day 1 ${i}: Day 2 ${temperatures}: Day 3 $${temperatures}: Day 4${temperatures}`);
// }

// const temperatures = [30, 32, 28, 35, 31];

// for(let num of temperatures){
//     console.log(num)   
// };





