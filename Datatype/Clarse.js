
class Books  {

    constructor(title, author, year){
this.title=  title;
this.author= author
this.year= year
 }
    
getSummary (){
    return `${this.title} was written by ${this.author} in the year ${this.year}`
    
    }
}


const Book1 = new Books("Together for Life", "gideon", "2021")

console.log(Book1)
console.log(Book1.getSummary())