const mongoose = require("mongoose");

const heroSchema = new mongoose.Schema({
  name: String,
  description: String,
  imageUrl: String,
});

const Hero = mongoose.model("Hero", heroSchema);

module.exports = Hero;
