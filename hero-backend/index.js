const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.json());

mongoose.connect("mongodb://localhost:27017/heroes", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const heroSchema = new mongoose.Schema({
  name: String,
  description: String,
  imageUrl: String,
});

const Hero = mongoose.model("Hero", heroSchema);

app.post("/api/heroes", async (req, res) => {
  try {
    const hero = new Hero(req.body);
    await hero.save();
    res.status(201).send(hero);
  } catch (error) {
    res.status(400).send(error);
  }
});

app.get("/api/heroes", async (req, res) => {
  try {
    const heroes = await Hero.find();
    res.status(200).send(heroes);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
