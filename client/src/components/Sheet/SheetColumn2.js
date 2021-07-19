import ModValue from "../ModValue";

const SheetColumn2 = () => {
  return (
    <section className="column-33">
      <div className="ac-init-spd">
        <div className="armor-class">
          <ModValue />
          <span>Armor Class</span>
        </div>
        <div className="initiative">
          <ModValue />
          <span>Initiative</span>
        </div>
        <div className="speed">
          <ModValue />
          <span>Speed</span>
        </div>
      </div>
      <div className="hit-points-and-death-saves">
        <div className="hit-points">
          <div className="current-hit-points">
            <span>Current hit points</span>
            <div className="current-hit-point-values">
              <ModValue />
              <span>/</span>
              <ModValue />
            </div>
          </div>
          <div className="temp-hit-points">
            <span>Temporary hit points</span>
            <ModValue />
          </div>
        </div>
        <div className="hit-dice-death-saves">
          <div className="hit-dice">
            <div>
              <span>Total Hit Dice</span>
              <ModValue />
            </div>
            <div>
              <span>Remaining Hit Dice</span>
              <ModValue />
            </div>
          </div>
          <div className="death-saves">
            <span>Death Saves</span>
            <div>
              <span>Successes</span>
              <div>
                <input type="checkbox" />
                <input type="checkbox" />
                <input type="checkbox" />
              </div>
            </div>
            <div>
              <span>Failures</span>
              <div>
                <input type="checkbox" />
                <input type="checkbox" />
                <input type="checkbox" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SheetColumn2;
