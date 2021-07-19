import SheetHeader from "./Sheet/SheetHeader";
import SheetColumn1 from "./Sheet/SheetColumn1";
import SheetColumn2 from "./Sheet/SheetColumn2";

const sheet = () => {
  return (
    <div>
      <h2>This is a sheet</h2>
      <SheetHeader />
      <section className="page-1">
        <SheetColumn1 />
        <SheetColumn2 />
      </section>
    </div>
  );
};

export default sheet;
