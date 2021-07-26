import ModText from "../../ModText";

const Attribute = ({ name, value, modifier, updateValue }) => {
  return (
    <section className="attribute">
      <p className="label upper">{name}</p>
      <ModText content={value} updateValue={updateValue} />
      <p>{typeof modifier === "number" ? modifier : 0}</p>
    </section>
  );
};

export default Attribute;
