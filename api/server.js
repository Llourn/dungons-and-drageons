const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const jwt = require("jsonwebtoken");
const {
  USERFRONT_PUBLIC_KEY,
  DB_USERNAME,
  DB_PASSWORD,
} = require("./environment");

app.use(express.json());
app.use(cors());

function authenticateToken(req, res, next) {
  // Read the JWT access token from the request header
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (token == null) return res.sendStatus(401);
  // Return 401 if no token
  // Verify the token using the Userfront public key
  jwt.verify(token, USERFRONT_PUBLIC_KEY, (err, auth) => {
    // if (err) return res.sendStatus(403); // Return 403 if there is an error verifying
    if (err)
      return res.json({
        message: "Bad token",
      });
    req.auth = auth;
    console.log(req.auth);
    next();
  });
}

mongoose
  // .connect("mongodb://myUserAdmin:password@localhost:27017/?authSource=admin", {
  .connect(
    `mongodb+srv://${DB_USERNAME}:${DB_PASSWORD}@main-db.pv93n.mongodb.net/main-db?retryWrites=true&w=majority`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    }
  )
  .then(() => console.log("Connected to DB"))
  .catch(console.error);

const Character = require("./models/Character");

app.get("/data", authenticateToken, (req, res) => {
  console.log(req.auth);
  return res.json({
    someSecretData: "SHHHH!",
  });
});

app.get("/users", authenticateToken, (req, res) => {
  const authorization = req.auth.authorization["jb78xmn6"] || {};
  console.log("Users called!");

  if (authorization.roles.includes("admin")) {
    // Allow access
    console.log("ADMIN ACCESS GRANTED");
    return res.json({
      accessGranted: true,
    });
  } else {
    // Deny access
    console.log("ADMIN ACCESS DENIED");
    return res.json({
      accessGranted: false,
    });
  }
});

app.get("/characters", authenticateToken, async (req, res) => {
  const characters = await Character.find(
    {
      characterOwner: req.auth.userUuid,
    },
    (error, response) => {
      if (error) console.log(error);
      if (response) console.log(response);
    }
  );
  res.json(characters);
});

app.get("/characters/:id", async (req, res) => {
  const character = await Character.findById(req.params.id);
  res.json(character);
});

app.post("/character/new", authenticateToken, (req, res) => {
  const character = new Character({
    characterOwner: req.auth.userUuid,
    characterName: req.body.characterName,
  });

  character.save();

  res.json(character);
});

app.put("/character/:id", async (req, res) => {
  let updates = {};
  console.log(req.body);
  if (req.body.characterName !== undefined)
    updates.characterName = req.body.characterName;
  if (req.body.background !== undefined)
    updates.background = req.body.background;
  if (req.body.playerName !== undefined)
    updates.playerName = req.body.playerName;
  if (req.body.race !== undefined) updates.race = req.body.race;
  if (req.body.alignment !== undefined) updates.alignment = req.body.alignment;
  if (req.body.experiencePoints !== undefined)
    updates.experiencePoints = req.body.experiencePoints;
  if (req.body.characterClass !== undefined)
    updates.characterClass = req.body.characterClass;
  if (req.body.level !== undefined) updates.level = req.body.level;
  if (req.body.inspiration !== undefined)
    updates.inspiration = req.body.inspiration;
  if (req.body.strength !== undefined) updates.strength = req.body.strength;
  if (req.body.dexterity !== undefined) updates.dexterity = req.body.dexterity;
  if (req.body.constitution !== undefined)
    updates.constitution = req.body.constitution;
  if (req.body.intelligence !== undefined)
    updates.intelligence = req.body.intelligence;
  if (req.body.wisdom !== undefined) updates.wisdom = req.body.wisdom;
  if (req.body.charisma !== undefined) updates.charisma = req.body.charisma;

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
  if (req.body.athleticsSkill !== undefined)
    updates.athleticsSkill = req.body.athleticsSkill;
  if (req.body.acrobaticsSkill !== undefined)
    updates.acrobaticsSkill = req.body.acrobaticsSkill;
  if (req.body.sleightOfHandSkill !== undefined)
    updates.sleightOfHandSkill = req.body.sleightOfHandSkill;
  if (req.body.stealthSkill !== undefined)
    updates.stealthSkill = req.body.stealthSkill;
  if (req.body.arcanaSkill !== undefined)
    updates.arcanaSkill = req.body.arcanaSkill;
  if (req.body.historySkill !== undefined)
    updates.historySkill = req.body.historySkill;
  if (req.body.investigationSkill !== undefined)
    updates.investigationSkill = req.body.investigationSkill;
  if (req.body.natureSkill !== undefined)
    updates.natureSkill = req.body.natureSkill;
  if (req.body.religionSkill !== undefined)
    updates.religionSkill = req.body.religionSkill;
  if (req.body.animalHandlingSkill !== undefined)
    updates.animalHandlingSkill = req.body.animalHandlingSkill;
  if (req.body.insightSkill !== undefined)
    updates.insightSkill = req.body.insightSkill;
  if (req.body.medicineSkill !== undefined)
    updates.medicineSkill = req.body.medicineSkill;
  if (req.body.perceptionSkill !== undefined)
    updates.perceptionSkill = req.body.perceptionSkill;
  if (req.body.survivalSkill !== undefined)
    updates.survivalSkill = req.body.survivalSkill;
  if (req.body.deceptionSkill !== undefined)
    updates.deceptionSkill = req.body.deceptionSkill;
  if (req.body.intimidationSkill !== undefined)
    updates.intimidationSkill = req.body.intimidationSkill;
  if (req.body.performanceSkill !== undefined)
    updates.performanceSkill = req.body.performanceSkill;
  if (req.body.persuasionSkill !== undefined)
    updates.persuasionSkill = req.body.persuasionSkill;
  if (req.body.racialTraits) updates.racialTraits = req.body.racialTraits;
  if (req.body.lightArmorProficient !== undefined)
    updates.lightArmorProficient = req.body.lightArmorProficient;
  if (req.body.mediumArmorProficient !== undefined)
    updates.mediumArmorProficient = req.body.mediumArmorProficient;
  if (req.body.heavyArmorProficient !== undefined)
    updates.heavyArmorProficient = req.body.heavyArmorProficient;
  if (req.body.simpleWeaponsProficient !== undefined)
    updates.simpleWeaponsProficient = req.body.simpleWeaponsProficient;
  if (req.body.martialWeaponsProficient !== undefined)
    updates.martialWeaponsProficient = req.body.martialWeaponsProficient;
  if (req.body.shieldsProficient !== undefined)
    updates.shieldsProficient = req.body.shieldsProficient;
  if (req.body.languages) updates.languages = req.body.languages;
  if (req.body.toolsAndOtherProficiencies !== undefined)
    updates.toolsAndOtherProficiencies = req.body.toolsAndOtherProficiencies;
  if (req.body.jackOfAllTrades !== undefined)
    updates.jackOfAllTrades = req.body.jackOfAllTrades;
  if (req.body.armorClass !== undefined)
    updates.armorClass = req.body.armorClass;
  if (req.body.initiative !== undefined)
    updates.initiative = req.body.initiative;
  if (req.body.speed !== undefined) updates.speed = req.body.speed;
  if (req.body.currentHitPoints !== undefined)
    updates.currentHitPoints = req.body.currentHitPoints;
  if (req.body.maxHitPoints !== undefined)
    updates.maxHitPoints = req.body.maxHitPoints;
  if (req.body.tempHitPoints !== undefined)
    updates.tempHitPoints = req.body.tempHitPoints;
  if (req.body.totalHitDice !== undefined)
    updates.totalHitDice = req.body.totalHitDice;
  if (req.body.usedHitDice !== undefined)
    updates.usedHitDice = req.body.usedHitDice;
  if (req.body.sizeHitDice !== undefined)
    updates.sizeHitDice = req.body.sizeHitDice;
  if (req.body.deathSaveSuccesses !== undefined)
    updates.deathSaveSuccesses = req.body.deathSaveSuccesses;
  if (req.body.deathSaveFailures !== undefined)
    updates.deathSaveFailures = req.body.deathSaveFailures;

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
