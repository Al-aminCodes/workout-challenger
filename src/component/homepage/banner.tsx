import React from "react";
import Image from "next/image";

import bannerImage from "@/assets/banner.png";

const BannerPage = () => {
  return (
    <section className="container mx-auto px-4 py-6 sm:py-8 lg:py-10">
      <div
        className="
          relative overflow-hidden rounded-2xl border border-[#292e38] bg-[#15171d] px-6 py-10  sm:px-10 sm:py-12
          lg:min-h-112
          lg:px-14 lg:py-14
         
        "
      >
        <div className="grid h-full items-center gap-10 lg:grid-cols-[1.25fr_0.75fr]">
          {/* Left Content */}
          <div className="max-w-2xl text-center lg:text-left">
            <p
              className="
                mb-5
                text-xs
                font-bold
                uppercase
                tracking-[0.12em]
                text-[#baff00]
                sm:text-sm
              "
            >
              Workout Library
            </p>

            <h1
              className="
                max-w-2xl
                text-4xl
                font-black
                uppercase
                leading-[0.95]
                tracking-[-0.03em]
                text-white
                sm:text-5xl
                md:text-6xl
                lg:text-[48px]
              "
            >
              Train With Intent. Log Every Set.
            </h1>

            <p
              className="
                mt-6
                max-w-xl
                text-sm
                leading-6
                text-[#969ca8]
                sm:text-base
                sm:leading-7
              "
            >
              FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
              into today&apos;s plan, and watch the week&apos;s work add up.
            </p>

            <button
              className="
                mt-7
                rounded-md
                bg-[#baff00]
                px-6
                py-3
                text-sm
                font-bold
                uppercase
                tracking-wide
                text-black
                transition-all
                duration-200
                hover:bg-[#c8ff33]
                hover:-translate-y-0.5
                hover:shadow-[0_8px_25px_rgba(186,255,0,0.18)]
                active:translate-y-0
              "
            >
              Browse Workouts
            </button>
          </div>

          {/* Right Image */}
          <div className="flex items-center justify-center lg:justify-end">
            <Image
              src={bannerImage}
              alt="Workout illustration"
              priority
              className="
                h-auto
                w-57.5
                object-contain
                sm:w-70
                md:w-[320px]
                lg:w-90
              "
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerPage;
