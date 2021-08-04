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
    default: 0,
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
  acrobaticsSkill: {
    type: Object,
    default: {
      proficient: false,
      expert: false,
    },
  },
  animalHandlingSkill: {
    type: Object,
    default: {
      proficient: false,
      expert: false,
    },
  },
  arcanaSkill: {
    type: Object,
    default: {
      proficient: false,
      expert: false,
    },
  },
  athleticsSkill: {
    type: Object,
    default: {
      proficient: false,
      expert: false,
    },
  },
  deceptionSkill: {
    type: Object,
    default: {
      proficient: false,
      expert: false,
    },
  },
  historySkill: {
    type: Object,
    default: {
      proficient: false,
      expert: false,
    },
  },
  insightSkill: {
    type: Object,
    default: {
      proficient: false,
      expert: false,
    },
  },
  intimidationSkill: {
    type: Object,
    default: {
      proficient: false,
      expert: false,
    },
  },
  investigationSkill: {
    type: Object,
    default: {
      proficient: false,
      expert: false,
    },
  },
  medicineSkill: {
    type: Object,
    default: {
      proficient: false,
      expert: false,
    },
  },
  natureSkill: {
    type: Object,
    default: {
      proficient: false,
      expert: false,
    },
  },
  perceptionSkill: {
    type: Object,
    default: {
      proficient: false,
      expert: false,
    },
  },
  performanceSkill: {
    type: Object,
    default: {
      proficient: false,
      expert: false,
    },
  },
  persuasionSkill: {
    type: Object,
    default: {
      proficient: false,
      expert: false,
    },
  },
  religionSkill: {
    type: Object,
    default: {
      proficient: false,
      expert: false,
    },
  },
  sleightOfHandSkill: {
    type: Object,
    default: {
      proficient: false,
      expert: false,
    },
  },
  stealthSkill: {
    type: Object,
    default: {
      proficient: false,
      expert: false,
    },
  },
  survivalSkill: {
    type: Object,
    default: {
      proficient: false,
      expert: false,
    },
  },
  jackOfAllTrades: {
    type: Boolean,
    default: false,
  },
});

const Character = mongoose.model("Character", CharacterSchema);

module.exports = Character;
