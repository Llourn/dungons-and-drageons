import ModValue from "../ModValue";

const Block2 = () => {
  return (
    <section>
      <p>
        <b>Block Two</b>
      </p>
      <section>
        <span>Racial Traits</span>
        <textarea name="" id="" cols="30" rows="10"></textarea>
      </section>
      <section>
        <span>Proficiencies</span>
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
        <ModValue />
        <span>Tools & Other Proficiencies</span>
        <ModValue />
      </section>
    </section>
  );
};

export default Block2;
