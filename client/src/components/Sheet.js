import ModValue from "./ModValue";

const sheet = () => {
  return (
    <div>
      <h2>This is a sheet</h2>
      <section className="character-info">
        <div className="character-name">
          <ModValue />
          <span>Character Name</span>
        </div>
        <div className="character-details">
          <div>
            Class: <ModValue />
          </div>
          <div>
            Level: <ModValue />
          </div>
          <div>
            Background: <ModValue />
          </div>
          <div>
            Player Name: <ModValue />
          </div>
          <div>
            Race: <ModValue />
          </div>
          <div>
            Alignment: <ModValue />
          </div>
          <div>
            Experience Points: <ModValue />
          </div>
        </div>
      </section>

      <section className="box-value">
        <span>Name:</span> <ModValue />
      </section>
    </div>
  );
};

export default sheet;
