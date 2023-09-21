"use client";

import { AiTwotoneHeart } from "react-icons/ai";
import Button from "../Button";
import Container from "../Container";
import { useRouter } from "next/navigation";
import {
  BsFillArrowRightCircleFill,
  BsHouseDoorFill,
  BsSearch,
} from "react-icons/bs";

const About = () => {
  const router = useRouter();
  return (
    <div className="h-screen sm:h-full flex items-center bg-blue-900 px-5 mt-[-1px] 2xl:pb-20">
      <Container>
        <div className=" grid grid-cols-2 pt-20 justify-items-center lg:grid-cols-[1fr_1.2fr] sm:flex sm:flex-col-reverse  ">
          <div className="text-white py-40 2xl:text-xl sm:pt-20 sm:pb-14 sm:text-sm">
            <span>PEACEFUL RETREAT</span>
            <h3 className="text-7xl 2xl:text-8xl xl:text-6xl lg:text-5xl lg:font-semibold sm:text-4xl">
              Hop on <br />
              holidays
            </h3>
            <p className="pt-5 2xl:text-3xl text-2xl w-[70%] xl:w-[85%] lg:text-xl lg:w-[90%] pr-5 md:text-lg sm:w-full ">
              Lets go where there are no grand hotels, eat where they feed with
              local products, and experience adventures with those for whom
              passion is everything.
            </p>
            <div className="pt-10">
              <Button
                label="Explore"
                outline
                onClick={() => router.push("/discover")}
                width="px-20"
              />
            </div>
          </div>
          <div className="w-full h-full flex-col justify-center items-center relative">
            <div className="flex justify-between relative z-20 w-full">
              <div className="w-20 h-20 bg-white rounded-full flex justify-center items-center">
                <AiTwotoneHeart className="text-4xl text-red-600" />
              </div>
              <div className="w-1/2 h-full bg-purple-200 rounded-xl">
                <div className="w-12 h-12 bg-white rounded-full flex justify-center items-center mt-2 ml-2 md:w-8 md:h-8">
                  <BsHouseDoorFill className="text-3xl md:text-xl" />
                </div>
                <div className="h-full px-2 flex justify-between items-center pb-10 lg:pb-5">
                  <span className="text-3xl lg:text-2xl md:text-xl sm:text-lg">
                    Cottage <br />
                    Exclusively
                  </span>
                  <BsFillArrowRightCircleFill className="text-4xl md:text-2xl" />
                </div>
              </div>
            </div>
            <div className="mt-10 w-1/2  bg-stone-100 relative z-20 flex justify-between rounded-xl px-2 lg:w-3/5 lg:mb-20 md:w-3/4 xs:w-4/5">
              <div className="flex flex-col w-1/2  gap-2 py-10 lg:py-8 md:py-6">
                <span className=" text-2xl lg:text-2xl 2xl:text-3xl md:text-xl sm:text-lg">2 Guests</span>
                <span className="h-8 w-full bg-neutral-500 rounded-xl md:h-6"></span>
                <span className="h-8 w-2/3 bg-neutral-500 rounded-xl md:h-6"></span>
              </div>
              <div className="flex justify-center items-center">
                <div className="flex">
                  <img
                    src="/gwomen.png"
                    alt="profil"
                    className="w-14 h-14 rounded-full 2xl:w-16 2xl:h-16 lg:w-12 lg:h-12"
                  />
                  <img
                    src="/bgywomen.png"
                    alt="profil"
                    className="w-14 h-14 rounded-full 2xl:w-16 2xl:h-16 lg:w-12 lg:h-12"
                  />
                </div>
              </div>
            </div>
            <div className="flex gap-1 justify-end relative z-20 ">
              <div className="flex gap-1 items-center">
                <div className="flex items-center justify-center w-12 h-12 rounded-full 2xl:text-2xl bg-orange-600">
                  <BsSearch />
                </div>
                <span className="bg-pink-400 py-2 px-5 rounded-xl 2xl:text-2xl sm:text-lg">
                  Incredible Interiors
                </span>
              </div>
            </div>
            <div className="flex gap-1 justify-end relative z-20 ">
              <div className="flex gap-1 items-center 2xl:mt-2 ">
                <span className="bg-pink-400 py-2  px-2 rounded-xl 2xl:text-2xl sm:text-lg">Wifi</span>
                <span className="bg-pink-400 py-2 px-2 rounded-xl 2xl:text-2xl sm:text-lg">
                  Far from the city
                </span>
              </div>
            </div>
            <img
              src="/hero4.png"
              alt="about"
              className="w-[90%]  h-[70vh] rounded-full object-cover absolute top-0 right-0 z-10  sm:w-[95%] sm:h-[60vh] "
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default About;
