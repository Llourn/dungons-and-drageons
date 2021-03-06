import Tiptap from "../Tiptap";
import GearProficiency from "./components/GearProficiency";

const Block2 = ({ character, updateCharacter }) => {
  return (
    <section>
      <p className="block-title">
        <b>Block Two</b>
      </p>
      <section>
        <span>Racial Traits</span>
        <Tiptap
          propertyName="racialTraits"
          propertyObj={{ racialTraits: character.racialTraits }}
          updateCharacter={updateCharacter}
        />
      </section>
      <section className="proficiencies">
        <div>
          <span>Proficiencies</span>
        </div>
        <GearProficiency
          gearName="Light Armor"
          proficiency={{
            lightArmorProficient: character.lightArmorProficient,
          }}
          updateCharacter={updateCharacter}
        />
        <GearProficiency
          gearName="Medium Armor"
          proficiency={{
            mediumArmorProficient: character.mediumArmorProficient,
          }}
          updateCharacter={updateCharacter}
        />
        <GearProficiency
          gearName="Heavy Armor"
          proficiency={{
            heavyArmorProficient: character.heavyArmorProficient,
          }}
          updateCharacter={updateCharacter}
        />
        <GearProficiency
          gearName="Simple Weapons"
          proficiency={{
            simpleWeaponsProficient: character.simpleWeaponsProficient,
          }}
          updateCharacter={updateCharacter}
        />
        <GearProficiency
          gearName="Martial Weapons"
          proficiency={{
            martialWeaponsProficient: character.martialWeaponsProficient,
          }}
          updateCharacter={updateCharacter}
        />
        <GearProficiency
          gearName="Shields"
          proficiency={{
            shieldsProficient: character.shieldsProficient,
          }}
          updateCharacter={updateCharacter}
        />
      </section>
      <section>
        <span>Languages</span>
        <Tiptap
          propertyName="languages"
          propertyObj={{ languages: character.languages }}
          updateCharacter={updateCharacter}
        />
        <span>Tools & Other Proficiencies</span>
        <Tiptap
          propertyName="toolsAndOtherProficiencies"
          propertyObj={{
            toolsAndOtherProficiencies: character.toolsAndOtherProficiencies,
          }}
          updateCharacter={updateCharacter}
        />
      </section>
    </section>
  );
};

export default Block2;
