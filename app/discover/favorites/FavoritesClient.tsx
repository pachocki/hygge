"use client";

import Container from "../../components/Container";
import Heading from "../../components/Heading";
import ListingCard from "../../components/listings/ListingCard";
import { SafeListing, SafeUser } from "../../types";

interface FavoritesClientProps {
  currentUser: SafeUser | null;
  listings: SafeListing[];
}

const FavoritesClient: React.FC<FavoritesClientProps> = ({
  listings,
  currentUser,
}) => {
  return (
    <div className="pt-32 px-5 2xl:pt-40 sm:pt-24 sm:px-2">
      <Container>
        <Heading title="Favorites" subtitle="List of favorites places" />
        <div
          className="  mt-10
          gap-4 grid grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1  sm:px-0 sm:gap-1"
        >
          {listings.map((listing) => (
            <ListingCard
              currentUser={currentUser}
              key={listing.id}
              data={listing}
            />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default FavoritesClient;
