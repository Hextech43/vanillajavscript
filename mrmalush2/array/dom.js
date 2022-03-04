// console.dir(document)
// let b = document.getElementById("Somtext")
// b.innerHTML="i am back"
// let list=["Ada","Tope", "Tiwa","Teniola"]
// let user = document.getElementById("somtext")
// let useInput = prompt ("Name please")
// user.innerHTML= list.indexOf(useInput)>-1? document.write (`welcome ${useInput}`):document.write(" Access denied")

// let names=["giddy","grace","glory","gladies"]

// let useInput =prompt("Name Please")
// let x=names.indexOf(useInput)> -1 ? true:false
// let output = document.getElementById("Sometext")
// output.innerHTML = x ? "welcome" :"denied"
// output.innerHTML += " " + useInput

// finish it
// let useInput= prompt("Time Please")
// let output=document.getElementById("Sometext")
// if (useInput>=0 && useInput<6){
//     output.innerHTML="happy new day"}
//     else if (useInput>=6 && useInput<12){
//         output.innerHTML="Good morning"
//     }
//     else {
//         output.innerHTML="invalid input"
//     }
// Assignment
// Use your if condition to ask for the name of the user
// and after clicking ok their age will be asked, if the age is below 18
// it will bedenied and if above 18
let names = ["giddy", "grace", "glory", "gladies"];
let userInput = prompt("Name Please");
let output = document.getElementById("Sometext");

if (names.indexOf(userInput) > -1) {
  alert("welcome" + userInput);

  let age = Number(prompt("Age Please"));
  if (age > 17) {
    output.innerHTML = "welcome" + userInput + " " + "Access granted";
  } else {
    alert("Acess Denied");
  }
} else {
  alert("denied");
}
