// let [firstvalue, ,secondvalue]  = [3,"john", "edwin"]

// console.log(firstvalue)
// console.log(secondvalue)

// let motorCar = {
//     color:"red",
//     wheel:4,
//     doors:4,
//     allcolors :{
//         firstcolor:"white",
//         secondcolor:"pink"
//     }

// }
// console.log(motorCar.color)
// console.log(motorCar.wheel)
// console.log(motorCar.allcolors.firstcolor)

// let {color, doors, allcolors:{firstcolor}}= motorCar
// console.log(color)
// console.log(firstcolor)











// let codeName = [
//     {
//      name:"goodluck",
//      score:50,
//     },
//     {
//      name:"stella",
//     score:12,
//     },
//     {
//      name:"lucky",
//     score:5,
//     },
//     {
//     name:"judith",
//     score:30,
//     },
// ]

// let newScore = codeName.filter((item)=>{
//     return item.name === "stella"
// })

// console.log(newScore)

// let filNums = allNums.filter((item)=>{
//    return item % 2 !== 0
// })

// console.log(filNums)




// let allNums = [2,4,6,8,9,0,7]

// let allReduce = allNums.reduce((x, y)=>{
//     return x + y 
// },)
// console.log(allReduce)


// allNums.map((item, index)=>{
//    console.log(index)
// })

// for (let x=0 ; x < allNums.length; x++){
//       console.log(allNums[x] * 2)
// }

function alReduce (a,b,c,d,e){
    let newvalues = Array.from(arguments)
    let hhh = newvalues.filter((item)=>{
        return item % 2 === 0
    })
    // let newww = newvalues.reduce((x, y)=>{
    //    return x + y
    // })
    return hhh
}
              
console.log (alReduce (9,6,3,9,2))

const newRead=(...args)=>{
    let jjj = args.filter((item)=>{
        return item  >  7
    })        
   return jjj
}
console.log(newRead(4,6,9,5,4.12,7,5,0,8,4,45))














