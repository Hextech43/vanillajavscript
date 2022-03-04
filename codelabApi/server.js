require("dotenv").config()
const express = require("express");
const port = process.env.PORT || 6055;
const mongoose = require("mongoose");
const cors = require("cors")
const Filled = require("./Router");
const MONGODB_URL =
"mongodb+srv://cn9SBjwYqfgM9R1K:cn9SBjwYqfgM9R1K@hextech.b4abe.mongodb.net/HEROKUDB?retryWrites=true&w=majority";
const app = express();


mongoose
  .connect(MONGODB_URL, {
    useNewUrlParser: true
  })
  .then(() => {
    console.log("Food Database connected");
  });

  app.get("/" , (req, res)=>{
      res.send("Landing Page of My Food API")
  })


//   app.use(express.static("./uploads"));
// app.get("/upload", express.static("./uploads"));
app.use(express.json());


app.use("/food/api", Filled);
app.use(cors())

app.listen(port, () => {
  console.log(`server is ready to eat at port ${port}`);
});
