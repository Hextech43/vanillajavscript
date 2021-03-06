const mongoose = require("mongoose");

const Mealschema = mongoose.Schema({
  food: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },
 
},
{
  timestamps: true,
}
);

module.exports = mongoose.model("food", Mealschema);