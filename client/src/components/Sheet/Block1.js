import Attribute from "./components/Attribute";
import SavingThrow from "./components/SavingThrow";
import Skill from "./components/Skill";

const Block1 = () => {
  return (
    <section>
      <p>
        <b>Block One</b>
      </p>
      <section className="passives-and-proficiency">
        <div>
          <span>#</span>
          <span>Proficiency</span>
        </div>
        <div>
          <input type="checkbox" name="" id="" />
          <span>Inspiration</span>
        </div>
        <div>
          <span>Passive Perception</span>
          <span>#</span>
        </div>
        <div>
          <span>Passive Insight</span>
          <span>#</span>
        </div>
      </section>
      <section className="attributes">
        <section>
          <Attribute name="strength" />
          <section>
            <SavingThrow />
            <Skill name="athletics" />
          </section>
        </section>
        <section>
          <Attribute name="dexterity" />
          <section>
            <SavingThrow />
            <Skill name="acrobatics" />
            <Skill name="sleight of hand" />
            <Skill name="stealth" />
          </section>
        </section>
        <section>
          <Attribute name="contritution" />
          <section>
            <SavingThrow />
          </section>
        </section>
        <section>
          <Attribute name="intelligence" />
          <section>
            <SavingThrow />
            <Skill name="arcana" />
            <Skill name="history" />
            <Skill name="investigation" />
            <Skill name="nature" />
            <Skill name="religion" />
          </section>
        </section>
        <section>
          <Attribute name="wisdom" />
          <section>
            <SavingThrow />
            <Skill name="animal handling" />
            <Skill name="insight" />
            <Skill name="medicine" />
            <Skill name="perception" />
            <Skill name="survival" />
          </section>
        </section>
        <section>
          <Attribute name="charisma" />
          <section>
            <SavingThrow />
            <Skill name="deception" />
            <Skill name="intimidation" />
            <Skill name="performance" />
            <Skill name="persuasion" />
          </section>
        </section>
      </section>
    </section>
  );
};

export default Block1;
