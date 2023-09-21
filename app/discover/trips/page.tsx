import EmptyState from "../../components/EmptyState";
import getCurrentUser from "../../actions/getCurrentUser";
import getReservations from "../../actions/getReservations";
import TripsClient from "./TripsClient";

const TripsPage = async () => {
  const currentUser = await getCurrentUser();
  if (!currentUser) {
    return <EmptyState title="Unauthorized" subtitle="Please Login" />;
  }

  const reservations = await getReservations({ userId: currentUser.id });
  if (reservations.length === 0) {
    return (
      <EmptyState
        title="No trips found"
        subtitle="Looks like you dont have any trips"
      />
    );
  }
  return (
    <div className="pt-32 2xl:pt-40 lg:pt-24 px-5 sm:px-2">
      <TripsClient reservations={reservations} currentUser={currentUser} />
    </div>
  );
};

export default TripsPage;
