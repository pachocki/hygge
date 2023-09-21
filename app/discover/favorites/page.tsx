import EmptyState from "../../components/EmptyState";
import getCurrentUser from "../../actions/getCurrentUser";
import getFavoriteListing from "../../actions/getFavoriteListing";
import FavoritesClient from "./FavoritesClient";
const FavoritesPage = async () => {
  const favorites = await getFavoriteListing();
  const currentUser = await getCurrentUser();
  if (favorites.length === 0) {
    return (
      <div>
        <EmptyState
          title="No favorites found"
          subtitle="Looks like you dont have any favorites"
        />
      </div>
    );
  }
  return <FavoritesClient currentUser={currentUser} listings={favorites} />;
};

export default FavoritesPage;
