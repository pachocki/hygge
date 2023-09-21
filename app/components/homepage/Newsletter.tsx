import Container from "../Container";
import Footer from "../Footer";
import Heading from "../Heading";
import {BsArrowRight} from  "react-icons/bs"

const Newsletter = () => {
  return (
    <div className="bg-green-900 px-5 sm:px-2 mt-[-2px]">
      <Container>
        <Heading
          center
          big
          white
          title="Don't miss out"
          subtitle="Subscribe to the weekly newsletter, as it contains fresh updates on recently added guesthouses and available spots for the weekend"
        />
        <div className="pt-10 flex gap-1 justify-center pb-20 ">
         <input type="email" placeholder="Email" className="w-1/3 px-3 rounded-xl lg:w-1/2 sm:w-[80%]"/>
         <button className="w-20 h-20 rounded-full bg-red-400 flex justify-center items-center sm:w-14 sm:h-14"><BsArrowRight className="text-2xl"/></button>
        </div>
      </Container>
      <Footer/>
    </div>
  );
};

export default Newsletter;
