"use client";
import Image from "next/image";
import Button from "./Button";
import { useRouter } from "next/navigation";
import { AiFillCheckCircle } from "react-icons/ai";
import { BsHouseFill } from "react-icons/bs";

import Container from "./Container";

const Hero = () => {
  const router = useRouter();

  return (
    <div className="w-full h-screen relative overflow-hidden">
      <Image
        priority
        src="/hero3.png"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        alt="hero image "
        className="absolute top-0 left-0 w-full h-full"
      />
      <Container>
        <div className="flex justify-between relative z-100 px-5 lg:px-2 sm:flex-col  sm:h-screen sm:px-3">
          <div className="w-1/2 h-screen flex  items-center sm:h-1/2 sm:w-full sm:justify-center ">
            <div className="px-8 h-[70vh] bg-[#eb5c4a] rounded-full flex flex-col justify-center items-center xl:px-4 lg:px-2 md:h-1/2 sm:rounded-full sm:mt-16 sm:h-[82%] sm:w-[82%] sm:py-10 sm:bg-[#eb5c4a]/70 xs:w-full ">
              <h1 className="text-4xl text-white font-semibold  lg:text-3xl text-center">
                Escape into the unknown
              </h1>
              <p className="text-2xl text-white mt-2 mb-10  lg:text-xl">
                Vacation begins in the mind
              </p>
              <Button
                label="Discover and book"
                onClick={() => router.push("/discover")}
                width="px-20 md:px-5"
              />
            </div>
          </div>
          <div className="w-1/2 flex xl:justify-end items-end  sm:w-full sm:h-1/2">
            <div className="w-[70%] bg-[#f4ccb7] mb-[3rem] px-2 rounded-lg relative xl:w-full lg:w-[90%] md:w-full  md:mb-1 sm:h-1/4 sm:w-3/5 sm:mb-10 xs:w-full xs:mx-2">
              <div className="flex justify-around items-center h-full w-full">
                <div className="bg-pink-400 rounded-full text-4xl w-20 h-20 flex justify-center items-center lg:text-2xl lg:w-14 lg:h-14 sm:w-10 sm:h-10 ">
                  <BsHouseFill className="sm:text-sm" />
                </div>
                <div className="flex flex-col gap-5 py-14">
                  <span className="text-4xl lg:text-2xl sm:text-lg sm:font-semibold sm:pt-1 xs:text-lg">
                    Cabine in the forest
                  </span>
                  <div className="bg-gray-400 w-full h-6  rounded-lg block sm:hidden"></div>
                  <div className="bg-gray-400 w-2/3 h-6  rounded-lg sm:hidden"></div>
                </div>
              </div>
              <div className="flex items-center gap-2 w-auto px-5 py-2 absolute  bg-pink-200   rounded-lg right-2 top-[-10px] ">
                <AiFillCheckCircle className="text-2xl" />
                <span className="text-2xl lg:text-xl sm:text-lg">Booked</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Hero;
