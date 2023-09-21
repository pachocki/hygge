export const dynamic = 'force-dynamic'
import Navbar from "../components/navbar/Navbar";
import ToasterProvider from "../providers/ToasterProvider";
import LoginModal from "../components/modals/LoginModal";
import RegisterModal from "../components/modals/RegisterModal";
import getCurrentUser from "../actions/getCurrentUser";
import RentModal from "../components/modals/RentModal";
import SearchModal from "../components/modals/SearchModal";


export default async function HyggeLayout({
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
      <div className="pb-20 pt-20">{children}</div>
    </main>
  );
}
