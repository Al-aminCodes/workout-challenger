"use client";

import SavedCard from "@/component/share/SavedCard";
import TodayCard from "@/component/share/todayCard";
import { WorkoutContext } from "@/context/workoutContext";
import { IWorkout } from "@/type/workoutType";
import Link from "next/link";
import React, { useContext, useState } from "react";
import { FiChevronDown } from "react-icons/fi";

const MyPlanPage = () => {
  const { todayPlan, saved } = useContext(WorkoutContext);
  const [buttonType, setButtonType] = useState<string>("today");
  const [sortBy, setSortBy] = useState<"duration" | "calories" | "rating">(
    "duration",
  );
  const sortBooks = (work: IWorkout[]) => {
    const sortedBooks = [...work];

    if (sortBy === "duration") {
      sortedBooks.sort((a, b) => b.duration - a.duration);
    } else if (sortBy === "calories") {
      sortedBooks.sort((a, b) => b.caloriesBurned - a.caloriesBurned);
    } else if (sortBy === "rating") {
      sortedBooks.sort((a, b) => b.rating - a.rating);
    }

    return sortedBooks;
  };
  const sortedWorkoutToday = sortBooks(todayPlan);
  const sortedWorkoutSaved = sortBooks(saved);
  const handelBType = (type: string) => {
    setButtonType(type);
  };
  console.log(buttonType);
  return (
    <section className="container mx-auto my-10">
      <div className="my-7 p-5 md:p-0">
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
        <div className="tabs tabs-box ">
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
        <div className="flex items-center gap-4">
          <p className="whitespace-nowrap text-sm font-medium text-white">
            Sort By
          </p>

          <div className="relative">
            <select
              value={sortBy}
              onChange={(e) =>
                setSortBy(e.target.value as "duration" | "calories" | "rating")
              }
              className="select select-ghost h-10 min-h-10 appearance-none border border-[#baff00] pr-10 text-white focus:border-[#baff00] focus:outline-none focus:ring-0"
            >
              <option value="duration">Duration</option>
              <option value="calories">Calories</option>
              <option value="rating">Rating</option>
            </select>

            <FiChevronDown
              className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[#baff00]"
              size={18}
            />
          </div>
        </div>
      </div>

      {buttonType === "today" ? (
        sortedWorkoutToday.length > 0 ? (
          <div className="grid gap-5">
            {sortedWorkoutToday.map((workout) => (
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
      ) : sortedWorkoutSaved.length > 0 ? (
        <div className="grid gap-5">
          {sortedWorkoutSaved.map((workout) => (
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
