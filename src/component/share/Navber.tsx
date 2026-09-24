"use client";

import Image from "next/image";
import React from "react";
import Link from "next/link";

import navLogo from "@/assets/logo.png";
import LinkStyle from "../hendelBotton/linkColor";

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
          <Link
            href="/myPlan"
            className="flex items-center gap-2 text-[#b7bbc0] transition hover:text-white"
          >
            <span>Plan</span>

            <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-[#b6f500] px-1.5 text-xs font-bold text-black">
              0
            </span>
          </Link>

          {/* Saved */}
          <Link
            href="/myPlan"
            className="flex items-center gap-2 text-[#8b9198] transition hover:text-white"
          >
            <span>Saved</span>

            <span className="flex h-5 min-w-5 items-center justify-center rounded-full border border-[#35393e] px-1.5 text-xs text-[#a5aab0]">
              0
            </span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
