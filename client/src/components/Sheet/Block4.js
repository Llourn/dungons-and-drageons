import { useState } from "react";
import ModText from "../ModText";

const Block4 = () => {
  const [newAttack, setNewAttack] = useState(false);
  const [attackName, setAttackName] = useState();
  const [attackBonus, setAttackBonus] = useState();
  const [attackDamage, setAttackDamage] = useState();
  const [damageType, setDamageType] = useState();
  const [isMagical, setIsMagical] = useState();
  const [useFinesse, setUseFinesse] = useState();
  const [magicalEffects, setMagicalEffects] = useState([]);

  const handleNewAttack = () => {
    setNewAttack((prevState) => {
      return !prevState;
    });
  };

  const handleAttackNameChange = (value) => {
    setAttackName(value);
  };

  const handleAttackDamageChange = (value) => {
    setAttackDamage(value);
  };

  const handleDamageTypeChange = (value) => {
    setDamageType(value);
  };

  const handleUseFinesse = (value) => {
    setUseFinesse(value);
  };

  const handleIsMagical = (value) => {
    setIsMagical(value);
  };

  const handleAddMagicalEffect = (e) => {
    setMagicalEffects((prevState) => {
      let newState = prevState;
      newState.push(["", ""]); // TODO: change this from an array to an object!
      return newState;
    });
    e.preventDefault();
  };

  const handleChangeMagicalEffect = () => {};

  return (
    <section>
      <p className="block-title">
        <b>Block Four A</b>
      </p>
      <section className="attacks">
        <div>
          <p>Attacks</p>
          <button onClick={() => handleNewAttack()}>
            {newAttack ? "-" : "+"}
          </button>
        </div>
        {newAttack && (
          <form className="new-attack">
            <label>
              Attack Name:{" "}
              <input
                type="text"
                value={attackName}
                onChange={(e) => handleAttackNameChange(e.target.value)}
              />
            </label>
            <br />
            <label>Attack Bonus: {attackBonus}</label>
            <br />
            <label>
              Damage:{" "}
              <input
                type="text"
                value={attackDamage}
                onChange={(e) => handleAttackDamageChange(e.target.value)}
              />
            </label>
            <br />
            <label>
              Damage Type:{" "}
              <select
                value={damageType}
                onChange={(e) => handleDamageTypeChange(e.target.value)}
              >
                <option value=""></option>
                <option value="piercing">Piercing</option>
                <option value="slashing">Slashing</option>
                <option value="bludgeoning">Bludgeoning</option>
              </select>
            </label>
            <br />
            <label>
              Finesse:{" "}
              <input
                type="checkbox"
                value={useFinesse}
                onClick={(e) => handleUseFinesse(e.target.checked)}
              />
            </label>
            <br />
            <label>
              Magical:{" "}
              <input
                type="checkbox"
                value={isMagical}
                onClick={(e) => handleIsMagical(e.target.checked)}
              />{" "}
              {isMagical && (
                <button onClick={(e) => handleAddMagicalEffect(e)}>+</button>
              )}
            </label>
            <br />
            {magicalEffects.length > 0 ? (
              magicalEffects.map((effect, index) => (
                <label>
                  Effect: {index}
                  {/* <select
                    value={effect[0]}
                    onChange={(e) => handleDamageTypeChange(e.target.value)}
                  >
                    <option value=""></option>
                    <option value="attack">Attack</option>
                    <option value="damage">Damage</option>
                    <option value="effect">Effect</option>
                  </select>
                  <input type="text" /> */}
                </label>
              ))
            ) : (
              <p>You currently have no magical effects.</p>
            )}
          </form>
        )}
      </section>
      <section className="equipment">
        <span>Equipment</span>
        <div>
          <p className="label upper">Name</p>
          <p className="label upper">AC</p>
          <p className="label upper">Add'l stats</p>
        </div>
        <div>
          <ModText />
          <ModText />
          <ModText />
        </div>
        <div>
          <ModText />
          <ModText />
          <ModText />
        </div>
        <div>
          <ModText />
          <ModText />
          <ModText />
        </div>
      </section>
      <section className="currency">
        <div>
          <span>CP</span>
          <ModText />
        </div>
        <div>
          <span>SP</span>
          <ModText />
        </div>
        <div>
          <span>EP</span>
          <ModText />
        </div>
        <div>
          <span>GP</span>
          <ModText />
        </div>
        <div>
          <span>PP</span>
          <ModText />
        </div>
      </section>
    </section>
  );
};

export default Block4;
