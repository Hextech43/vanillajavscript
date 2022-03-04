let car={
    wheel:"4",
     color:"black",
     seat:4, 
     type:"Lexus"
}
car.color="red"
// car["color"]="blue"
console.log(car)
console.log(car.color)

let Person ={
    Name:"Esther" ,
    secondname:"toyin",
    age :"30",
     complexion:"Dark",
     skills:["Javasript","react","node"],
    fullname :function(){
         return this.Name+" " + this.secondname
     }
}
console.log(Person.fullname())
Person.skills[1]="html"
console.log(Person.skills[1])
let Person1={
    "obj1":Person,
    "obj2":{
        name:"tomi",age:20, hair:"brown",
    }
}
console.log(Person1.obj1.skills[2])
console.log(Person1)
