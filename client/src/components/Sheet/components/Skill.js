import { useEffect, useState } from "react";

const Skill = ({ name, expert, proficient, attribute }) => {
  const [skillModifier, setSkillModifier] = useState(0);

  useEffect(() => {
    const attributeModifier = Math.floor((attribute - 10) / 2);
    let bonus = 0;
    if (expert) {
      bonus = 4;
    } else if (proficient) {
      bonus = 2;
    }
    setSkillModifier(bonus + attributeModifier);
  }, [proficient, expert, attribute]);

  return (
    <div className="skill">
      <input type="checkbox" defaultChecked={expert} name="" id="" />
      <input type="checkbox" defaultChecked={proficient} name="" id="" />
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
