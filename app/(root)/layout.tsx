export const dynamic = 'force-dynamic'
import getCurrentUser from "../actions/getCurrentUser";
import LoginModal from "../components/modals/LoginModal";
import RegisterModal from "../components/modals/RegisterModal";
import RentModal from "../components/modals/RentModal";
import SearchModal from "../components/modals/SearchModal";
import Navbar from "../components/navbar/Navbar";
import ToasterProvider from "../providers/ToasterProvider";

export default async function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const currentUser = await getCurrentUser();

  return (
    <main>
      <ToasterProvider />
      <LoginModal />
      <RegisterModal />
      <RentModal />
      <SearchModal />
      <Navbar currentUser={currentUser} />
      <div>{children}</div>
    </main>
  );
}
