import Container from "../components/Container";
import EmptyState from "../components/EmptyState";
import getListings, { IListingsParams } from "../actions/getListings";
import ListingCard from "../components/listings/ListingCard";
import getCurrentUser from "../actions/getCurrentUser";
import Heading from "../components/Heading";

interface HyggeProps {
  searchParams: IListingsParams;
}
export default async function Hygge({ searchParams }: HyggeProps) {
  const listings = await getListings(searchParams);
  const isEmpty = true;
  const currentUser = await getCurrentUser();
  if (listings.length === 0) {
    return <EmptyState showReset />;
  }

  return (
    <main>
      <Container>
        <div className=" pt-36 lg:pt-28 sm:pt-24 pb-10 px-5 sm:px-2">
        <Heading title="Discover" subtitle="Find the best place for you!"/>
        </div>
        <div className="px-5 gap-4 grid grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1  sm:px-0 sm:gap-1">
          
          {listings?.map((listing) => (
            <ListingCard
              key={listing.id}
              data={listing}
              currentUser={currentUser}
            />
          ))}
        </div>
      </Container>
    </main>
  );
}
