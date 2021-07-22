import ModText from "../ModText";

const Block4 = () => {
  return (
    <section>
      <p className="block-title">
        <b>Block Four A</b>
      </p>
      <section className="attacks">
        <p>Attacks</p>
        <div>
          <p className="label upper">Name</p>
          <p className="label upper">Atk Bonus</p>
          <p className="label upper">Damage/Type</p>
        </div>
        <div>
          <ModText />
          <ModText />
          <ModText />
        </div>
        <div>
          <ModText />
          <ModText />
          <ModText />
        </div>
        <div>
          <ModText />
          <ModText />
          <ModText />
        </div>
      </section>
      <section className="equipment">
        <span>Equipment</span>
        <div>
          <p className="label upper">Name</p>
          <p className="label upper">AC</p>
          <p className="label upper">Add'l stats</p>
        </div>
        <div>
          <ModText />
          <ModText />
          <ModText />
        </div>
        <div>
          <ModText />
          <ModText />
          <ModText />
        </div>
        <div>
          <ModText />
          <ModText />
          <ModText />
        </div>
      </section>
      <section className="currency">
        <div>
          <span>CP</span>
          <ModText />
        </div>
        <div>
          <span>SP</span>
          <ModText />
        </div>
        <div>
          <span>EP</span>
          <ModText />
        </div>
        <div>
          <span>GP</span>
          <ModText />
        </div>
        <div>
          <span>PP</span>
          <ModText />
        </div>
      </section>
    </section>
  );
};

export default Block4;
