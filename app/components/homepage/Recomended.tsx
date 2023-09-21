"use client"
import React, { useState } from "react";
import Heading from "../Heading";
import Container from "../Container";
import { SafeListing, SafeUser } from "../../types";
import ListingCard from "../listings/ListingCard";
import { useRouter } from "next/navigation";
import { BsArrowRight } from "react-icons/bs";

interface RecomendedProps {
  listings: SafeListing[];
}

const Recomended: React.FC<RecomendedProps> = ({ listings }) => {
  const router = useRouter();

 
  const listingIndexToRender = 1;


  const listing = listings[listingIndexToRender];

  return (
    <div className="bg-orange-200 py-20 sm:pt-5 px-5 sm:px-2">
      <Heading
        big
        center
        title="Recommended by Hygge"
        subtitle="This property is something special"
      />
      <Container>
        <div className="pt-20 sm:pt-10">
          <div className="grid grid-cols-2 justify-items-center h-[50vh] sm:flex sm:flex-col relative">
            <div className="w-3/4 lg:w-full px-2">
              <img
                src={listing.imageSrc}
                alt="properties"
                className="rounded-xl h-full object-cover sm:h-[40vh]"
              />
            </div>
            <div className="w-3/5 h-full rounded-full bg-red-500 flex justify-center items-center px-2 lg:w-4/5 sm:absolute sm:bottom-0 sm:h-auto sm:w-full sm:py-4 sm:gap-1">
              <div className=" relative bg-blue-200 w-3/4 h-auto flex flex-col px-2 py-5  rounded-xl sm:py-1">
                <div className="absolute bottom-[-20px] right-2 bg-pink-300 rounded-xl px-2 py-2">
                  <span className="2xl:text-2xl">{listing.price}$</span>
                </div>
                <span className="text-xl font-bold 2xl:text-2xl sm:text-lg">
                  {listing.title}
                </span>
                <span className="text-lg text-neutral-600 2xl:text-2xl sm:text-sm">
                  Rooms: {listing.roomCount}
                </span>
                <span className="text-lg text-neutral-600 2xl:text-2xl sm:text-sm">
                  Bathrooms: {listing.bathroomCount}
                </span>
              </div>
              <button
                className="w-14 h-14 rounded-full bg-green-400 flex justify-center items-center hover:opacity-70"
                onClick={() => router.push(`/discover/listings/${listing.id}`)}
              >
                <BsArrowRight className="2xl:text-2xl" />
              </button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Recomended;