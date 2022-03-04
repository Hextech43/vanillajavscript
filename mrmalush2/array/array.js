let arr =["ayo","Ngozi", "mummy","chioma"]
console.log(arr)
// arr[0]="ola"
// console.log(arr.pop())
// console.log(arr)
// console.log(arr.push("obi"))
// console.log(arr)
// console.log(arr.shift())
// console.log(arr)
// console.log(arr.unshift( "shewa"))
// console.log(arr)
// console.log(arr.sort())
// console.log(arr.reverse())
// console.log(arr.splice(0,2))
 let a= Math.floor(Math.random()*arr.length)
 let val= arr[a]
// document.write(val)
let userIput =Number(prompt("What is the position of "+val))
let answer=(a===userIput-1)? "correct":"incorrect"
alert(answer)
