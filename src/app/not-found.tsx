import Link from "next/link";
import React from "react";
import { FiArrowLeft, FiSearch } from "react-icons/fi";

const NotFound = () => {
  return (
    <main className="min-h-[calc(100vh-80px)] bg-[#0b0d0f] px-4 py-10">
      <div className="flex min-h-[calc(100vh-160px)] items-center justify-center">
        <div className="w-full max-w-2xl rounded-2xl border border-[#292e38] bg-[#15171d] px-6 py-12 text-center shadow-2xl sm:px-10">
          {/* 404 */}
          <div className="mb-6">
            <h1 className="text-7xl font-black tracking-tight text-[#baff00] sm:text-8xl">
              404
            </h1>
          </div>

          {/* Icon */}
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#1d2415]">
            <FiSearch className="text-2xl text-[#baff00]" />
          </div>

          {/* Heading */}
          <h2 className="text-2xl font-black uppercase tracking-wide text-white sm:text-3xl">
            Workout Not Found
          </h2>

          {/* Description */}
          <p className="mx-auto mt-4 max-w-md text-sm leading-6 text-[#9298a3] sm:text-base">
            The workout you&apos;re looking for doesn&apos;t exist or may have
            been removed from the workout library.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/workouts"
              className="
                btn
                border-0
                bg-[#baff00]
                px-6
                text-sm
                font-bold
                uppercase
                text-black
                hover:bg-[#c8ff33]
              "
            >
              <FiSearch />
              Browse Workouts
            </Link>

            <Link
              href="/"
              className="
                btn
                btn-outline
                border-[#363b44]
                px-6
                text-sm
                font-bold
                uppercase
                text-[#a3a9b3]
                hover:border-[#baff00]
                hover:bg-transparent
                hover:text-[#baff00]
              "
            >
              <FiArrowLeft />
              Back Home
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default NotFound;
