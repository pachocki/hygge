"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { useCallback, useRef } from "react";
import { IconType } from "react-icons";
import qs from "query-string";

interface CategoryBoxProps {
  icon: IconType;
  label: string;
  selected?: boolean;
  description?: string;
  color?: string;
}
const CategoryBox: React.FC<CategoryBoxProps> = ({
  icon: Icon,
  label,
  selected,
  color
}) => {
  const router = useRouter();
  const params = useSearchParams();


  const handleClick = useCallback(() => {
    let currentQuery = {};
    if (params) {
      currentQuery = qs.parse(params.toString());
    }
    const updateQuery: any = {
      ...currentQuery,
      category: label,
    };
    if (params?.get("category") === label) {
      delete updateQuery.category;
    }
 

    const queryString = qs.stringify(updateQuery, { skipNull: true });
    const url = `/discover/?${queryString}`;
    router.push(url);
  }, [label, params, router]);

  return (
    <div
      onClick={handleClick}
      className={`${color} flex flex-col items-center justify-center gap-2 p-3 border-b-2 hover:text-neutral-800 transition cursor-pointer
        ${selected ? "border-b-green-400" : "border-transparent"}
        ${selected ? "text-neutral-500" : "text-black"}
        `}
    >
      <Icon className="text-2xl 2xl:text-4xl sm:text-md" />
      <div className="font-medium text-sm 2xl:text-xl sm:text-[0.7rem]">{label}</div>
    </div>
  );
};

export default CategoryBox;
