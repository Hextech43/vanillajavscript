const express = require("express");
const model = require("./Model");
const route = express.Router();
const multer = require("multer");
const path = require("path");
const cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: "dfyxucfa8",
  api_key: "872166747173331",
  api_secret: "OdY5rt2ZUq_MozR3a6WMpJ0TEOY",
});

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({
  storage: storage,
});

route.get("/", async (req, res) => {
  try {
    const newFood = await model.find();
    res.status(200).json({
      mgs: "All foods gotten",
      data: newFood,
    });
  } catch (error) {
    res.status(400).send({
      mgs: "error",
      data: error,
    });
  }
});

route.post("/", upload.single("image"), async (req, res) => {
  const show = await cloudinary.uploader.upload(req.file.path);

  console.log(show);
  const newFood =  new model({
    food: req.body.food,
    description: req.body.description,
    image: show.secure_url,
    price: req.body.price
  });
  const newMan = await newFood.save();

  try {
    res.status(200).json({
      mgs: "A food created",
      data: newFood,
    });
  } catch (error) {
    res.status(400).send({
      mgs: "error",
      data: error,
    });
  }
});

route.patch("/:id", async (req, res) => {
  try {
    const newFood = await model.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json({
      mgs: "A food updated",
      data: newFood,
    });
  } catch (error) {
    res.status(400).send({
      mgs: "error",
      data: error,
    });
  }
});

route.get("/:id", async (req, res) => {
  try {
    const newFood = await model.findById(req.params.id);
    res.status(200).json({
      mgs: "A food gotten",
      data: newFood,
    });
  } catch (error) {
    res.status(400).send({
      mgs: "error",
      data: error,
    });
  }
});

route.delete("/:id", async (req, res) => {
  try {
    const newFood = await model.findByIdAndDelete(req.params.id, req.body);
    res.status(200).json({
      mgs: "A food deleted",
      data: newFood,
    });
  } catch (error) {
    res.status(400).send({
      mgs: "error",
      data: error,
    });
  }
});

module.exports = route;
