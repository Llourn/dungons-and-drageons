import ModText from "../ModText";

const Block3 = () => {
  return (
    <section>
      <p className="block-title">
        <b>Block Three</b>
      </p>
      <section className="ac-block">
        <div>
          <p>AC</p>
          <ModText />
        </div>
        <div>
          <p>Initiative</p>
          <ModText />
        </div>
        <div>
          <p>Speed</p>
          <ModText />
        </div>
      </section>
      <section className="hp-block">
        <div className="hp">
          <p>Hit Points</p>
          <div className="hp-values">
            <ModText />
            <span>/</span>
            <ModText />
          </div>
        </div>
        <div>
          <span>Temporary Hit Points</span>
          <ModText />
        </div>
        <section className="hit-dice">
          <span>Hit Dice</span>
          <div>
            <ModText /> <span>Used</span>
          </div>
          <div>
            <ModText /> <span>Total</span>
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
