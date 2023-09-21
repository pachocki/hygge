import Container from "../Container";


const Newsleter = () => {
  return (
    <div className=" relative overflow-hidden px-5  lg:pb-10 md:px-2  xs:pb-0">
      <div className="flex justify-center w-full ">
        <div className="w-[200vw] h-screen bg-green-900 absolute bottom-[-93vh] rounded-t-[80%]"></div>
      </div>
      <Container>
        <div className="flex justify-center items-center gap-10 h-[60vh] pb-20 lg:pb-0 lg:h-[40vh] sm:h-[30vh] sm:pb-10 ">
          <div className="items-center grid grid-cols-[1fr_1fr_1fr_1fr_1.2fr] gap-2 h-[10vh] md:grid-cols-[1fr_1fr_1fr_1.5fr]  xs:grid-cols-3 sm:gap-1">
            <img
              src="/hero.png"
              className="  rounded-xl h-full xs:hidden object-cover"
              alt="properties"
            />
            <img
              src="/hero2.png"
              className=" rounded-xl md:hidden h-full object-cover"
              alt="properties"
            />
            <img
              src="/hero4.png"
              className=" rounded-xl  h-full object-cover"
              alt="properties"
            />
            <div className=" h-full bg-green-900 rounded-xl text-white text-2xl flex justify-center items-center ">
              +100
            </div>
            <div>
            <h5 className="text-2xl text-green-900 2xl:text-4xl sm:text-xl xs:text-sm">
              Follow Us on <br /> Instagramie @Hygge
            </h5>
          </div>
          </div>
          
        </div>
      </Container>
    </div>
  );
};

export default Newsleter;
