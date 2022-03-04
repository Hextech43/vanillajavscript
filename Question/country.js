let choose = Math.floor(Math.random() * 250);
y= document.getElementById("sel")


$.ajax({
    url:"https://restcountries.eu/rest/v2/all",
    type: "Get",
    dataType: "json",

    success:(data)=>{
        // console.log(data[choose].name)
        // $("#opta").text(data[choose].name)

// let a = data.map((item) => {
//   return item.name;
// });
// console.log(a);
// console.log(data);
for (let t = 0; t < data.length; t++) {
  let show = data[t].name;
  // if (show.name) {
  //   console.log(show.name);

  //  y.innerHTML +=show.name
  // }}
    console.log(show);
        
        y.innerHTML += `<option id="opta">${show}</option>`
}
}
})