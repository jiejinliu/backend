// Variable
// age = 15;
// const first_name = "Dixant";

// Printing
// console.log("Hello " + first_name + " you are " + age + " years old");
// console.log(`Hello ${first_name} you are ${age} years old`);

// Conditional statements
// if (age < 18) {
//   console.log("You are not eligible to vote");
// } else {
//   console.log("You are eligible to vote");
// }

// Loops
// total_sum = 0;
// for (i = 0; i < 80; i++) {
//   total_sum = total_sum + i;
// }
// console.log(total_sum);

// users = ["Dixant", "Jon", "Arya", "Sansa", "Bran"];
// console.log(users[3]);

// users.forEach((element) => {
//   console.log(element);
// });

// Dictionaries
// users = {
//   first_name: "Dixant",
//   last_name: "Mittal",
//   age: 15,
// };

// console.log(users["age"]);
// console.log(users.age);

// // Functions
// function add(a, b) {
//   return a + b;
// }

// // anonymous function
// add = function (a, b) {
//   return a + b;
// };

// // arrow function
// add = (a, b) => {
//   return a + b;
// };

// console.log(add(5, 6));
// console.log(add(10, 20));

// Callback functions
function prettyPrint(a, b, callback) {
  result = callback(a, b);
  console.log(
    `The result of performing callback on ${a} and ${b} is ${result}`
  );
}

prettyPrint(5, 6, function (a, b) {
  return a + b;
});

prettyPrint(5, 6, (a, b) => {
  return a * b;
});
