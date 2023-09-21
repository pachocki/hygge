"use client";

import useCountries from "@/app/hooks/useCountries";
import { SafeUser } from "@/app/types";
import { IconType } from "react-icons";
import Avatar from "../Avatar";
import ListingCategory from "./ListingCategory";
import dynamic from "next/dynamic";

const Map = dynamic(() => import("../Map"), {
  ssr: false,
});

interface ListingInfoProps {
  user: SafeUser;
  description: string;
  guestCount: number;
  roomCount: number;
  bathroomCount: number;
  category:
    | {
        icon: IconType;
        label: string;
        description: string;
      }
    | undefined;
  locationValue: string;
}

const ListingInfo: React.FC<ListingInfoProps> = ({
  user,
  description,
  guestCount,
  roomCount,
  bathroomCount,
  category,
  locationValue,
}) => {
  const { getByValue } = useCountries();
  const cordinates = getByValue(locationValue)?.latlng;

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        <div className="text-xl font-semibold flex items-center gap-2 2xl:text-3xl">
          <h2>Hosted by {user?.name}</h2>
          <Avatar src={user?.image} />
        </div>
        <div className="flex flex-row items-center gap-4 font-light text-neutral-500 2xl:text-xl sm:text-sm ">
          <div>
            <span>Max guests:{guestCount} </span>
          </div>
          <div>
            <span>Rooms:{roomCount} </span>
          </div>
          <div>
            <span>Bathrooms:{bathroomCount} </span>
          </div>
        </div>
        {category && (
          <ListingCategory
            icon={category.icon}
            label={category.label}
            description={category.description}
          />
        )}
        <div className="text-lg font-light 2xl:text-2xl text-neutral-500">{description}</div>
      </div>
      <Map center={cordinates}/>
    </div>
  );
};

export default ListingInfo;
