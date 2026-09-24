"use client";
import { WorkoutContext } from "@/context/workoutContext";
import Link from "next/link";
import React, { useContext } from "react";

const NavButton = () => {
  const { todayPlan, saved } = useContext(WorkoutContext);
  return (
    <>
      <Link
        href="/myPlan"
        className="flex items-center gap-2 text-[#b7bbc0] transition hover:text-white"
      >
        <span>Plan</span>

        <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-[#b6f500] px-1.5 text-xs font-bold text-black">
          {todayPlan.length}
        </span>
      </Link>

      {/* Saved */}
      <Link
        href="/myPlan"
        className="flex items-center gap-2 text-[#8b9198] transition hover:text-white"
      >
        <span>Saved</span>

        <span className="flex h-5 min-w-5 items-center justify-center rounded-full border border-[#35393e] px-1.5 text-xs text-[#a5aab0]">
          {saved.length}
        </span>
      </Link>
    </>
  );
};

export default NavButton;
