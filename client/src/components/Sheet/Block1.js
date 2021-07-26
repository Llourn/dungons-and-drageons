import { useState, useEffect } from "react";
import Attribute from "./components/Attribute";
import SavingThrow from "./components/SavingThrow";
import Skill from "./components/Skill";

const Block1 = ({ character, updateCharacter }) => {
  const [proficiency, setProficiency] = useState(0);
  const [strengthModifier, setStrengthModifier] = useState(
    Math.floor((character.strength - 10) / 2)
  );
  const [dexterityModifier, setDexterityModifier] = useState(
    Math.floor((character.dexterity - 10) / 2)
  );
  const [constitutionModifier, setConstitutionModifier] = useState(
    Math.floor((character.constitution - 10) / 2)
  );
  const [intelligenceModifier, setIntelligenceModifier] = useState(
    Math.floor((character.intelligence - 10) / 2)
  );
  const [wisdomModifier, setWisdomModifier] = useState(
    Math.floor((character.wisdom - 10) / 2)
  );
  const [charismaModifier, setCharismaModifier] = useState(
    Math.floor((character.charisma - 10) / 2)
  );

  useEffect(() => {
    const calculateProficiency = () => {
      const level = character.level;
      if (level <= 4) {
        return 2;
      } else if (level >= 5 && level <= 8) {
        return 3;
      } else if (level >= 9 && level <= 12) {
        return 4;
      } else if (level >= 13 && level <= 16) {
        return 5;
      } else {
        return 6;
      }
    };
    setProficiency(calculateProficiency());
  }, [character.level]);

  const calculateModifier = (value) => {
    return Math.floor((value - 10) / 2);
  };

  const updateStrengthAttribute = (value) => {
    setStrengthModifier(calculateModifier(value));
    updateCharacter({ strength: value });
  };

  const updateAthleticsProficiency = (value) => {
    updateCharacter({ athleticsProficient: value });
  };

  const updateAthleticsExpertise = (value) => {
    updateCharacter({ athleticsExpert: value });
  };

  return (
    <section>
      <p className="block-title">
        <b>Block One</b>
      </p>
      <section className="passives-and-proficiency">
        <div>
          <span>{proficiency}</span>
          <span>Proficiency</span>
        </div>
        <div>
          <input
            type="checkbox"
            defaultChecked={character.inspiration}
            onChange={(e) => updateCharacter({ inspiration: e.target.checked })}
            name=""
            id=""
          />
          <span>Inspiration</span>
        </div>
        <div>
          <span>Passive Perception</span>
          <span>{}</span>
        </div>
        <div>
          <span>Passive Insight</span>
          <span>#</span>
        </div>
      </section>
      <section className="attributes">
        <section>
          <Attribute
            name="strength"
            value={character.strength}
            modifier={strengthModifier}
            updateValue={updateStrengthAttribute}
          />
          <section>
            <SavingThrow
              proficient={character.strengthSavingThrowProficient}
              attributeValue={character.strength}
            />
            <Skill
              name="athletics"
              expert={character.athleticsExpert}
              proficient={character.athleticsProficient}
              modifier={strengthModifier}
              updateProf={updateAthleticsProficiency}
              updateExp={updateAthleticsExpertise}
            />
          </section>
        </section>
        <section>
          <Attribute name="dexterity" value={character.dexterity} />
          <section>
            <SavingThrow
              proficient={character.dexteritySavingThrowProficient}
              attributeValue={character.dexterity}
            />
            <Skill
              name="acrobatics"
              expert={character.acrobaticsExpert}
              proficient={character.acrobaticsProficient}
              attribute={character.dexterity}
            />
            <Skill
              name="sleight of hand"
              expert={character.sleightOfHandExpert}
              proficient={character.sleightOfHandProficient}
              attribute={character.dexterity}
            />
            <Skill
              name="stealth"
              expert={character.stealthExpert}
              proficient={character.stealthProficient}
              attribute={character.dexterity}
            />
          </section>
        </section>
        <section>
          <Attribute name="contitution" value={character.constitution} />
          <section>
            <SavingThrow
              proficient={character.constitutionSavingThrowProficient}
              attributeValue={character.constitution}
            />
          </section>
        </section>
        <section>
          <Attribute name="intelligence" value={character.intelligence} />
          <section>
            <SavingThrow
              proficient={character.intelligenceSavingThrowProficient}
              attributeValue={character.intelligence}
            />
            <Skill
              name="arcana"
              expert={character.arcanaExpert}
              proficient={character.arcanaProficient}
              attribute={character.intelligence}
            />
            <Skill
              name="history"
              expert={character.historyExpert}
              proficient={character.historyProficient}
              attribute={character.intelligence}
            />
            <Skill
              name="investigation"
              expert={character.investigationExpert}
              proficient={character.investigationProficient}
              attribute={character.intelligence}
            />
            <Skill
              name="nature"
              expert={character.natureExpert}
              proficient={character.natureProficient}
              attribute={character.intelligence}
            />
            <Skill
              name="religion"
              expert={character.religionExpert}
              proficient={character.religionProficient}
              attribute={character.intelligence}
            />
          </section>
        </section>
        <section>
          <Attribute name="wisdom" value={character.wisdom} />
          <section>
            <SavingThrow
              proficient={character.wisdomSavingThrowProficient}
              attributeValue={character.wisdom}
            />
            <Skill
              name="animal handling"
              expert={character.animalHandlingExpert}
              proficient={character.animalHandlingProficient}
              attribute={character.wisdom}
            />
            <Skill
              name="insight"
              expert={character.insightExpert}
              proficient={character.insightProficient}
              attribute={character.wisdom}
            />
            <Skill
              name="medicine"
              expert={character.medicineExpert}
              proficient={character.medicineProficient}
              attribute={character.wisdom}
            />
            <Skill
              name="perception"
              expert={character.perceptionExpert}
              proficient={character.perceptionProficient}
              attribute={character.wisdom}
            />
            <Skill
              name="survival"
              expert={character.survivalExpert}
              proficient={character.survivalProficient}
              attribute={character.wisdom}
            />
          </section>
        </section>
        <section>
          <Attribute name="charisma" value={character.charisma} />
          <section>
            <SavingThrow
              proficient={character.charismaSavingThrowProficient}
              attributeValue={character.charisma}
            />
            <Skill
              name="deception"
              expert={character.deceptionExpert}
              proficient={character.deceptionProficient}
              attribute={character.charisma}
            />
            <Skill
              name="intimidation"
              expert={character.intimidationExpert}
              proficient={character.intimidationProficient}
              attribute={character.charisma}
            />
            <Skill
              name="performance"
              expert={character.performanceExpert}
              proficient={character.performanceProficient}
              attribute={character.charisma}
            />
            <Skill
              name="persuasion"
              expert={character.persuasionExpert}
              proficient={character.persuasionProficient}
              attribute={character.charisma}
            />
          </section>
        </section>
      </section>
    </section>
  );
};

export default Block1;
