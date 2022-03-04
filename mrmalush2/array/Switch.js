// the switch works like the fi condition
// syntax
//switch (condition){
// case1{line of code}
// case2{}
// case3{}
// default
// }
// let output = document.getElementById("Sometext");
// let x = prompt("Enter a Noun");
// switch (x) {
//   case "girl":
//     output.innerHTML = "Hello girl";
//     break;

//   case "fish":
//     output.innerHTML = "Underworld";
//     break;
//   case "tree":
//     output.innerHTML = "forest";
//     break;
//     output.innerHTML = "birds";
//     break;
//   default:
//     output.innerHTML = "We are glad";
// }
// another way
// let output = document.getElementById("Sometext");
// let user = prompt("Enter a Noun");
// let html = "";
// switch (user) {
//   case "girl":
//     html += "Hello girl";
//     break;

//   case "fish":
//     html += "Underworld";
//     break;
//   case "tree":
//     html += "forest";
//     break;
//     html += "birds";
//     break;
//   default:
//     html += "We are glad";
// }
// output.innerHTML = html;

// loop alows to repaet something
// when writing a loop syntax we make use of this conditions
// initialize   condition increment
// TYPES OF LOOOP
// do while loop
// while loop
// for loop
// for each loop
// let x = 1;
// do {
//   console.log("hello");
//   x++;
// } while (x < 10);

// let allNumber = [5, 68, 79, 74, 22];
// let a = allNumber.map((item, i) => {
//   return item * 2;
// });
// console.log(a);

// let b = allNumber.map((item, i) => item * 2);
// console.log(b);
// let c = allNumber.map((item, i) => i);
// console.log(c);

// let input = 7
// let output1 = ++input + ++input + ++input ;
// let output2 = input++ + input++ + input++
// let output3 = input++ + ++input + input++
// console.log(output1 +"" + output2 + " " + output3)
let x = 0;
let d = document.getElementById("Sometext");
let user = prompt("put in your loop number");
do {
  x++;

  d.innerHTML += "I love coding";
  if (x % 2 === 0) {
    d.innerHTML += "the value of x = " + x + "<br> ";
  }

  console.log(x);
} while (x < user);
