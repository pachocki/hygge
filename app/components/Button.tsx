"use client";
import React from "react";
import { IconType } from "react-icons"; // Import the appropriate type for icons

interface ButtonProps {
  label: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean; // Change from 'disable' to 'disabled'
  outline?: boolean;
  small?: boolean;
  icon?: IconType;
  width?:string,
}

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  disabled, // Change from 'disable' to 'disabled'
  outline,
  small,
  icon: IconComponent, // Rename 'icon' to 'IconComponent'
  width,
}) => {
  return (
    <button
      className={` relative flex justify-center items-center gap-1 2xl:text-xl ${
        disabled ? "opacity-70 cursor-not-allowed" : "opacity-100"
      } rounded-lg hover:opacity-80 transition  ${width}
      ${outline ? "bg-white" : "bg-green-400"}
      ${outline ? "border-black" : "border-green-400"}
      ${outline ? "text-black" : "text-white"}
      ${
        small
          ? "text-sm py-1 font-light border-[1px]"
          : "text-lg py-3 font-semibold border-2"
      }
      `}
      onClick={onClick}
      disabled={disabled} // Use 'disabled' prop
    >
      {IconComponent && (
        <IconComponent size={24} />
      )}
      {label}
    </button>
  );
};

export default Button;
