// For loop
// For(initial expression, condition, increment)
// {
//   statement:all conditions will be written there
// your console will be here
// }

// let y = document.getElementById("text");

// for (let a = 0; a <= 10; a++) {
//   console.log(a);
//   y.innerHTML += "the value of a =" + a + "<br>";
// }
// let z = document.getElementsByClassName("element");

// for (let b = 0; b < z.length; b++) {
//   z[b].style.color = "orange";
//   z[b].style.background = "purple";
//   z[b].style.height = "100px";
// }
//  break statement is used to stop the loop at a particular value
// continue statement is used to skip a particular block of code in a loop

// for (let w = 0; w <= 10; w++) {
//   if (w === 3) {
//     continue;
//   }
//   console.log(w);
// }

// let sales = [
//   {
//     name: "Romanus",
//     amount: 40,
//     Refund: null,
//   },
//   { name: "Blessing", amount: 100, Refund: null },
//   { name: "Gideon", amount: 150, Refund: true },
// ];

// let a = sales.map((item) => {
//   return item.Refund;
// });
// console.log(a);
// console.log(sales);
// for (let t = 0; t < sales.length; t++) {
//   let show = sales[t];
//   if (show.Refund) {
//     console.log(show);
//   }
// }

// let ade = document.getElementById("text");
// for (let b = 0; b <= 69; b++) {
//   if (b === 12 || b === 59) {
//     continue;
//   }
//   console.log(b);
//   ade.innerHTML += "The value of b is " + b + "<br>";
// }

// let ade = document.getElementById("text");
// let ask = prompt("Number of Banana");
// let calories = 30;
// let total = 0;
// for (let t = 1; t <= ask; t++) {
//   total += calories;
//   ade.innerHTML += `you ate ${t} banana and it contains ${
//     calories * t
//   } calories<br>`;
// }
// ade.innerHTML = `The total number of Calories = ${total}`;

// While loop
// let i =0
// while (condition){
// incremental count
// statement
// }
let i = 0;
while (i <= 10) {
  if (i % 2 === 0) {
    console.log(i);
  }
  i++;
}

let i = 0;
while (!(i <= 10)) {
  if (i % 2 === 0) {
    console.log(i);
  }
  i++;
}
