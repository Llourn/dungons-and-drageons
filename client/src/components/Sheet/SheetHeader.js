import ModValue from "../ModValue";

const SheetHeader = () => {
  return (
    <section className="character-info">
      <div className="character-name">
        <ModValue />
        <span>Character Name</span>
      </div>
      <div className="character-details">
        <div>
          <ModValue />
          <span>Class</span>
        </div>
        <div>
          <ModValue />
          <span>Level</span>
        </div>
        <div>
          <ModValue />
          <span>Background</span>
        </div>
        <div>
          <ModValue />
          <span>Player Name</span>
        </div>
        <div>
          <ModValue />
          <span>Race</span>
        </div>
        <div>
          <ModValue />
          <span>Alignment</span>
        </div>
        <div>
          <ModValue />
          <span>Experience Points</span>
        </div>
      </div>
    </section>
  );
};

export default SheetHeader;
