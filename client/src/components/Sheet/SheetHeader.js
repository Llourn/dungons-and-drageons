import ModText from "../ModText";

const SheetHeader = ({ character, updateCharacter }) => {
  const updateCharacterName = (value) => {
    updateCharacter({ characterName: value });
  };

  const updateCharacterBackground = (value) => {
    updateCharacter({ background: value });
  };

  const updateCharacterPlayerName = (value) => {
    updateCharacter({ playerName: value });
  };

  const updateCharacterRace = (value) => {
    updateCharacter({ race: value });
  };

  const updateCharacterAlignment = (value) => {
    updateCharacter({ alignment: value });
  };

  const updateCharacterExperiencePoints = (value) => {
    updateCharacter({ experiencePoints: value });
  };

  const updateCharacterCharacterClass = (value) => {
    updateCharacter({ characterClass: value });
  };

  const updateCharacterLevel = (value) => {
    updateCharacter({ level: value });
  };

  return (
    <section className="sheet-header">
      <p className="block-title">
        <b>Sheet header</b>
      </p>
      <section className="character-name">
        <ModText
          content={character.characterName}
          updateValue={updateCharacterName}
        />
        <p className="label upper">Character Name</p>
      </section>
      <section className="character-details">
        <div>
          <ModText
            content={character.background}
            updateValue={updateCharacterBackground}
          />
          <p className="label upper">Background</p>
        </div>
        <div>
          <ModText
            content={character.playerName}
            updateValue={updateCharacterPlayerName}
          />
          <p className="label upper">Player Name</p>
        </div>
        <div>
          <ModText content={character.race} updateValue={updateCharacterRace} />
          <p className="label upper">Race</p>
        </div>
        <div>
          <ModText
            content={character.alignment}
            updateValue={updateCharacterAlignment}
          />
          <p className="label upper">Alignment</p>
        </div>
        <div>
          <ModText
            content={character.experiencePoints}
            updateValue={updateCharacterExperiencePoints}
          />
          <p className="label upper">Experience Points</p>
        </div>
      </section>
      <section className="class-details">
        <div>
          <ModText
            content={character.CharacterClass}
            updateValue={updateCharacterCharacterClass}
          />
          <p className="label upper">Class</p>
        </div>
        <div>
          <ModText
            content={character.level}
            updateValue={updateCharacterLevel}
          />
          <p className="label upper">Level</p>
        </div>
      </section>
    </section>
  );
};

export default SheetHeader;
