import { useState, useEffect } from "react";
import Tiptap from "./Tiptap";

const ModTextArea = () => {
  const [toggle, setToggle] = useState(true);
  const [name, setName] = useState("test");

  useEffect(() => {
    // console.log("mount it!");
  }, []);

  return toggle ? (
    <p
      className="mod-textarea"
      onDoubleClick={(event) => {
        console.log("CLICK");
        setName(name.replace(/<br\s?\/?>/g, "\n"));
        setToggle(false);
      }}
    >
      {name === "" ? "N/A" : name}
    </p>
  ) : (
    <div>
      <Tiptap />
      {/* <textarea
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
      </button> */}
    </div>
  );
};

export default ModTextArea;
