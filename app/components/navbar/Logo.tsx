"use client";
import { Skranji } from "next/font/google";
import Link from "next/link";

const logo = Skranji({ weight: "400", subsets: ["latin"] });
interface LogoProps{
  color: string;
  size?:string,
}

const Logo:React.FC<LogoProps> = ({color,size}) => {
  return (
    <Link className={`${logo.className} flex gap-5 items-center ${color}`} href={"/"}>
      <h1 className={`2xl:text-5xl text-3xl  md:text-2xl sm:text-xl xs:text-[1rem] ${size} `}>
        Hygge
      </h1>
    </Link>
  );
};

export default Logo;
