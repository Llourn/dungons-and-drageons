import Tiptap from "../Tiptap";

const Block5 = () => {
  return (
    <section>
      <p className="block-title">
        <b>Block Five</b>
      </p>
      <section>
        <span>Personality Traits</span>
        <Tiptap content="Click here to edit this section. 📝" />
      </section>
      <section>
        <span>Ideals</span>
        <Tiptap content="Click here to edit this section. 📝" />
      </section>
      <section>
        <span>Bonds</span>
        <Tiptap content="Click here to edit this section. 📝" />
      </section>
      <section>
        <span>Flaws</span>
        <Tiptap content="Click here to edit this section. 📝" />
      </section>
    </section>
  );
};

export default Block5;
