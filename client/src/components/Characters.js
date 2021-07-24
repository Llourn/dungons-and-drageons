import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useFetch from "../useFetch";

const Characters = () => {
  const [showNewCharacterForm, setShowNewCharacterForm] = useState(false);
  const [characters, setCharacters] = useState([]);
  const [newCharacterName, setNewCharactername] = useState("");

  const {
    error,
    isPending,
    data: charactersData,
  } = useFetch(process.env.REACT_APP_API_BASE + "/characters");

  useEffect(() => {
    setCharacters(charactersData);
  }, [charactersData]);

  const toggleNewCharacterForm = () => {
    setShowNewCharacterForm(!showNewCharacterForm);
  };

  const handleCreate = async () => {
    const data = await fetch(
      process.env.REACT_APP_API_BASE + "/character/new",
      {
        crossDomain: true,
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          characterName: newCharacterName,
        }),
      }
    ).then((res) => res.json());

    setCharacters([...characters, data]);
  };

  return (
    <section className="characters-container">
      <h2>Characters</h2>
      <section className="character-list">
        {error && <div>{error}</div>}
        {isPending && <div>Loading...</div>}

        {characters &&
          (characters.length > 0 ? (
            characters.map((character) => (
              <Link to={`characters/${character._id}`} key={character._id}>
                {character.characterName}
              </Link>
            ))
          ) : (
            <p>You have no characters.</p>
          ))}
      </section>
      <button onClick={toggleNewCharacterForm}>New Character</button>
      <section
        className={
          showNewCharacterForm
            ? "new-character-form reveal"
            : "new-character-form"
        }
      >
        <h2>New Character Form</h2>
        <input
          type="text"
          value={newCharacterName}
          onChange={(e) => setNewCharactername(e.target.value)}
          placeholder="Enter Character Name"
          name=""
          id="new-character-name"
        />
        <button onClick={handleCreate}>Create</button>
        <button onClick={toggleNewCharacterForm}>Cancel</button>
      </section>
    </section>
  );
};

export default Characters;
