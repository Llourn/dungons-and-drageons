import ModText from "../ModText";
const Block13 = () => {
  return (
    <section>
      <p className="block-title">
        <b>Block Thirteen</b>
      </p>
      <section className="spells-header">
        <section>
          <p className="label upper">Spell Level</p>
          <ModText />
          {/* <p>1</p> */}
        </section>
        <section>
          <p className="label upper">Slots total</p>
          <ModText />
          {/* <p>3</p> */}
        </section>
        <section>
          <p className="label upper">Slots expended</p>
          <ModText />
          {/* <p>0</p> */}
        </section>
      </section>
      <section>
        <p>SPELL NAME</p>
      </section>
    </section>
  );
};

export default Block13;
