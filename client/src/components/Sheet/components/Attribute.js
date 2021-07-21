import ModText from "../../ModText";

const Attribute = ({ name }) => {
  return (
    <section className="attribute">
      <p className="label upper">{name}</p>
      <ModText />
      <p>#</p>
    </section>
  );
};

export default Attribute;
