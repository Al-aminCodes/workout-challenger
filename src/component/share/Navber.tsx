"use client";

import Image from "next/image";
import React from "react";
import Link from "next/link";

import navLogo from "@/assets/logo.png";
import LinkStyle from "../hendelBotton/linkColor";
import NavButton from "../hendelBotton/navbarButton";

const Navbar = () => {
  return (
    <nav className=" sticky top-0 z-50 border-b border-[#1d1f22] bg-[#0b0d0f]">
      <div className="container mx-auto flex h-20 items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image src={navLogo} width={28} height={28} alt="Fitlog logo" />

          <span className="text-lg font-bold tracking-wide text-white">
            FITLOG
          </span>
        </Link>

        {/* Navigation */}
        <ul className="flex items-center gap-2">
          <LinkStyle />
        </ul>
        {/* right side */}
        <div className="flex items-center gap-7 text-sm">
          {/* Plan */}
          <NavButton />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
