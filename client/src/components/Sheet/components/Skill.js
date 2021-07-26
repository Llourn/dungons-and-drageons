import { useEffect, useState } from "react";

const Skill = ({
  name,
  expert,
  proficient,
  modifier,
  updateProf,
  updateExp,
}) => {
  const [skillModifier, setSkillModifier] = useState(0);

  useEffect(() => {
    console.log("UPDATE SKILL");
    let bonus = 0;
    if (expert) {
      bonus = 4;
    } else if (proficient) {
      bonus = 2;
    }
    setSkillModifier(bonus + modifier);
  }, [proficient, expert, modifier]);

  return (
    <div className="skill">
      <input
        type="checkbox"
        defaultChecked={expert}
        onChange={(e) => updateExp(e.target.checked)}
        name=""
        id=""
      />
      <input
        type="checkbox"
        defaultChecked={proficient}
        onChange={(e) => updateProf(e.target.checked)}
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
  );
};

export default Skill;
