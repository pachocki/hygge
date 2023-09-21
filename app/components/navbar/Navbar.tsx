"use client"
import React from "react";
import Container from "../Container";
import Logo from "./Logo";
import Search from "./Search";
import UserMenu from "./UserMenu";
import { SafeUser } from "@/app/types";
import Categories from "./Categories";
import { usePathname } from "next/navigation";

interface NavbarProps {
  currentUser?: SafeUser | null;
}

const Navbar: React.FC<NavbarProps> = ({ currentUser }) => {
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  return (
    <div className="fixed shadow-sm w-full z-[999] bg-gray-800/20  bg-clip-padding backdrop-filter backdrop-blur-lg ">
      <Container>
        <nav className="flex justify-between gap-5 xl:gap-2  p-5 lg:p-2 sm:gap-0 ">
          <Logo color="text-white"/>
          <Search />
          <UserMenu currentUser={currentUser} />
        </nav>
      </Container>
      {/* Only render Categories if it's not the homepage */}
      {!isHomePage && <Categories />}
    </div>
  );
};

export default Navbar;