import { useState, useEffect } from "react";

const GearProficiency = ({ gearName, proficiency, updateCharacter }) => {
  const [gearProficient, setGearProficient] = useState(proficiency);
  const camelizedGearName = `${camelize(gearName)}Proficient`;

  useEffect(() => {
    updateCharacter(gearProficient);
  }, [gearProficient, updateCharacter]);

  const updateProficiency = (isProficient) => {
    setGearProficient(() => {
      let newProf = Object.assign({}, gearProficient);
      newProf[camelizedGearName] = isProficient;
      return newProf;
    });
  };

  function camelize(str) {
    return str.replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, function (match, index) {
      if (+match === 0) return ""; // or if (/\s+/.test(match)) for white spaces
      return index === 0 ? match.toLowerCase() : match.toUpperCase();
    });
  }

  return gearProficient ? (
    <div className="gear-proficiency">
      <input
        type="checkbox"
        checked={gearProficient[camelizedGearName]}
        onChange={(e) => updateProficiency(e.target.checked)}
        name=""
        id=""
      />
      <span>{gearName}</span>
    </div>
  ) : (
    <p>...</p>
  );
};

export default GearProficiency;
