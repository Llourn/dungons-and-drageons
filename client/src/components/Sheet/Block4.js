import ModValue from "../ModValue";

const Block4 = () => {
  return (
    <section>
      <p>
        <b>Block Four</b>
      </p>
      <section>
        <span>Attacks</span>
        <p>
          Create a DB of weapons that can be selected from so the
          stats/properties autopopulate.
        </p>
        <div>
          <ModValue />
          <ModValue />
          <ModValue />
        </div>
        <div>
          <ModValue />
          <ModValue />
          <ModValue />
        </div>
        <div>
          <ModValue />
          <ModValue />
          <ModValue />
        </div>
      </section>
      <section>
        <span>Equipment</span>
        <p>
          Create a DB of equipment that can be selected from so the
          stats/properties autopopulate.
        </p>
        <div>
          <ModValue />
          <ModValue />
          <ModValue />
        </div>
        <div>
          <ModValue />
          <ModValue />
          <ModValue />
        </div>
        <div>
          <ModValue />
          <ModValue />
          <ModValue />
        </div>
      </section>
      <section>
        <span>CP</span>
        <ModValue />
        <span>SP</span>
        <ModValue />
        <span>EP</span>
        <ModValue />
        <span>GP</span>
        <ModValue />
        <span>PP</span>
        <ModValue />
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
