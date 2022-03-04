let randomNumber = Math.floor(Math.random() * 10);

let z = document.getElementById("corrects")

let points = 0
$.ajax({
  url: "https://opentdb.com/api.php?amount=10",
  type: "Get",
  dataType: "json",

  success: (data) => {
    console.log(data);

    $("#quest").text(data.results[randomNumber].question);
    console.log(points)
    console.log(data.results[randomNumber])


    $("#send").click(()=>{
      let user_ans = $("#ans").val()
          let correct_ans = data.results[randomNumber].correct_answer



      if(user_ans != correct_ans ){
          points = 0
      $("#userans").text("incorrect answer", user_ans)
      }else{
         points +1
       $("#userans").text("correct", user_ans)
       
            }
      z.innerHTML += `correct answer ${correct_ans}`
    })


  
  },
  error: () => {
    console.log("cannot fetch data");
  }
});
