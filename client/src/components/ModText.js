import { useState, useEffect } from "react";

const ModText = ({ content, updateValue }) => {
  const [toggle, setToggle] = useState(true);
  const [name, setName] = useState("?");
  const [originalName, setOriginalName] = useState("");

  const handleFocus = (event) => event.target.select();

  useEffect(() => {
    if (content !== undefined) {
      setName(content);
    } else {
      setName("?");
    }
  }, [content]);

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
      value={name}
      onChange={(event) => setName(event.target.value)}
      type="text"
      onFocus={(event) => handleFocus(event)}
      onBlur={() => setToggle(true)}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === "Tab") {
          // setName(event.target.value);
          setToggle(true);
          updateValue(name);
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
