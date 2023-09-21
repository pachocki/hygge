"use client";
import { toast } from "react-hot-toast";
import axios from "axios";
import { useCallback, useState } from "react";
import { useRouter } from "next/navigation";
import { SafeReservation, SafeUser } from "../../types/index";
import Heading from "../../components/Heading";
import Container from "../../components/Container";
import ListingCard from "../../components/listings/ListingCard";
interface ReservationsClientProps {
  reservations: SafeReservation[];
  currentUser?: SafeUser | null;
}
const ReservationClient: React.FC<ReservationsClientProps> = ({
  reservations,
  currentUser,
}) => {
  const router = useRouter();
  const [deletingId, setDeletingId] = useState("");
  const onCancel = useCallback(
    (id: string) => {
      setDeletingId(id);
      axios
        .delete(`/api/reservations/${id}`)
        .then(() => {
          toast.success("Reservation canceled");
          router.refresh();
        })
        .catch(() => {
          toast.error("Something went wrong");
        })
        .finally(() => {
          setDeletingId("");
        });
    },
    [router]
  );
  return (
    <div className="pt-32 px-5 2xl:pt-40  sm:pt-24 sm:px-2">
      <Container>
        <Heading title="Reservations" subtitle="Bookings on your properties" />
        <div
          className="  mt-10
         gap-4 grid grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1  sm:px-0 sm:gap-1"
        >
          {reservations.map((reservation) => (
            <ListingCard
              key={reservation.id}
              data={reservation.listing}
              actionId={reservation.id}
              onAction={onCancel}
              disabled={deletingId === reservation.id}
              actionLabel="Cancel guest reservation"
              currentUser={currentUser}
            />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default ReservationClient;
