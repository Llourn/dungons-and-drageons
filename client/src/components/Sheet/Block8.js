import Tiptap from "../Tiptap";

const Block8 = () => {
  return (
    <section>
      <p className="block-title">
        <b>Block Eight</b>
      </p>
      <p>Allies & Organizations</p>
      <Tiptap content="Click here to edit this section. 📝" />
      <p>Enemies</p>
      <Tiptap content="Click here to edit this section. 📝" />
    </section>
  );
};

export default Block8;
