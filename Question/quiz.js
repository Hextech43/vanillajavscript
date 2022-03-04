$.ajax({
    url:"https://opentdb.com/api.php?amount=10",
    type:"Get",
    dataType:"json",

    success :(data)=>{
        console.log(data)
        
    }
})