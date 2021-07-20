import SheetHeader from "./Sheet/SheetHeader";
import Block1 from "./Sheet/Block1";
import Block2 from "./Sheet/Block2";
import Block3 from "./Sheet/Block3";
import Block4 from "./Sheet/Block4";
import Block5 from "./Sheet/Block5";
import Block6 from "./Sheet/Block6";
import Block7 from "./Sheet/Block7";
import Block8 from "./Sheet/Block8";
import Block9 from "./Sheet/Block9";
import Block10 from "./Sheet/Block10";

const sheet = () => {
  return (
    <div>
      <h2>This is a sheet</h2>
      <SheetHeader />
      <Block1 />
      <Block2 />
      <Block3 />
      <Block4 />
      <Block5 />
      <Block6 />
      <Block7 />
      <Block8 />
      <Block9 />
      <Block10 />
    </div>
  );
};

export default sheet;
