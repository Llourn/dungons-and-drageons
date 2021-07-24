import Tiptap from "../Tiptap";

const Block2 = ({ character }) => {
  return (
    <section>
      <p className="block-title">
        <b>Block Two</b>
      </p>
      <section>
        <span>Racial Traits</span>
        <Tiptap content={character.racialTraits} />
      </section>
      <section className="proficiencies">
        <div>
          <span>Proficiencies</span>
        </div>
        <div>
          <input
            type="checkbox"
            defaultChecked={character.lightArmourProficient}
            name=""
            id=""
          />
          <span>Light Armour</span>
        </div>
        <div>
          <input
            type="checkbox"
            defaultChecked={character.mediumArmourProficient}
            name=""
            id=""
          />
          <span>Medium Armour</span>
        </div>
        <div>
          <input
            type="checkbox"
            defaultChecked={character.heavyArmourProficient}
            name=""
            id=""
          />
          <span>Heavy Armour</span>
        </div>
        <div>
          <input
            type="checkbox"
            defaultChecked={character.simpleWeaponsProficient}
            name=""
            id=""
          />
          <span>Simple Weapons</span>
        </div>
        <div>
          <input
            type="checkbox"
            defaultChecked={character.martialWeaponsProficient}
            name=""
            id=""
          />
          <span>Martial Weapons</span>
        </div>
        <div>
          <input
            type="checkbox"
            defaultChecked={character.shieldsProficient}
            name=""
            id=""
          />
          <span>Shields</span>
        </div>
      </section>
      <section>
        <span>Languages</span>
        <Tiptap content={character.languages} />
        <span>Tools & Other Proficiencies</span>
        <Tiptap content={character.toolsAndOtherProficiencies} />
      </section>
    </section>
  );
};

export default Block2;
