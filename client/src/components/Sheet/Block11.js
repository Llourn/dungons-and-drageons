import ModText from "../ModText";

const Block11 = () => {
  return (
    <section className="spellcasting-info">
      <p className="block-title">
        <b>Block Eleven</b>
      </p>
      <section>
        <ModText />
        <p className="label upper">Spellcasting Class</p>
      </section>
      <section>
        <ModText />
        <p className="label upper">Spellcasting Ability</p>
      </section>
      <section>
        <ModText />
        <p className="label upper">Spell Save DC</p>
      </section>
      <section>
        <ModText />
        <p className="label upper">Spell Attack Bonus</p>
      </section>
    </section>
  );
};

export default Block11;
