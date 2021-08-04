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
    useFindAndModify: false,
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

app.put("/character/:id", async (req, res) => {
  let updates = {};
  console.log(req.body);
  if (req.body.characterName) updates.characterName = req.body.characterName;
  if (req.body.background) updates.background = req.body.background;
  if (req.body.playerName) updates.playerName = req.body.playerName;
  if (req.body.race) updates.race = req.body.race;
  if (req.body.alignment) updates.alignment = req.body.alignment;
  if (req.body.experiencePoints)
    updates.experiencePoints = req.body.experiencePoints;
  if (req.body.characterClass) updates.characterClass = req.body.characterClass;
  if (req.body.level) updates.level = req.body.level;
  if (req.body.inspiration) updates.inspiration = req.body.inspiration;
  if (req.body.strength) updates.strength = req.body.strength;
  if (req.body.dexterity) updates.dexterity = req.body.dexterity;
  if (req.body.constitution) updates.constitution = req.body.constitution;
  if (req.body.intelligence) updates.intelligence = req.body.intelligence;
  if (req.body.wisdom) updates.wisdom = req.body.wisdom;
  if (req.body.charisma) updates.charisma = req.body.charisma;

  if (req.body.strengthSavingThrowProficient !== undefined)
    updates.strengthSavingThrowProficient =
      req.body.strengthSavingThrowProficient;
  if (req.body.dexteritySavingThrowProficient !== undefined)
    updates.dexteritySavingThrowProficient =
      req.body.dexteritySavingThrowProficient;
  if (req.body.constitutionSavingThrowProficient !== undefined)
    updates.constitutionSavingThrowProficient =
      req.body.constitutionSavingThrowProficient;
  if (req.body.intelligenceSavingThrowProficient !== undefined)
    updates.intelligenceSavingThrowProficient =
      req.body.intelligenceSavingThrowProficient;
  if (req.body.wisdomSavingThrowProficient !== undefined)
    updates.wisdomSavingThrowProficient = req.body.wisdomSavingThrowProficient;
  if (req.body.charismaSavingThrowProficient !== undefined)
    updates.charismaSavingThrowProficient =
      req.body.charismaSavingThrowProficient;
  if (req.body.athleticsSkill) updates.athleticsSkill = req.body.athleticsSkill;
  if (req.body.acrobaticsSkill)
    updates.acrobaticsSkill = req.body.acrobaticsSkill;
  if (req.body.sleightOfHandSkill)
    updates.sleightOfHandSkill = req.body.sleightOfHandSkill;
  if (req.body.stealthSkill) updates.stealthSkill = req.body.stealthSkill;
  if (req.body.arcanaSkill) updates.arcanaSkill = req.body.arcanaSkill;
  if (req.body.historySkill) updates.historySkill = req.body.historySkill;
  if (req.body.investigationSkill)
    updates.investigationSkill = req.body.investigationSkill;
  if (req.body.natureSkill) updates.natureSkill = req.body.natureSkill;
  if (req.body.religionSkill) updates.religionSkill = req.body.religionSkill;
  if (req.body.animalHandlingSkill)
    updates.animalHandlingSkill = req.body.animalHandlingSkill;
  if (req.body.insightSkill) updates.insightSkill = req.body.insightSkill;
  if (req.body.medicineSkill) updates.medicineSkill = req.body.medicineSkill;
  if (req.body.perceptionSkill)
    updates.perceptionSkill = req.body.perceptionSkill;
  if (req.body.survivalSkill) updates.survivalSkill = req.body.survivalSkill;
  if (req.body.deceptionSkill) updates.deceptionSkill = req.body.deceptionSkill;
  if (req.body.intimidationSkill)
    updates.intimidationSkill = req.body.intimidationSkill;
  if (req.body.performanceSkill)
    updates.performanceSkill = req.body.performanceSkill;
  if (req.body.persuasionSkill)
    updates.persuasionSkill = req.body.persuasionSkill;
  if (req.body.racialTraits) updates.racialTraits = req.body.racialTraits;
  if (req.body.lightArmourProficient !== undefined)
    updates.lightArmourProficient = req.body.lightArmourProficient;
  if (req.body.mediumArmourProficient !== undefined)
    updates.mediumArmourProficient = req.body.mediumArmourProficient;
  if (req.body.heavyArmourProficient !== undefined)
    updates.heavyArmourProficient = req.body.heavyArmourProficient;
  if (req.body.simpleWeaponsProficient !== undefined)
    updates.simpleWeaponsProficient = req.body.simpleWeaponsProficient;
  if (req.body.martialWeaponsProficient !== undefined)
    updates.martialWeaponsProficient = req.body.martialWeaponsProficient;
  if (req.body.shieldsProficient !== undefined)
    updates.shieldsProficient = req.body.shieldsProficient;
  if (req.body.languages) updates.languages = req.body.languages;
  if (req.body.toolsAndOtherProficiencies)
    updates.toolsAndOtherProficiencies = req.body.toolsAndOtherProficiencies;
  if (req.body.jackOfAllTrades !== undefined)
    updates.jackOfAllTrades = req.body.jackOfAllTrades;

  const character = await Character.findByIdAndUpdate(
    { _id: req.params.id },
    {
      $set: updates,
    },
    {
      new: true,
      upsert: true,
    }
  );

  character.save();

  res.json(character);
});

app.listen(3001, () => console.log("Server started on port 3001."));
