import ModValue from "../ModValue";

const SheetHeader = () => {
  return (
    <section className="sheet-header">
      <p>
        <b>Sheet header</b>
      </p>
      <section className="character-name">
        <ModValue />
        <span>Character Name</span>
      </section>
      <section className="character-details">
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
      </section>
      <section className="class-details">
        <div>
          <ModValue />
          <span>Class</span>
        </div>
        <div>
          <ModValue />
          <span>Level</span>
        </div>
      </section>
    </section>
  );
};

export default SheetHeader;
