"use client";

import useCountries from "@/app/hooks/useCountries";
import { SafeListing, SafeReservation, SafeUser } from "@/app/types";
import { useRouter } from "next/navigation";
import { useCallback, useMemo } from "react";
import { format } from "date-fns";
import Image from "next/image";
import HeartButton from "../HeartButton";
import { BiMap } from "react-icons/bi";
import { BsCalendarDate } from "react-icons/bs";
import Button from "../Button";

interface ListingCardProps {
  data: SafeListing;
  reservation?: SafeReservation;
  onAction?: (id: string) => void;
  disabled?: boolean;
  actionLabel?: string;
  actionId?: string;
  currentUser?: SafeUser | null;
}

const ListingCard: React.FC<ListingCardProps> = ({
  data,
  reservation,
  onAction,
  disabled,
  actionId = "",
  actionLabel,
  currentUser,
}) => {
  const router = useRouter();
  const { getByValue } = useCountries();

  const location = getByValue(data.locationValue);

  const handleCancel = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();

    if (disabled) {
      return;
    }

    onAction?.(actionId)
  }, [disabled, onAction, actionId]);

  const price = useMemo(() => {
    if (reservation) {
      return reservation.totalPrice;
    }

    return data.price;
  }, [reservation, data.price]);

  const reservationDate = useMemo(() => {
    if (!reservation) {
      return null;
    }
  
    const start = new Date(reservation.startDate);
    const end = new Date(reservation.endDate);

    return `${format(start, 'PP')} - ${format(end, 'PP')}`;
  }, [reservation]);
  return (
    <div
      className="w-full h-full cursor-pointer"
      onClick={() => router.push(`/discover/listings/${data.id}`)} 
    >
      <div className="flex flex-col gap-2  shadow-lg rounded-xl overflow-hidden sm:w-full hover:shadow-xl ">
        <div className="h-[27vh] w-full  relative overflow-hidden 2xl:h-[30vh] md:h-[200px] sm:h-[50vh]">
          <Image
            fill
            alt="listing"
            src={data.imageSrc}
            className="object-cover h-full w-full hover:scale-110 transition  "
          />
          <div className="absolute top-3 right-3 z-10">
            <HeartButton listingId={data.id} currentUser={currentUser} />
          </div>
        </div>
        <div className=" h-[25vh] px-2 pb-4 flex flex-col gap-2">
          <div className="text-start">
            <span className="font-semibold  text-lg text-start lg:text-sm sm:text-lg ">{data.title}</span>
          </div>
          <div className="flex items-center">
            <BiMap />
            <span className="lg:text-sm ">
              {location?.region},{location?.label}
            </span>
          </div>
          <div className="flex gap-1 items-center">
            <span className="text-neutral-400 sm:text-sm">
              {reservationDate || data.category}
            </span>
          </div>
          <div className="flex items-center gap-1">
            <div className="font-semibold 2xl:text-xl sm:text-lg">Price:${price}</div>
            {!reservation && <div className="font-semibold sm:text-lg">night</div>}
          </div>
         
          {onAction && actionLabel && (
            <Button
              disabled={disabled}
              small
              label={actionLabel}
              onClick={handleCancel}
              width="w-full px-5"
            />
          )}
        
        </div>
      </div>
    </div>
  );
};

export default ListingCard;
