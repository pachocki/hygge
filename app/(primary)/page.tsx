import EmptyState from "../components/EmptyState";
import getListings, { IListingsParams } from "../actions/getListings";
import getCurrentUser from "../actions/getCurrentUser";
import Hero from "../components/Hero";

import ListingsGrid from "../components/ListingGrid";
import About from "../components/homepage/About";
import Recomended from "../components/homepage/Recomended";
import Instagram from "../components/homepage/Instagram";
import Newsletter from "../components/homepage/Newsletter";

interface HomeProps {
  searchParams: IListingsParams;
}
export default async function Home({ searchParams }: HomeProps) {
  const listings = await getListings(searchParams);
  const isEmpty = true;
  const currentUser = await getCurrentUser();

  if (listings.length === 0) {
    return (
      <>
        <EmptyState />
      </>
    );
  }

  return (
    <main>
      <Hero />
      <ListingsGrid listings={listings} currentUser={currentUser} />
      <About />
      <Recomended listings={listings} />
      <Instagram/>
      <Newsletter/>
    </main>
  );
}
