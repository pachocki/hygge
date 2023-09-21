"use client";
import Image from "next/image";
import {FaUser} from "react-icons/fa"

interface AvatarProps{
  src: string | null | undefined;
}

const Avatar:React.FC<AvatarProps> = ({src}) => {
  return (
    <Image
      className="rounded-full border border-black 2xl:w-[40px] 2xl:h-[40px]"
      height="30"
      width="30"
      alt="profil"
      src={src||"/user.png"}
    />
  );
};

export default Avatar;
