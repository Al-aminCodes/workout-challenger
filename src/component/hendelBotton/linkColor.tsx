"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const LinkStyle = () => {
  const pathname = usePathname();

  const navItems = [
    {
      name: "Workouts",
      href: "/",
    },
    {
      name: "My Plan",
      href: "/my-plan",
    },
  ];
  return (
    <>
      {navItems.map((item) => {
        const isActive = pathname === item.href;

        return (
          <li key={item.href}>
            <Link
              href={item.href}
              className={`rounded-full px-5 py-2 text-sm font-medium transition-all duration-200 ${
                isActive
                  ? "bg-[#14250d] text-[#b6f500]"
                  : "text-[#8b9198] hover:bg-[#15181b] hover:text-white"
              }`}
            >
              {item.name}
            </Link>
          </li>
        );
      })}
    </>
  );
};

export default LinkStyle;
