type Props = {
  handlerSelect: (num: number) => void;
};

export const SelectElementsPerPage: React.FC<Props> = ({ handlerSelect }) => {
  const selectValues = [4, 8, 16, 32];
  return (
    <select
      name="itemsPerPage"
      onChange={(e) => handlerSelect(+e.target.value)}
      className="w-10 border-1 rounded-sm"
    >
      {selectValues.map((value) => (
        <option key={value} className="text-black" value={`${value}`}>
          {value}
        </option>
      ))}
    </select>
  );
};
