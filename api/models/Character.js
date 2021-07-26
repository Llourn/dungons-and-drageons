const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CharacterSchema = new Schema({
  characterName: {
    type: String,
    default: "[Character Name]",
  },
  background: {
    type: String,
    default: "[Background]",
  },
  playerName: {
    type: String,
    default: "[Player Name]",
  },
  race: {
    type: String,
    default: "[Race]",
  },
  alignment: {
    type: String,
    default: "[Alignment]",
  },
  experiencePoints: {
    type: Number,
  },
  characterClass: {
    type: String,
    default: "[Character Class]",
  },
  level: {
    type: Number,
    default: 1,
  },
  inspiration: {
    type: Boolean,
    default: false,
  },
  strength: {
    type: Number,
    default: 0,
  },
  dexterity: {
    type: Number,
    default: 0,
  },
  constitution: {
    type: Number,
    default: 0,
  },
  intelligence: {
    type: Number,
    default: 0,
  },
  wisdom: {
    type: Number,
    default: 0,
  },
  charisma: {
    type: Number,
    default: 0,
  },
  strengthSavingThrowProficient: {
    type: Boolean,
    default: false,
  },
  dexteritySavingThrowProficient: {
    type: Boolean,
    default: false,
  },
  constitutionSavingThrowProficient: {
    type: Boolean,
    default: false,
  },
  intelligenceSavingThrowProficient: {
    type: Boolean,
    default: false,
  },
  wisdomSavingThrowProficient: {
    type: Boolean,
    default: false,
  },
  charismaSavingThrowProficient: {
    type: Boolean,
    default: false,
  },
  athleticsProficient: {
    type: Boolean,
    default: false,
  },
  acrobaticsProficient: {
    type: Boolean,
    default: false,
  },
  sleightOfHandProficient: {
    type: Boolean,
    default: false,
  },
  stealthProficient: {
    type: Boolean,
    default: false,
  },
  arcanaProficient: {
    type: Boolean,
    default: false,
  },
  historyProficient: {
    type: Boolean,
    default: false,
  },
  investigationProficient: {
    type: Boolean,
    default: false,
  },
  natureProficient: {
    type: Boolean,
    default: false,
  },
  religionProficient: {
    type: Boolean,
    default: false,
  },
  animalHandlingProficient: {
    type: Boolean,
    default: false,
  },
  insightProficient: {
    type: Boolean,
    default: false,
  },
  medicineProficient: {
    type: Boolean,
    default: false,
  },
  perceptionProficient: {
    type: Boolean,
    default: false,
  },
  survivalProficient: {
    type: Boolean,
    default: false,
  },
  deceptionProficient: {
    type: Boolean,
    default: false,
  },
  intimidationProficient: {
    type: Boolean,
    default: false,
  },
  performanceProficient: {
    type: Boolean,
    default: false,
  },
  persuasionProficient: {
    type: Boolean,
    default: false,
  },
  athleticsExpert: {
    type: Boolean,
    default: false,
  },
  acrobaticsExpert: {
    type: Boolean,
    default: false,
  },
  sleightOfHandExpert: {
    type: Boolean,
    default: false,
  },
  stealthExpert: {
    type: Boolean,
    default: false,
  },
  arcanaExpert: {
    type: Boolean,
    default: false,
  },
  historyExpert: {
    type: Boolean,
    default: false,
  },
  investigationExpert: {
    type: Boolean,
    default: false,
  },
  natureExpert: {
    type: Boolean,
    default: false,
  },
  religionExpert: {
    type: Boolean,
    default: false,
  },
  animalHandlingExpert: {
    type: Boolean,
    default: false,
  },
  insightExpert: {
    type: Boolean,
    default: false,
  },
  medicineExpert: {
    type: Boolean,
    default: false,
  },
  perceptionExpert: {
    type: Boolean,
    default: false,
  },
  survivalExpert: {
    type: Boolean,
    default: false,
  },
  deceptionExpert: {
    type: Boolean,
    default: false,
  },
  intimidationExpert: {
    type: Boolean,
    default: false,
  },
  performanceExpert: {
    type: Boolean,
    default: false,
  },
  persuasionExpert: {
    type: Boolean,
    default: false,
  },
  racialTraits: {
    type: String,
    default: "[Racial Traits]",
  },
  lightArmourProficient: {
    type: Boolean,
    default: false,
  },
  mediumArmourProficient: {
    type: Boolean,
    default: false,
  },
  heavyArmourProficient: {
    type: Boolean,
    default: false,
  },
  simpleWeaponsProficient: {
    type: Boolean,
    default: false,
  },
  martialWeaponsProficient: {
    type: Boolean,
    default: false,
  },
  shieldsProficient: {
    type: Boolean,
    default: false,
  },
  languages: {
    type: String,
    default: "[Languages]",
  },
  toolsAndOtherProficiencies: {
    type: String,
    default: "[Tools and Other Proficiencies]",
  },
});

const Character = mongoose.model("Character", CharacterSchema);

module.exports = Character;
