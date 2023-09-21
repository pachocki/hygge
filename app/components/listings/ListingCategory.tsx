"use client";

import { IconType } from "react-icons";

interface ListingCategoryProps {
  icon: IconType;
  label: string;
  description: string;
}

const ListingCategory: React.FC<ListingCategoryProps> = ({
  icon: Icon,
  label,
  description,
}) => {
  return (
    <div className="flex flex-col gap-6 pt-5">
      <div className="flex items-center gap-4">
        <Icon className="text-neutral-600 text-5xl" />
        <div className="flex flex-col">
          <div className="text-lg font-semibold">
            <span>{label}</span>
          </div>
          <div className="text-lg font-semibold">
            <span className="text-neutral500 font-light sm:text-sm">{description}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListingCategory;
