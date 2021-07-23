const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CharacterSchema = new Schema({
  characterName: {
    type: String,
    required: true,
  },
});

const Character = mongoose.model("Character", CharacterSchema);

module.exports = Character;
