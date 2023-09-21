"use client";
import useCountries from "@/app/hooks/useCountries";
import useSearchModal from "@/app/hooks/useSearchModal";
import { differenceInDays } from "date-fns";
import { useMemo } from "react";
import { useSearchParams } from "next/navigation";
import { HiArrowNarrowRight as Arrow } from "react-icons/Hi";
const Search = () => {
  const searchModal = useSearchModal();
  const params = useSearchParams();
  const { getByValue } = useCountries();

  const locationValue = params?.get("locationValue");
  const startDate = params?.get("startDate");
  const endDate = params?.get("endDate");
  const guestCount = params?.get("guestCount");

  const locationLabel = useMemo(() => {
    if (locationValue) {
      return getByValue(locationValue as string)?.label;
    }

    return "Anywhere";
  }, [locationValue, getByValue]);

  const durationLabel = useMemo(() => {
    if (startDate && endDate) {
      const start = new Date(startDate as string);
      const end = new Date(endDate as string);
      let diff = differenceInDays(end, start);

      if (diff === 0) {
        diff = 1;
      }

      return `${diff} Days`;
    }

    return "Any Week";
  }, [startDate, endDate]);

  const guestLabel = useMemo(() => {
    if (guestCount) {
      return `${guestCount} Guests`;
    }

    return "Add Guests";
  }, [guestCount]);

  return (
    <div
      className="bg-white cursor-pointer text-neutral-400 shadow-md flex w-[40%]  justify-between gap-2 text-xl   items-center rounded-full border px-3 xl:w-[55%] md:w-2/3 md:py-2 sm:py-2 sm:px-1 sm:gap-0"
      onClick={searchModal.onOpen}
    >
      <span className="px-5 text-lg 2xl:text-2xl lg:text-sm sm:px-1 sm:text-[0.7rem] xs:text-[0.55rem]">{locationLabel}</span>
      <span className="border-x border-gray-200 px-5 text-lg 2xl:text-2xl lg:text-sm sm:px-1 sm:text-[0.7rem] xs:text-[0.55rem]">{durationLabel}</span>
      <span className="text-lg 2xl:text-2xl lg:text-sm sm:px-1 sm:text-[0.7rem] xs:text-[0.55rem]">{guestLabel}</span>
      <div>
        <button
          type="button"
          className="bg-green-400  w-12 h-12 md:p-2 sm:w-6 sm:h-6 sm:p-0 flex items-center justify-center rounded-full hover:bg-green-200"
        >
          <Arrow className="2xl:text-3xl  text-gray-600 sm:text-sm" />
        </button>
      </div>
    </div>
  );
};

export default Search;
