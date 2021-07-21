import { useState, useEffect } from "react";

const ModTextArea = () => {
  const [toggle, setToggle] = useState(true);
  const [name, setName] = useState("test");
  const [originalName, setOriginalName] = useState("");

  useEffect(() => {
    // console.log("mount it!");
  }, []);

  const handleFocus = (event) => event.target.select();

  const readName = () => {
    return name.replace(/<br\s?\/?>/g, "\n");
  };

  const writeName = () => {
    setToggle(true);
    const newName = name.replace(/\r\n|\r|\n/g, "<br />");
    setName(newName);
  };

  return toggle ? (
    <p
      className="mod-textarea"
      onDoubleClick={(event) => {
        console.log("CLICK");
        setName(name.replace(/<br\s?\/?>/g, "\n"));
        setOriginalName(event.target.textContent);
        setToggle(false);
      }}
    >
      {name === "" ? "N/A" : name}
    </p>
  ) : (
    <div>
      <textarea
        className="mod-textarea-input"
        autoFocus
        // placeholder={name}
        value={name}
        onChange={(event) => setName(event.target.value)}
        onFocus={(event) => handleFocus(event)}
      />
      <button onClick={() => writeName()}>OK</button>
      <button
        onClick={() => {
          setToggle(true);
          setName(originalName);
        }}
      >
        Cancel
      </button>
    </div>
  );
};

export default ModTextArea;
