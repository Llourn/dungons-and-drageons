import ModText from "../ModText";
import DeathSave from "./components/DeathSave";

const Block3 = ({ character, updateCharacter }) => {
  const updateArmorClass = (value) => {
    updateCharacter({ armorClass: value });
  };

  const updateInitiative = (value) => {
    updateCharacter({ initiative: value });
  };

  const updateSpeed = (value) => {
    updateCharacter({ speed: value });
  };

  const updateCurrentHitPoints = (value) => {
    updateCharacter({ currentHitPoints: value });
    if (value > character.maxHitPoints) updateMaxHitPoints(value);
  };

  const updateMaxHitPoints = (value) => {
    updateCharacter({ maxHitPoints: value });
  };

  const updateTempHitPoints = (value) => {
    updateCharacter({ tempHitPoints: value });
  };

  const updateUsedHitDice = (value) => {
    updateCharacter({ usedHitDice: value });
  };

  const updateTotalHitDice = (value) => {
    updateCharacter({ totalHitDice: value });
  };

  const updateSizeHitDice = (value) => {
    updateCharacter({ sizeHitDice: value });
  };

  return (
    <section>
      <p className="block-title">
        <b>Block Three</b>
      </p>
      <section className="ac-block">
        <div>
          <p>AC</p>
          <ModText
            content={character.armorClass}
            updateValue={updateArmorClass}
          />
        </div>
        <div>
          <p>Initiative</p>
          <ModText
            content={character.initiative}
            updateValue={updateInitiative}
          />
        </div>
        <div>
          <p>Speed</p>
          <ModText content={character.speed} updateValue={updateSpeed} />
        </div>
      </section>
      <section className="hp-block">
        <div className="hp">
          <p>Hit Points</p>
          <div className="hp-values">
            <ModText
              content={character.currentHitPoints}
              updateValue={updateCurrentHitPoints}
            />
            <span>/</span>
            <ModText
              content={character.maxHitPoints}
              updateValue={updateMaxHitPoints}
            />
          </div>
        </div>
        <div>
          <span>Temporary Hit Points</span>
          <ModText
            content={character.tempHitPoints}
            updateValue={updateTempHitPoints}
          />
        </div>
        <section className="hit-dice">
          <span>Hit Dice</span>
          <div>
            <ModText
              content={character.usedHitDice}
              updateValue={updateUsedHitDice}
            />
            <span>Used</span>
          </div>
          <div>
            <ModText
              content={character.totalHitDice}
              updateValue={updateTotalHitDice}
            />
            <span>Total</span>
          </div>
          <div>
            <ModText
              content={character.sizeHitDice}
              updateValue={updateSizeHitDice}
            />
            <span>Die Size</span>
          </div>
        </section>
        <section>
          <span>Death Saves</span>
          <DeathSave
            name="Successes"
            data={{ deathSaveSuccesses: character.deathSaveSuccesses }}
            updateCharacter={updateCharacter}
          />
          <DeathSave
            name="Failures"
            data={{ deathSaveFailures: character.deathSaveFailures }}
            updateCharacter={updateCharacter}
          />
        </section>
      </section>
    </section>
  );
};

export default Block3;
