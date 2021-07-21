import ModText from "../ModText";

const Block3 = () => {
  return (
    <section>
      <p>
        <b>Block Three</b>
      </p>
      <section>
        <div>
          <span>AC</span>
          <ModText />
        </div>
        <div>
          <span>Initiative</span>
          <ModText />
        </div>
        <div>
          <span>Speed</span>
          <ModText />
        </div>
      </section>
      <section>
        <div>
          <span>Hit Points</span>
          <ModText />/<ModText />
        </div>
        <div>
          <span>Temporary Hit Points</span>
          <ModText />
        </div>
        <section>
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
