const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

mongoose
  .connect("mongodb://myUserAdmin:password@localhost:27017/?authSource=admin", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to DB"))
  .catch(console.error);

const Character = require("./models/Character");

app.get("/characters", async (req, res) => {
  const characters = await Character.find();
  res.json(characters);
});

app.get("/characters/:id", async (req, res) => {
  const character = await Character.findById(req.params.id);
  res.json(character);
});

app.post("/character/new", (req, res) => {
  const character = new Character({
    characterName: req.body.characterName,
  });

  character.save();

  res.json(character);
});

app.listen(3001, () => console.log("Server started on port 3001."));
