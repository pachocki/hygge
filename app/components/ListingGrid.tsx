"use client";
import React from "react";
import ListingCard from "./listings/ListingCard";
import { SafeListing, SafeUser } from "../types";
import Button from "./Button";
import { useRouter } from "next/navigation";
import Container from "./Container";
import Categories from "./navbar/Categories";
import Heading from "./Heading";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";

interface ListingsGridProps {
  currentUser: SafeUser | null;
  listings: SafeListing[];
}

const ListingsGrid: React.FC<ListingsGridProps> = ({
  listings,
  currentUser,
}) => {
  const router = useRouter();
  return (
    <div className="h-full pb-40 relative overflow-hidden mt-[-1px] ">
      <div className="flex justify-center">
        <div className="w-[200vw] h-[90vh] bg-blue-900  absolute bottom-[-83vh] rounded-t-[80%] lg:bottom-[-81vh] md:lg:bottom-[-83vh] "></div>
      </div>

      <div className="pb-10">
        <Heading
          big
          center
          title="Places"
          subtitle="Here you will find perfect places"
        />
      </div>
      <Categories />
      <Container>
        <div className="px-5 py-10 sm:px-0 ">
          <Swiper
            pagination={{
              clickable: true,
            }}
            navigation={true}
            grabCursor={true}
            breakpoints={{
              490: {
                slidesPerView: 1,
                spaceBetween: 0,
              },
              491: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 10,
              },
              1545: {
                slidesPerView: 5,
                spaceBetween: 10,
              },
            }}
            modules={[Pagination, Navigation]}
            className="mySwiper"
          >
            {listings.slice(0, 20).map((listing) => (
              <SwiperSlide key={listing.id}>
                {" "}
                <ListingCard data={listing} currentUser={currentUser} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="flex justify-center items-center">
          <Button
            label="Discover all"
            width="px-10 "
            outline
            onClick={() => router.push("/discover")}
          />
        </div>
      </Container>
    </div>
  );
};

export default ListingsGrid;
