// $("#buton").click(()=>{
//     let contest = $("#iput").val()
//     console.log(contest)
// })

$("#buton").hide()
$("#iput").keyup(()=>{
   { $("#iput").val() === ""
    ? $("#buton").hide()
    : $("#buton").show()
   }

    

})
$("#buton").click(()=>{
    let contest = $("#iput").val()
    console.log(contest)
})

$("#celect").change(()=>{
    let item = $("#celect option:selected").val()
    console.log(item)

})

$("input[name='gender']").change(()=>{
    let radioIn = $("input[name='gender']:checked").val()
    console.log(radioIn)
})

$("#tglbtn").click(()=>{
$("#tgl").toggle()
})
$("#effect").click(()=>{
    $("#effect").hide(200).show(3000)
})

$("#changer").click(()=>{
    $("#box").animate(
        {
            width:"+=100px",
            height:"+=100px",
            marginLeft:"+=300px",
            backgroundColor:"blue"
        },3000,
        ()=>{
            $("#box").hide(4000).show(2000)
            $("#tgl").hide(4000).show(1000)
        }
    )
})