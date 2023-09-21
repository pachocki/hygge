"use client";
import { BeatLoader } from "react-spinners";

const Loader = () => {
  return (
    <div className="flex justify-center items-center h-[70vh]">
      <BeatLoader size={30} color="#4ade80" />
    </div>
  );
};

export default Loader;
