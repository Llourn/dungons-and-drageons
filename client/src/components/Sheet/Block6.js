import ModText from "../ModText";
import characterImage from "../../img/characterImage.png";

const Block6 = () => {
  return (
    <section>
      <p className="block-title">
        <b>Block Six</b>
      </p>
      <section className="character-appearance">
        <section>
          <p>[Character Name Placeholder]</p>
          <p className="label upper">Character Name</p>
        </section>
        <div>
          <ModText />
          <p className="label upper">Age</p>
        </div>
        <div>
          <ModText />
          <p className="label upper">Height</p>
        </div>
        <div>
          <ModText />
          <p className="label upper">Weight</p>
        </div>
        <div>
          <ModText />
          <p className="label upper">Eyes</p>
        </div>
        <div>
          <ModText />
          <p className="label upper">Skin</p>
        </div>
        <div>
          <ModText />
          <p className="label upper">Hair</p>
        </div>
      </section>
      <section className="character-appearance-image">
        <span>Character Appearance</span>
        <img src={characterImage} alt="" />
      </section>
    </section>
  );
};

export default Block6;
