import Tiptap from "../Tiptap";

const Block2 = () => {
  return (
    <section>
      <p className="block-title">
        <b>Block Two</b>
      </p>
      <section>
        <span>Racial Traits</span>
        <Tiptap content="<p>Click here to edit this section. 📝</p>" />
      </section>
      <section className="proficiencies">
        <div>
          <span>Proficiencies</span>
        </div>
        <div>
          <input type="checkbox" name="" id="" />
          <span>Light Armour</span>
        </div>
        <div>
          <input type="checkbox" name="" id="" />
          <span>Medium Armour</span>
        </div>
        <div>
          <input type="checkbox" name="" id="" />
          <span>Heavy Armour</span>
        </div>
        <div>
          <input type="checkbox" name="" id="" />
          <span>Simple Weapons</span>
        </div>
        <div>
          <input type="checkbox" name="" id="" />
          <span>Martial Weapons</span>
        </div>
        <div>
          <input type="checkbox" name="" id="" />
          <span>Shields</span>
        </div>
      </section>
      <section>
        <span>Languages</span>
        <Tiptap content="<p>Click here to edit this section. 📝</p>" />
        <span>Tools & Other Proficiencies</span>
        <Tiptap content="<p>Click here to edit this section. 📝</p>" />
      </section>
    </section>
  );
};

export default Block2;
