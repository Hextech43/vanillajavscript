// let y = document.getElementById("text");

// const myForm = (a, b, c) => {
//   let d = a + b + c;
//   console.log(d);
//   return d;
// };
// y.innerHTML = myForm(4, 5, 6);

// username = "gideon";
// password = "123456";

// let y = document.getElementById("text");

// const myFunc2 = () => {
//   let user = prompt("Enter your Name");
//   let pass = prompt("Enter your PassWord");

//   if (username !== user || password !== pass) {
//     alert("You have entered the wrong Input");
//   } else {
//     y.innerHTML += "Welcome to the Homescreen";
//   }
// };

// let y = document.getElementById("text");

// const outSidefunc = () => {
//   let b = 2000;
//   const insideFunc = () => {
//     b++;
//     let d = 900;
//     let e = 700;
//     return b;
//   };
//   console.log(insideFunc());

//   const anotherFunc = () => {
//     b++;
//     let d = 900;
//     let e = 700;
//     return b;
//   };
//   console.log(anotherFunc());
// };
// outSidefunc();

let y = document.getElementById("text");
let num1 = document.getElementById("firstinput");

let shoppingList = [];

const addItemFunc = () => {
  let adding = firstinput.value;
  shoppingList.push(adding);
  localStorage.setItem("Esther's_Storage", shoppingList);
  const showInput = () => {
    let dataValue = "";
    for (let i = 0; i < shoppingList.length; i++) {
      dataValue += i + 1 + "." + shoppingList[i] + "<br>";
    }
    y.innerHTML = dataValue;
  };
  showInput();
};
