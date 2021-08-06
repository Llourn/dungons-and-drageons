import { useEffect, useState } from "react";

const DeathSave = ({ name, data, updateCharacter }) => {
  const [dataObj, setDataObj] = useState(data);
  let fullName = `deathSave${name}`;

  useEffect(() => {
    updateCharacter(dataObj);
  }, [dataObj, updateCharacter]);

  const updateSaves = (index, value) => {
    let newData = Object.assign({}, dataObj);
    newData[fullName][index] = value;
    setDataObj(newData);
  };

  return (
    <div>
      <span>{name}</span>
      <input
        type="checkbox"
        checked={dataObj[fullName][0]}
        onChange={(e) => updateSaves(0, e.target.checked)}
      />
      <input
        type="checkbox"
        checked={dataObj[fullName][1]}
        onChange={(e) => updateSaves(1, e.target.checked)}
      />
      <input
        type="checkbox"
        checked={dataObj[fullName][2]}
        onChange={(e) => updateSaves(2, e.target.checked)}
      />
    </div>
  );
};

export default DeathSave;
