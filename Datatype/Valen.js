 const person = {
     name:"Christopher",
     age:20,
     marks:{
         javascript: 30,
         CSS: 40,
         reactjs:10,
         nodejs:50
     },
     health:{
         height:200,
         color: "black"
     },
     greet :function (){
         return `My name is ${this.name} `
     }, 
     score : function(){
         return `I scored ${this.marks.nodejs} in javascript`
     }
 }

 console.log(person["marks"]["javascript"])
let fry = delete person.marks.javascript
 let newMark = person["marks"]["reactnative"]=  100

 console.log(person)
 console.log(person.greet()+ person.score())

 for (const key in person ) console.log(key)



 const Book1 = {
     title: "Together for Life",
     author :"Esther",
     year :"2021",

     getSummary : function () {
         return `${this.title} was written by ${this.author} in the year ${this.year}`
     }
     

 }


 const Book2 = {
    title: "How To Sell To Nigerian",
    author :"Judith",
    year :"1994",

    getSummary : function () {
        return `${this.title} was written by ${this.author} in the year ${this.year}`
    }
    

}


console.log(Book1.getSummary())
 

 
