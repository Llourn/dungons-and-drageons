import ModText from "../ModText";

const SheetHeader = ({ character }) => {
  return (
    <section className="sheet-header">
      <p className="block-title">
        <b>Sheet header</b>
      </p>
      <section className="character-name">
        <ModText content={character.characterName} />
        <p className="label upper">Character Name</p>
      </section>
      <section className="character-details">
        <div>
          <ModText content={character.background} />
          <p className="label upper">Background</p>
        </div>
        <div>
          <ModText content={character.playerName} />
          <p className="label upper">Player Name</p>
        </div>
        <div>
          <ModText content={character.race} />
          <p className="label upper">Race</p>
        </div>
        <div>
          <ModText content={character.alignment} />
          <p className="label upper">Alignment</p>
        </div>
        <div>
          <ModText content={character.experiencePoints} />
          <p className="label upper">Experience Points</p>
        </div>
      </section>
      <section className="class-details">
        <div>
          <ModText content={character.class} />
          <p className="label upper">Class</p>
        </div>
        <div>
          <ModText content={character.level} />
          <p className="label upper">Level</p>
        </div>
      </section>
    </section>
  );
};

export default SheetHeader;
