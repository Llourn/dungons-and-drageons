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

  const updateDexterityAttribute = (value) => {
    setDexterityModifier(calculateModifier(value));
    updateCharacter({ dexterity: value });
  };

  const updateConstitutionAttribute = (value) => {
    setConstitutionModifier(calculateModifier(value));
    updateCharacter({ constitution: value });
  };

  const updateIntelligenceAttribute = (value) => {
    setIntelligenceModifier(calculateModifier(value));
    updateCharacter({ intelligence: value });
  };

  const updateWisdomAttribute = (value) => {
    setWisdomModifier(calculateModifier(value));
    updateCharacter({ wisdom: value });
  };

  const updateCharismaAttribute = (value) => {
    setCharismaModifier(calculateModifier(value));
    updateCharacter({ charisma: value });
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
              modifier={strengthModifier}
              skill={{
                athleticsSkill: {
                  proficient: character.athleticsSkill.proficient,
                  expert: character.athleticsSkill.expert,
                },
              }}
              updateCharacter={updateCharacter}
            />
          </section>
        </section>
        <section>
          <Attribute
            name="dexterity"
            value={character.dexterity}
            modifier={dexterityModifier}
            updateValue={updateDexterityAttribute}
          />
          <section>
            <SavingThrow
              proficient={character.dexteritySavingThrowProficient}
              attributeValue={character.dexterity}
            />
            <Skill
              name="acrobatics"
              modifier={dexterityModifier}
              skill={{
                acrobaticsSkill: {
                  proficient: character.acrobaticsSkill.proficient,
                  expert: character.acrobaticsSkill.expert,
                },
              }}
              updateCharacter={updateCharacter}
            />
            <Skill
              name="sleight of hand"
              modifier={dexterityModifier}
              skill={{
                sleightOfHandSkill: {
                  proficient: character.sleightOfHandSkill.proficient,
                  expert: character.sleightOfHandSkill.expert,
                },
              }}
              updateCharacter={updateCharacter}
            />
            <Skill
              name="stealth"
              modifier={dexterityModifier}
              skill={{
                stealthSkill: {
                  proficient: character.stealthSkill.proficient,
                  expert: character.stealthSkill.expert,
                },
              }}
              updateCharacter={updateCharacter}
            />
          </section>
        </section>
        <section>
          <Attribute
            name="constitution"
            value={character.constitution}
            modifier={constitutionModifier}
            updateValue={updateConstitutionAttribute}
          />
          <section>
            <SavingThrow
              proficient={character.constitutionSavingThrowProficient}
              attributeValue={character.constitution}
            />
          </section>
        </section>
        <section>
          <Attribute
            name="intelligence"
            value={character.intelligence}
            modifier={intelligenceModifier}
            updateValue={updateIntelligenceAttribute}
          />
          <section>
            <SavingThrow
              proficient={character.intelligenceSavingThrowProficient}
              attributeValue={character.intelligence}
            />
            <Skill
              name="arcana"
              modifier={intelligenceModifier}
              skill={{
                arcanaSkill: {
                  proficient: character.arcanaSkill.proficient,
                  expert: character.arcanaSkill.expert,
                },
              }}
              updateCharacter={updateCharacter}
            />
            <Skill
              name="history"
              modifier={intelligenceModifier}
              skill={{
                historySkill: {
                  proficient: character.historySkill.proficient,
                  expert: character.historySkill.expert,
                },
              }}
              updateCharacter={updateCharacter}
            />
            <Skill
              name="investigation"
              modifier={intelligenceModifier}
              skill={{
                investigationSkill: {
                  proficient: character.investigationSkill.proficient,
                  expert: character.investigationSkill.expert,
                },
              }}
              updateCharacter={updateCharacter}
            />
            <Skill
              name="nature"
              modifier={intelligenceModifier}
              skill={{
                natureSkill: {
                  proficient: character.natureSkill.proficient,
                  expert: character.natureSkill.expert,
                },
              }}
              updateCharacter={updateCharacter}
            />
            <Skill
              name="religion"
              modifier={intelligenceModifier}
              skill={{
                religionSkill: {
                  proficient: character.religionSkill.proficient,
                  expert: character.religionSkill.expert,
                },
              }}
              updateCharacter={updateCharacter}
            />
          </section>
        </section>
        <section>
          <Attribute
            name="wisdom"
            value={character.wisdom}
            modifier={wisdomModifier}
            updateValue={updateWisdomAttribute}
          />
          <section>
            <SavingThrow
              proficient={character.wisdomSavingThrowProficient}
              attributeValue={character.wisdom}
            />
            <Skill
              name="animal handling"
              modifier={wisdomModifier}
              skill={{
                animalHandlingSkill: {
                  proficient: character.animalHandlingSkill.proficient,
                  expert: character.animalHandlingSkill.expert,
                },
              }}
              updateCharacter={updateCharacter}
            />
            <Skill
              name="insight"
              modifier={wisdomModifier}
              skill={{
                insightSkill: {
                  proficient: character.insightSkill.proficient,
                  expert: character.insightSkill.expert,
                },
              }}
              updateCharacter={updateCharacter}
            />
            <Skill
              name="medicine"
              modifier={wisdomModifier}
              skill={{
                medicineSkill: {
                  proficient: character.medicineSkill.proficient,
                  expert: character.medicineSkill.expert,
                },
              }}
              updateCharacter={updateCharacter}
            />
            <Skill
              name="perception"
              modifier={wisdomModifier}
              skill={{
                perceptionSkill: {
                  proficient: character.perceptionSkill.proficient,
                  expert: character.perceptionSkill.expert,
                },
              }}
              updateCharacter={updateCharacter}
            />
            <Skill
              name="survival"
              modifier={wisdomModifier}
              skill={{
                survivalSkill: {
                  proficient: character.survivalSkill.proficient,
                  expert: character.survivalSkill.expert,
                },
              }}
              updateCharacter={updateCharacter}
            />
          </section>
        </section>
        <section>
          <Attribute
            name="charisma"
            value={character.charisma}
            modifier={charismaModifier}
            updateValue={updateCharismaAttribute}
          />
          <section>
            <SavingThrow
              proficient={character.charismaSavingThrowProficient}
              attributeValue={character.charisma}
            />
            <Skill
              name="deception"
              modifier={charismaModifier}
              skill={{
                deceptionSkill: {
                  proficient: character.deceptionSkill.proficient,
                  expert: character.deceptionSkill.expert,
                },
              }}
              updateCharacter={updateCharacter}
            />
            <Skill
              name="intimidation"
              modifier={charismaModifier}
              skill={{
                intimidationSkill: {
                  proficient: character.intimidationSkill.proficient,
                  expert: character.intimidationSkill.expert,
                },
              }}
              updateCharacter={updateCharacter}
            />
            <Skill
              name="performance"
              modifier={charismaModifier}
              skill={{
                performanceSkill: {
                  proficient: character.performanceSkill.proficient,
                  expert: character.performanceSkill.expert,
                },
              }}
              updateCharacter={updateCharacter}
            />
            <Skill
              name="persuasion"
              modifier={charismaModifier}
              skill={{
                persuasionSkill: {
                  proficient: character.persuasionSkill.proficient,
                  expert: character.persuasionSkill.expert,
                },
              }}
              updateCharacter={updateCharacter}
            />
          </section>
        </section>
      </section>
    </section>
  );
};

export default Block1;
