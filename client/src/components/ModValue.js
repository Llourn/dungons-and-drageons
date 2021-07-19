import { useState, useEffect } from "react";

const ModValue = () => {
  const [toggle, setToggle] = useState(true);
  const [name, setName] = useState("test");

  useEffect(() => {
    console.log("mount it!");
  }, []);

  return toggle ? (
    <p
      className="mod-value"
      onDoubleClick={() => {
        setToggle(false);
      }}
    >
      {name}
    </p>
  ) : (
    <input
      className="mod-value-input"
      autoFocus
      placeholder={name}
      type="text"
      onBlur={() => setToggle(true)}
      onKeyDown={(event) => {
        if (event.key === "Enter") {
          setName(event.target.value);
          setToggle(true);
          event.preventDefault();
          event.stopPropagation();
        } else if (event.key === "Escape") {
          setToggle(true);
          event.preventDefault();
          event.stopPropagation();
        }
      }}
    />
  );
};

export default ModValue;
