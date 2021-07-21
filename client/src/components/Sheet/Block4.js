import ModText from "../ModText";

const Block4 = () => {
  return (
    <section>
      <p className="block-title">
        <b>Block Four</b>
      </p>
      <section>
        <span>Attacks</span>
        <p>
          Create a DB of weapons that can be selected from so the
          stats/properties autopopulate.
        </p>
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
      <section>
        <span>Equipment</span>
        <p>
          Create a DB of equipment that can be selected from so the
          stats/properties autopopulate.
        </p>
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
      <section>
        <span>CP</span>
        <ModText />
        <span>SP</span>
        <ModText />
        <span>EP</span>
        <ModText />
        <span>GP</span>
        <ModText />
        <span>PP</span>
        <ModText />
      </section>
      <section>
        <span>Feats</span>
        <p>
          Create a DB of feats that can be selected from so the stats/properties
          autopopulate.
        </p>
      </section>
    </section>
  );
};

export default Block4;
