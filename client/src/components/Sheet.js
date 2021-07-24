import { useParams } from "react-router-dom";
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
import Block11 from "./Sheet/Block11";
import Block12 from "./Sheet/Block12";
import Block13 from "./Sheet/Block13";
import Block4b from "./Sheet/Block4b";
import useFetch from "../useFetch";

const Sheet = () => {
  const { id } = useParams();
  const {
    error,
    isPending,
    data: character,
  } = useFetch(process.env.REACT_APP_API_BASE + "/characters/" + id);
  return (
    <div>
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}

      {character && (
        <div className="sheet">
          {console.log(character)}
          <SheetHeader character={character} />
          <Block1 character={character} />
          <Block2 character={character} />
          <Block3 character={character} />
          <Block4 />
          <Block4b />
          <Block5 />
          <Block6 />
          <Block7 />
          <Block8 />
          <Block9 />
          <Block10 />
          <Block11 />
          <Block12 />
          <Block13 />
        </div>
      )}
    </div>
  );
};

export default Sheet;
