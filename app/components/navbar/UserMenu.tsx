"use client";
import { GiHamburgerMenu as Hamburger } from "react-icons/gi";
import { IoMdClose as Close } from "react-icons/io";
import { useCallback, useState, useEffect, useRef } from "react";
import MenuItem from "./MenuItem";
import Avatar from "../Avatar";

import useRegisterModal from "@/app/hooks/useRegisterModal";
import useLoginModal from "@/app/hooks/useLoginModal";
import useRentModal from "@/app/hooks/useRentModal";
import { useRouter } from "next/navigation";
import { signOut } from "next-auth/react";
import { toast } from "react-hot-toast";
import { SafeUser } from "@/app/types";

interface UserMenuProps {
  currentUser?: SafeUser | null;
}

const UserMenu: React.FC<UserMenuProps> = ({ currentUser }) => {
  const router = useRouter();
  const registerModal = useRegisterModal();
  const loginModal = useLoginModal();
  const rentModal = useRentModal();
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = useCallback(() => {
    setIsOpen((value) => !value);
  }, []);
  const menuRef = useRef<HTMLDivElement | null>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  const Logout = () => {
    signOut();
    toast.success("Logged out");
  };
  const onRent = useCallback(() => {
    if (!currentUser) {
      return loginModal.onOpen();
    }
    rentModal.onOpen();
  }, [currentUser, loginModal, rentModal]);
  return (
    <div className="flex items-center  relative gap-1">
      <div
        className="transition-all rounded-full flex items-center p-2 cursor-pointer bg-purple-100 h-full   hover:bg-purple-400 2xl:text-2xl  lg:text-sm md:hidden"
        onClick={onRent}
      >
        Hygge din plass
      </div>
      <div className="rounded-full p-4  flex items-center gap-2  sm:p-2   bg-orange-400 ">
        {isOpen ? (
          <Close
            className="text-2xl 2xl:text-3xl lg:text-lg sm:text-sm corsor-pointer hover:text-gray-600 transition cursor-pointer"
            onClick={toggleOpen}
          />
        ) : (
          <Hamburger
            className="text-2xl 2xl:text-3xl lg:text-lg sm:text-sm corsor-pointer hover:text-gray-600 transition cursor-pointer"
            onClick={toggleOpen}
          />
        )}
        {currentUser ? (
          <div className="block md:hidden">
            <Avatar src={currentUser?.image} />{" "}
          </div>
        ) : null}
      </div>
      {isOpen && (
        <div
          className=" absolute rounded-xl border border-gray-200 bg-orange-50 shadow-md  overflow-hidden right-0 top-[4.8rem] xl:top-[4rem] sm:!top-[2.9rem] text-lg "
          ref={menuRef}
        >
          <div className="flex z-20 relative flex-col gap-2 w-[30vh] sm:w-[20vh]">
            {currentUser ? (
              <>
              <MenuItem
                  label="Discover"
                  onClick={() => router.push("/discover")}
                />
                <MenuItem
                  label="My trips"
                  onClick={() => {
                    router.push("/discover/trips");
                    toggleOpen();
                  }}
                />
                <MenuItem
                  label="My favorites"
                  onClick={() => {
                    router.push("/discover/favorites");
                    toggleOpen();
                  }}
                />
                <MenuItem
                  label="My reservations"
                  onClick={() => {
                    router.push("/discover/reservations");
                    toggleOpen();
                  }}
                />
                <MenuItem
                  label="My properties"
                  onClick={() => {
                    router.push("/discover/properties");
                    toggleOpen();
                  }}
                />
                <MenuItem label="Hygge my home" onClick={rentModal.onOpen} />
                <hr />
                <MenuItem label="Log out" onClick={Logout} />
              </>
            ) : (
              <>
                <MenuItem
                  label="Discover"
                  onClick={() => router.push("/discover")}
                />
                <MenuItem label="Login" onClick={loginModal.onOpen} />
                <MenuItem label="Sign up" onClick={registerModal.onOpen} />
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default UserMenu;
