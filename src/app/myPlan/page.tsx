"use client";
import AnalysisSection from "@/component/hendelBotton/analysis";
import SavedCard from "@/component/share/SavedCard";
import TodayCard from "@/component/share/todayCard";
import { WorkoutContext } from "@/context/workoutContext";
import { IWorkout } from "@/type/workoutType";
import Link from "next/link";
import React, { useContext, useState } from "react";

const MyPlanPage = () => {
  const { todayPlan, setTodayPlan, saved, setSaved } =
    useContext(WorkoutContext);
  const [buttonType, setButtonType] = useState<string>("today");
  const handelBType = (type: string) => {
    setButtonType(type);
  };
  console.log(buttonType);
  return (
    <section className="container mx-auto my-10">
      <div className="my-7">
        <h2 className="text-4xl font-black text-white">MY PLAN</h2>
        <p className="mt-2 text-sm text-[#8e949e]">
          Cap of five lifts for today. Finish them, then load more.
        </p>
      </div>
      {/* anaylsic section */}
      <div className="grid grid-cols-3 items-center py-6 px-8 bg-[#0c0d12] rounded-2xl border border-gray-900 shadow-xl w-full">
        <div className="flex flex-col gap-1 pl-2">
          <p className="text-gray-500 font-medium text-xs md:text-sm tracking-wide">
            Exercises
          </p>
          <h2 className="text-[#ccff00] text-3xl md:text-4xl font-extrabold tracking-tight">
            {buttonType === "today" ? todayPlan.length : saved.length}
          </h2>
        </div>

        {/* Column 2: Minutes */}
        <div className="flex flex-col gap-1 border-x border-gray-800/60 px-8 md:px-12">
          <p className="text-gray-500 font-medium text-xs md:text-sm tracking-wide">
            Minutes
          </p>
          <h2 className="text-white text-3xl md:text-4xl font-extrabold tracking-tight">
            {buttonType === "today"
              ? todayPlan.reduce(
                  (sum: number, currentTime: IWorkout) =>
                    sum + currentTime.duration,
                  0,
                )
              : saved.reduce(
                  (sum: number, currentTime: IWorkout) =>
                    sum + currentTime.duration,
                  0,
                )}
          </h2>
        </div>

        {/* Column 3: Calories */}
        <div className="flex flex-col gap-1 pl-6 md:pl-10">
          <p className="text-gray-500 font-medium text-xs md:text-sm tracking-wide">
            Calories
          </p>
          <h2 className="text-white text-3xl md:text-4xl font-extrabold tracking-tight">
            {buttonType === "today"
              ? todayPlan.reduce(
                  (sum: number, currentTime: IWorkout) =>
                    sum + currentTime.caloriesBurned,
                  0,
                )
              : saved.reduce(
                  (sum: number, currentTime: IWorkout) =>
                    sum + currentTime.caloriesBurned,
                  0,
                )}
          </h2>
        </div>
      </div>
      <div className="my-10 flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
        {/* name of each tab group should be unique */}
        <div className="tabs tabs-box px-5">
          <input
            type="radio"
            name="my_tabs_1"
            className={`tab ${buttonType === "today" ? "text-[#ccff00]" : ""}`}
            aria-label="Today's Plan"
            defaultChecked
            onClick={() => handelBType("today")}
          />
          <input
            type="radio"
            name="my_tabs_1"
            className={`tab ${buttonType === "saved" ? "text-[#ccff00]" : ""}`}
            aria-label="Saved"
            onClick={() => handelBType("saved")}
          />
        </div>
        <div className="flex justify-center m-5 ">
          <select
            // value={sortBy}
            // onChange={(e) =>
            //   setSortBy(e.target.value as "rating" | "pages" | "year")
            // }
            className="select select-success"
          >
            <option disabled={true}>Sort by</option>
            <option value={"rating"}>Rating</option>
            <option value={"pages"}>Number of pages</option>
            <option value={"year"}>Publisher year</option>
          </select>
        </div>
      </div>

      {buttonType === "today" ? (
        todayPlan.length > 0 ? (
          <div className="grid gap-5">
            {todayPlan.map((workout) => (
              <TodayCard key={workout.id} workout={workout}></TodayCard>
            ))}
          </div>
        ) : (
          <div className="container mx-auto rounded-2xl bg-[#151820] p-20">
            <div className="grid justify-center items-center  text-center">
              <h2 className="text-xl font-bold text-white">NOTHING HERE YET</h2>
              <p className="mt-2  mb-6 text-sm text-[#A1A1AA]">
                Browse the library and add a lift to get today moving.
              </p>
              <Link
                href="/"
                className="btn rounded-2xl border-0 bg-[#baff00] font-bold text-black hover:bg-[#c8ff33]"
              >
                Go to workouts
              </Link>
            </div>
          </div>
        )
      ) : saved.length > 0 ? (
        <div className="grid gap-5">
          {saved.map((workout) => (
            <SavedCard key={workout.id} workout={workout}></SavedCard>
          ))}
        </div>
      ) : (
        <div className="container mx-auto rounded-2xl bg-[#151820] p-20">
          <div className="grid justify-center items-center  text-center">
            <h2 className="text-xl font-bold text-white">NOTHING HERE YET</h2>
            <p className="mt-2  mb-6 text-sm text-[#A1A1AA]">
              Browse the library and add a lift to get today moving.
            </p>
            <Link
              href="/"
              className="btn rounded-2xl border-0 bg-[#baff00] font-bold text-black hover:bg-[#c8ff33]"
            >
              Go to workouts
            </Link>
          </div>
        </div>
      )}
    </section>
  );
};

export default MyPlanPage;
