import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";
import Container from "./Container";
import Logo from "./navbar/Logo";

const Footer = () => {
  return (
    <div>
      <Container>
        <div className="bg-white px-4 rounded-t-xl pt-20 pb-10 lg:pt-10 sm:pb-5 sm:px-3">
          <div className="grid grid-cols-[2fr_1fr_1fr_1fr]  lg:gap-2 lg:grid-cols-3">
            <Logo color="text-black text-5xl lg:hidden" size="!text-7xl"/>
            <div className="flex flex-col gap-2 text-green-900">
              <span className="text-xl font-semibold 2xl:text-3xl md:text-lg xs:text-sm">Reservation</span>
              <span className="2xl:text-2xl sm:text-sm">Search</span>
              <span className="2xl:text-2xl sm:text-sm">Terms and Conditions</span>
              <span className="2xl:text-2xl sm:text-sm">Contact</span>
            </div>
            <div className="flex flex-col gap-2 text-green-900">
              <span className="text-xl font-semibold 2xl:text-3xl md:text-lg xs:text-sm">Discover Hygge</span>
              <span className="2xl:text-2xl sm:text-sm">About Us</span>
              <span className="2xl:text-2xl sm:text-sm">Join</span>
              <span className="2xl:text-2xl sm:text-sm">FAQ</span>
            </div>
            <div className="flex flex-col gap-2 text-green-900">
              <span className="text-xl font-semibold 2xl:text-3xl md:text-lg xs:text-sm">
                Legally and Seriously
              </span>
              <span className="2xl:text-2xl sm:text-sm">For the Press</span>
              <span className="2xl:text-2xl sm:text-sm">Rules and Regulations</span>
              <span className="2xl:text-2xl sm:text-sm">Privacy Policy</span>
              <span className="2xl:text-2xl sm:text-sm">Cookies Policy</span>
              <div className="flex gap-5 w-full  pt-10 text-2xl text-green-900 sm:text-xl sm:pt-5">
            <BsFacebook />
            <BsInstagram />
            <BsTwitter />
          </div>
            </div>
          </div>
         
        </div>
      </Container>
    </div>
  );
};

export default Footer;
