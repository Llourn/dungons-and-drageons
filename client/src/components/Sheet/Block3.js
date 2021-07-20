import ModValue from "../ModValue";

const Block3 = () => {
  return (
    <section>
      <p>
        <b>Block Three</b>
      </p>
      <section>
        <div>
          <span>AC</span>
          <ModValue />
        </div>
        <div>
          <span>Initiative</span>
          <ModValue />
        </div>
        <div>
          <span>Speed</span>
          <ModValue />
        </div>
      </section>
      <section>
        <div>
          <span>Hit Points</span>
          <ModValue />/<ModValue />
        </div>
        <div>
          <span>Temporary Hit Points</span>
          <ModValue />
        </div>
        <section>
          <span>Hit Dice</span>
          <div>
            <ModValue /> <span>Used</span>
          </div>
          <div>
            <ModValue /> <span>Total</span>
          </div>
          <div>
            <span>d8</span>
            <span>Die Size</span>
          </div>
        </section>
        <section>
          <span>Death Saves</span>
          <div>
            <span>Successes</span>
            <input type="checkbox" name="" id="" />
            <input type="checkbox" name="" id="" />
            <input type="checkbox" name="" id="" />
          </div>
          <div>
            <span>Failures</span>
            <input type="checkbox" name="" id="" />
            <input type="checkbox" name="" id="" />
            <input type="checkbox" name="" id="" />
          </div>
        </section>
      </section>
    </section>
  );
};

export default Block3;
