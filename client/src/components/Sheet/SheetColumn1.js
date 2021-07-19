import ModValue from "../ModValue";

const SheetAttributes = () => {
  return (
    <section className="column-33">
      <section className="character-attributes-skills">
        <div className="attributes">
          <div className="attribute">
            <span>Strength</span>
            <ModValue />
            <span>0</span>
          </div>
          <div className="attribute">
            <span>Dexterity</span>
            <ModValue />
            <span>0</span>
          </div>
          <div className="attribute">
            <span>Constitution</span>
            <ModValue />
            <span>0</span>
          </div>
          <div className="attribute">
            <span>Intelligence</span>
            <ModValue />
            <span>0</span>
          </div>
          <div className="attribute">
            <span>Wisdom</span>
            <ModValue />
            <span>0</span>
          </div>
          <div className="attribute">
            <span>Charisma</span>
            <ModValue />
            <span>0</span>
          </div>
        </div>
        <div className="skills-container">
          <div className="inspiration-container">
            <input type="checkbox" name="inspiration" id="inspiration" />
            Inspiration
          </div>
          <div className="proficiency">
            <span>0</span>
            <span>Proficiency Bonus</span>
          </div>
          <div className="saving-throws">
            <div>
              <input type="checkbox" name="strength" id="strength" />
              <span>0</span>
              <span>Strength</span>
            </div>
            <div>
              <input type="checkbox" name="dexterity" id="dexterity" />
              <span>0</span>
              <span>Dexterity</span>
            </div>
            <div>
              <input type="checkbox" name="constitution" id="constitution" />
              <span>0</span>
              <span>Constitution</span>
            </div>
            <div>
              <input type="checkbox" name="intelligence" id="intelligence" />
              <span>0</span>
              <span>Intelligence</span>
            </div>
            <div>
              <input type="checkbox" name="wisdom" id="wisdom" />
              <span>0</span>
              <span>Wisdom</span>
            </div>
            <div>
              <input type="checkbox" name="charisma" id="charisma" />
              <span>0</span>
              <span>Charisma</span>
            </div>
          </div>
          <div className="skills">
            <div>
              <input type="checkbox" name="acrobatics" id="acrobatics" />
              <span>0</span>
              <span>acrobatics</span>
            </div>
            <div>
              <input
                type="checkbox"
                name="animal-handling"
                id="animal-handling"
              />
              <span>0</span>
              <span>animal-handling</span>
            </div>
            <div>
              <input type="checkbox" name="arcana" id="arcana" />
              <span>0</span>
              <span>arcana</span>
            </div>
            <div>
              <input type="checkbox" name="athletics" id="athletics" />
              <span>0</span>
              <span>athletics</span>
            </div>
            <div>
              <input type="checkbox" name="deception" id="deception" />
              <span>0</span>
              <span>deception</span>
            </div>
            <div>
              <input type="checkbox" name="history" id="history" />
              <span>0</span>
              <span>history</span>
            </div>
            <div>
              <input type="checkbox" name="insight" id="insight" />
              <span>0</span>
              <span>insight</span>
            </div>
            <div>
              <input type="checkbox" name="intimidation" id="intimidation" />
              <span>0</span>
              <span>intimidation</span>
            </div>
            <div>
              <input type="checkbox" name="investigation" id="investigation" />
              <span>0</span>
              <span>investigation</span>
            </div>
            <div>
              <input type="checkbox" name="medicine" id="medicine" />
              <span>0</span>
              <span>medicine</span>
            </div>
            <div>
              <input type="checkbox" name="nature" id="nature" />
              <span>0</span>
              <span>nature</span>
            </div>
            <div>
              <input type="checkbox" name="perception" id="perception" />
              <span>0</span>
              <span>perception</span>
            </div>
            <div>
              <input type="checkbox" name="performance" id="performance" />
              <span>0</span>
              <span>performance</span>
            </div>
            <div>
              <input type="checkbox" name="persuasion" id="persuasion" />
              <span>0</span>
              <span>persuasion</span>
            </div>
            <div>
              <input type="checkbox" name="religion" id="religion" />
              <span>0</span>
              <span>religion</span>
            </div>
            <div>
              <input
                type="checkbox"
                name="sleight-of-hand"
                id="sleight-of-hand"
              />
              <span>0</span>
              <span>sleight-of-hand</span>
            </div>
            <div>
              <input type="checkbox" name="stealth" id="stealth" />
              <span>0</span>
              <span>stealth</span>
            </div>
            <div>
              <input type="checkbox" name="survival" id="survival" />
              <span>0</span>
              <span>survival</span>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="passive-wisdom">
          <span>0</span>
          <span>Passive wisdom (perception)</span>
        </div>
        <div className="other-proficiencies">
          <textarea
            name="other-proficiencies"
            id="other-proficiencies"
          ></textarea>
          <span>Other Proficiencies & Languages</span>
        </div>
      </section>
    </section>
  );
};

export default SheetAttributes;
