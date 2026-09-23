import Image from "next/image";
import React from "react";
import footerLogo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="border-t border-[#1d1f22] bg-[#090A0D]">
      <div className="container mx-auto flex justify-between py-8 px-2  ">
        <div className="flex items-center gap-2">
          <Image src={footerLogo} width={28} height={28} alt="Fitlog logo" />

          <span className="text-lg font-bold tracking-wide text-white">
            FITLOG
          </span>
        </div>
        <div>
          <p
            className="
                
                max-w-xl
                text-sm
                leading-6
                text-[#6B7280]
                sm:text-base
                sm:leading-7
              "
          >
            © 2026 FitLog — Workout Library. Train hard, log honest.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
