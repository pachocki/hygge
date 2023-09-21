"use client";
import { Range } from "react-date-range";
import Calendar from "../inputs/Calendar";
import Button from "../Button";
interface ListingReservationProps {
  price: number;
  dateRange: Range;
  totalPrice: number;
  onChangeDate: (value: Range) => void;
  onSubmit: () => void;
  disabled: boolean;
  disabledDates: Date[];
}

const ListingReservation: React.FC<ListingReservationProps> = ({
  price,
  dateRange,
  totalPrice,
  onChangeDate,
  disabled,
  onSubmit,
  disabledDates,
}) => {
  return (
    <div>
      <div className="bg-white rounded-xl border shadow-lg sticky top-64 inline-block w-full px-5">
        <div className="flex items-center gap-1 p-4 ">
          <span className="text-2xl font-semibold 2xl:text-3xl">${price}</span>
          <span className=" font-light text-neutral-500">night</span>
        </div>
        <hr />
        <Calendar
          value={dateRange}
          disabledDates={disabledDates}
          onChange={(value) => onChangeDate(value.selection)}
        />
        <Button disabled={disabled} label="Book" onClick={onSubmit} width="w-full"/>
        <div className="p-4 flex items-center justify-between font-semibold text-lg 2xl:text-3xl">
          <span>Total:</span>
          <span>${totalPrice}</span>
        </div>
      </div>
    </div>
  );
};

export default ListingReservation;
