const SavingThrow = ({ proficient, attributeValue }) => {
  return (
    <div className="saving-throw">
      <input type="checkbox" defaultChecked={proficient} name="" id="" />
      {typeof attributeValue === "number" ? (
        <span>
          {proficient
            ? Math.floor((attributeValue - 10) / 2) + 2
            : Math.floor((attributeValue - 10) / 2)}
        </span>
      ) : (
        <span>0</span>
      )}
      <span>Saving throws</span>
    </div>
  );
};

export default SavingThrow;
