import { useEffect, useState } from "react";

const Skill = ({
  name,
  modifier,
  skill,
  updateCharacter,
  jackOfAllTrades,
  proficiency,
}) => {
  const [skillModifier, setSkillModifier] = useState(0);
  const [skillObj, setSkillObj] = useState(skill);
  const skillName = `${camelize(name)}Skill`;

  useEffect(() => {
    updateCharacter(skillObj);
  }, [skillObj, updateCharacter]);

  useEffect(() => {
    let bonus = 0;
    if (skillObj && skillObj[skillName].expert) {
      bonus = proficiency * 2;
    } else if (skillObj && skillObj[skillName].proficient) {
      bonus = proficiency;
    } else if (jackOfAllTrades) {
      bonus = Math.floor(proficiency / 2);
    }
    setSkillModifier(bonus + modifier);
  }, [skillObj, modifier, skillName, proficiency, jackOfAllTrades]);

  function camelize(str) {
    return str.replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, function (match, index) {
      if (+match === 0) return ""; // or if (/\s+/.test(match)) for white spaces
      return index === 0 ? match.toLowerCase() : match.toUpperCase();
    });
  }

  const updateExpertise = (isExpert) => {
    setSkillObj(() => {
      let newSkill = Object.assign({}, skillObj);
      newSkill[skillName].expert = isExpert;
      return newSkill;
    });
  };

  const updateProficiency = (isProficient) => {
    setSkillObj(() => {
      let newSkill = Object.assign({}, skillObj);
      newSkill[skillName].proficient = isProficient;
      return newSkill;
    });
  };

  return skillObj ? (
    <div className="skill">
      <input
        type="checkbox"
        checked={skillObj[skillName].expert}
        onChange={(e) => updateExpertise(e.target.checked)}
        name=""
        id=""
      />
      <input
        type="checkbox"
        checked={skillObj[skillName].proficient}
        onChange={(e) => updateProficiency(e.target.checked)}
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
