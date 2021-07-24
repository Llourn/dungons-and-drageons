import ModText from "../../ModText";

const Attribute = ({ name, value }) => {
  return (
    <section className="attribute">
      <p className="label upper">{name}</p>
      <ModText content={value} />

      {console.log(typeof value)}
      {console.log(typeof value === "number")}

      <p>{typeof value === "number" ? Math.floor((value - 10) / 2) : 0}</p>
    </section>
  );
};

export default Attribute;
