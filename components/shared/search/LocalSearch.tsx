"use client";
import React from "react";
import Image from "next/image";
import { Input } from "@/components/ui/input";

interface CustomInputProps {
  placeholder: string;
  iconSrc: string;
  route: string;
  otherClasses?: string;
  iconPosition: string;
}

const LocalSearch = ({
  iconSrc,
  placeholder,
  otherClasses,
  route,
  iconPosition,
}: CustomInputProps) => {
  return (
    <div className="relative w-full max-w-[600px]">
      <div
        className={`background-light800_darkgradient flex min-h-[56px] grow items-center gap-4 rounded-[10px] px-4 ${otherClasses}`}
      >
        {iconPosition === "left" && (
          <Image
            src={iconSrc}
            alt="search icon"
            width={24}
            height={24}
            className="cursor-pointer"
          />
        )}

        <Input
          type="text"
          placeholder={placeholder}
          value=""
          onChange={() => {}}
          className={`paragraph-regular no-focus placeholder background-light800_darkgradient border-none shadow-none outline-none ${otherClasses}`}
        />

        {iconPosition === "right" && (
          <Image
            src={iconSrc}
            alt="search icon"
            width={24}
            height={24}
            className="cursor-pointer"
          />
        )}
      </div>
    </div>
  );
};

export default LocalSearch;
