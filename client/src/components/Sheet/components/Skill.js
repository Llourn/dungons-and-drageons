import { useEffect, useState } from "react";

const Skill = ({ name, modifier, skill, updateCharacter }) => {
  const [skillModifier, setSkillModifier] = useState(0);
  const [skillObj, setSkillObj] = useState(null);
  const skillName = `${camelize(name)}Skill`;

  useEffect(() => {
    setSkillObj(skill);
  }, [skill]);

  useEffect(() => {
    let bonus = 0;
    if (skillObj && skillObj[skillName].expert) {
      bonus = 4;
    } else if (skillObj && skillObj[skillName].proficient) {
      bonus = 2;
    }
    setSkillModifier(bonus + modifier);
  }, [skillObj, modifier, skillName]);

  function camelize(str) {
    return str.replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, function (match, index) {
      if (+match === 0) return ""; // or if (/\s+/.test(match)) for white spaces
      return index === 0 ? match.toLowerCase() : match.toUpperCase();
    });
  }

  const updateExpertise = (isExpert) => {
    console.log(skillObj);
    setSkillObj(() => {
      let newSkill = Object.assign({}, skillObj);
      newSkill[skillName].expert = isExpert;
      return newSkill;
    });
    console.log(skillObj);
    updateCharacter(skillObj);
  };

  const updateProficiency = (isProficient) => {
    console.log(skillObj);
    setSkillObj(() => {
      let newSkill = Object.assign({}, skillObj);
      newSkill[skillName].proficient = isProficient;
      return newSkill;
    });
    console.log(skillObj);
    updateCharacter(skillObj);
  };

  return skillObj ? (
    <div className="skill">
      <input
        type="checkbox"
        defaultChecked={skillObj[skillName].expert}
        onClick={(e) => updateExpertise(e.target.checked)}
        name=""
        id=""
      />
      <input
        type="checkbox"
        defaultChecked={skillObj[skillName].proficient}
        onClick={(e) => updateProficiency(e.target.checked)}
        name=""
        id=""
      />
      {typeof skillModifier === "number" ? (
        <span>{skillModifier}</span>
      ) : (
        <span>0</span>
      )}
      <span>{name}</span>
    </div>
  ) : (
    <p>...</p>
  );
};

export default Skill;
