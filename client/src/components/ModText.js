import { useState, useEffect } from "react";

const ModText = () => {
  const [toggle, setToggle] = useState(true);
  const [name, setName] = useState("test");
  const [originalName, setOriginalName] = useState("");

  useEffect(() => {
    // console.log("mount it!");
  }, []);

  const handleFocus = (event) => event.target.select();

  return toggle ? (
    <p
      className="mod-text"
      onDoubleClick={(event) => {
        setOriginalName(event.target.textContent);
        setToggle(false);
      }}
    >
      {name === "" ? "N/A" : name}
    </p>
  ) : (
    <input
      className="mod-text-input"
      autoFocus
      // placeholder={name}
      value={name}
      onChange={(event) => setName(event.target.value)}
      type="text"
      onFocus={(event) => handleFocus(event)}
      onBlur={() => setToggle(true)}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === "Tab") {
          // setName(event.target.value);
          setToggle(true);
          event.preventDefault();
          event.stopPropagation();
        } else if (event.key === "Escape") {
          setToggle(true);
          setName(originalName);
          event.preventDefault();
          event.stopPropagation();
        }
      }}
    />
  );
};

export default ModText;
