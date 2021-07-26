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

  if (req.body.strengthSavingThrowproficient)
    updates.strengthSavingThrowproficient =
      req.body.strengthSavingThrowproficient;
  if (req.body.dexteritySavingThrowproficient)
    updates.dexteritySavingThrowproficient =
      req.body.dexteritySavingThrowproficient;
  if (req.body.constitutionSavingThrowproficient)
    updates.constitutionSavingThrowproficient =
      req.body.constitutionSavingThrowproficient;
  if (req.body.intelligenceSavingThrowproficient)
    updates.intelligenceSavingThrowproficient =
      req.body.intelligenceSavingThrowproficient;
  if (req.body.wisdomSavingThrowproficient)
    updates.wisdomSavingThrowproficient = req.body.wisdomSavingThrowproficient;
  if (req.body.charismaSavingThrowproficient)
    updates.charismaSavingThrowproficient =
      req.body.charismaSavingThrowproficient;
  if (req.body.athleticsProficient)
    updates.athleticsProficient = req.body.athleticsProficient;
  if (req.body.acrobaticsProficient)
    updates.acrobaticsProficient = req.body.acrobaticsProficient;
  if (req.body.sleightOfHandProficient)
    updates.sleightOfHandProficient = req.body.sleightOfHandProficient;
  if (req.body.stealthProficient)
    updates.stealthProficient = req.body.stealthProficient;
  if (req.body.arcanaProficient)
    updates.arcanaProficient = req.body.arcanaProficient;
  if (req.body.historyProficient)
    updates.historyProficient = req.body.historyProficient;
  if (req.body.investigationProficient)
    updates.investigationProficient = req.body.investigationProficient;
  if (req.body.natureProficient)
    updates.natureProficient = req.body.natureProficient;
  if (req.body.religionProficient)
    updates.religionProficient = req.body.religionProficient;
  if (req.body.animalHandlingProficient)
    updates.animalHandlingProficient = req.body.animalHandlingProficient;
  if (req.body.insightProficient)
    updates.insightProficient = req.body.insightProficient;
  if (req.body.medicineProficient)
    updates.medicineProficient = req.body.medicineProficient;
  if (req.body.perceptionProficient)
    updates.perceptionProficient = req.body.perceptionProficient;
  if (req.body.survivalProficient)
    updates.survivalProficient = req.body.survivalProficient;
  if (req.body.deceptionProficient)
    updates.deceptionProficient = req.body.deceptionProficient;
  if (req.body.intimidationProficient)
    updates.intimidationProficient = req.body.intimidationProficient;
  if (req.body.performanceProficient)
    updates.performanceProficient = req.body.performanceProficient;
  if (req.body.persuasionProficient)
    updates.persuasionProficient = req.body.persuasionProficient;
  if (req.body.athleticsExpert)
    updates.athleticsExpert = req.body.athleticsExpert;
  if (req.body.acrobaticsExpert)
    updates.acrobaticsExpert = req.body.acrobaticsExpert;
  if (req.body.sleightOfHandExpert)
    updates.sleightOfHandExpert = req.body.sleightOfHandExpert;
  if (req.body.stealthExpert) updates.stealthExpert = req.body.stealthExpert;
  if (req.body.arcanaExpert) updates.arcanaExpert = req.body.arcanaExpert;
  if (req.body.historyExpert) updates.historyExpert = req.body.historyExpert;
  if (req.body.investigationExpert)
    updates.investigationExpert = req.body.investigationExpert;
  if (req.body.natureExpert) updates.natureExpert = req.body.natureExpert;
  if (req.body.religionExpert) updates.religionExpert = req.body.religionExpert;
  if (req.body.animalHandlingExpert)
    updates.animalHandlingExpert = req.body.animalHandlingExpert;
  if (req.body.insightExpert) updates.insightExpert = req.body.insightExpert;
  if (req.body.medicineExpert) updates.medicineExpert = req.body.medicineExpert;
  if (req.body.perceptionExpert)
    updates.perceptionExpert = req.body.perceptionExpert;
  if (req.body.survivalExpert) updates.survivalExpert = req.body.survivalExpert;
  if (req.body.deceptionExpert)
    updates.deceptionExpert = req.body.deceptionExpert;
  if (req.body.intimidationExpert)
    updates.intimidationExpert = req.body.intimidationExpert;
  if (req.body.performanceExpert)
    updates.performanceExpert = req.body.performanceExpert;
  if (req.body.persuasionExpert)
    updates.persuasionExpert = req.body.persuasionExpert;
  if (req.body.racialTraits) updates.racialTraits = req.body.racialTraits;
  if (req.body.lightArmourProficient)
    updates.lightArmourProficient = req.body.lightArmourProficient;
  if (req.body.mediumArmourProficient)
    updates.mediumArmourProficient = req.body.mediumArmourProficient;
  if (req.body.heavyArmourProficient)
    updates.heavyArmourProficient = req.body.heavyArmourProficient;
  if (req.body.simpleWeaponsProficient)
    updates.simpleWeaponsProficient = req.body.simpleWeaponsProficient;
  if (req.body.martialWeaponsProficient)
    updates.martialWeaponsProficient = req.body.martialWeaponsProficient;
  if (req.body.shieldsProficient)
    updates.shieldsProficient = req.body.shieldsProficient;
  if (req.body.languages) updates.languages = req.body.languages;
  if (req.body.toolsAndOtherProficiencies)
    updates.toolsAndOtherProficiencies = req.body.toolsAndOtherProficiencies;

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

  res.json(character);
});

app.listen(3001, () => console.log("Server started on port 3001."));
