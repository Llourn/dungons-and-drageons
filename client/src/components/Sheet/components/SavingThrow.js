import { useState, useEffect } from "react";

const SavingThrow = ({
  savingThrowName,
  proficientSavingThrow,
  attributeValue,
  proficiency,
  updateCharacter,
}) => {
  const [savingThrowProficient, setSavingThrowProficient] = useState(
    proficientSavingThrow
  );

  useEffect(() => {
    updateCharacter(savingThrowProficient);
  }, [savingThrowProficient, updateCharacter]);

  const updateProficiency = (isProficient) => {
    setSavingThrowProficient(() => {
      let newProf = Object.assign({}, savingThrowProficient);
      newProf[savingThrowName] = isProficient;
      return newProf;
    });
  };

  const proficiencyValue = () => {
    if (savingThrowProficient[savingThrowName]) return proficiency;
    else return 0;
  };

  return savingThrowProficient ? (
    <div className="saving-throw">
      <input
        type="checkbox"
        checked={savingThrowProficient[savingThrowName]}
        onChange={(e) => updateProficiency(e.target.checked)}
        name=""
        id=""
      />
      <span>{Math.floor((attributeValue - 10) / 2) + proficiencyValue()}</span>
      <span>Saving throws</span>
    </div>
  ) : (
    <p>...</p>
  );
};

export default SavingThrow;
