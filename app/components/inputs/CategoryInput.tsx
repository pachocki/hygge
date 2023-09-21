"use client";
import { IconType } from "react-icons";
interface CategoryInputProps {
  icon: IconType;
  label: string;
  selected?: boolean;
  onClick: (value: string) => void;
}
const CategoryInput: React.FC<CategoryInputProps> = ({
  icon: Icon,
  label,
  selected,
  onClick,
}) => {
  return (
    <div
      onClick={() => onClick(label)}
      className={`rounded-xl border-2 py-1 px-4 flex-col gap-3 hover:border-green-400 cursor-pointer sm:w-full ${
        selected ? "border-green-400 bg-green-50" : "border-neutral-200"
      }`}
    >
      <div className="flex items-center gap-2 sm:w-full sm:justify-center ">
        <div>
          <Icon size={30} />
        </div>
        <div>{label}</div>
      </div>
    </div>
  );
};

export default CategoryInput;
