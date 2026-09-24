"use client";
import { WorkoutContext } from "@/context/workoutContext";
import { IWorkout } from "@/type/workoutType";
import Image from "next/image";
import Link from "next/link";
import React, { useContext } from "react";
import { FaFire } from "react-icons/fa";
import { FiClock, FiEye, FiStar, FiX } from "react-icons/fi";
import { toast } from "react-toastify";

const SavedCard = ({ workout }: { workout: IWorkout }) => {
  const { saved, setSaved } = useContext(WorkoutContext);
  const hendelRemove = () => {
    const removed = saved.filter((work) => work.id !== workout.id);
    toast.info(`${workout.name} delete from Saved`);
    setSaved(removed);
  };
  return (
    <div className="w-full rounded-2xl border border-slate-700 bg-[#151820] p-4">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
        {/* Image */}
        <div className="h-40 md:h-20 w-full shrink-0 overflow-hidden rounded-xl sm:w-38.5">
          <Image
            src={workout.image}
            alt={workout.name}
            width={154}
            height={100}
            className="h-full w-full object-cover"
          />
        </div>

        {/* Workout Info */}
        <div className="min-w-0 flex-1">
          <h2 className="text-lg font-bold uppercase text-white">
            {workout.name}
          </h2>

          <p className="text-sm text-slate-400">{workout.equipment}</p>

          {/* Stats */}
          <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-slate-300">
            {/* Duration */}
            <div className="flex items-center gap-1">
              <FiClock className="text-lg text-lime-400" />
              <span>{workout.duration} min</span>
            </div>

            {/* Calories */}
            <div className="flex items-center gap-1">
              <FaFire className="text-sm text-lime-400" />
              <span>{workout.caloriesBurned} kcal</span>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-1">
              <FiStar className="text-lg text-lime-400" />
              <span>{workout.rating}</span>
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex w-full shrink-0 items-center justify-between gap-3 sm:w-auto sm:justify-end">
          {/* View Details */}
          <Link href={`/${workout.id}`}>
            <button
              // onClick={() => onDetails?.(workout)}
              className="btn btn-outline btn-sm rounded-full border-slate-600 px-5 text-slate-300 hover:border-lime-400 hover:bg-transparent hover:text-lime-400"
            >
              <FiEye />
              View Details
            </button>
          </Link>

          {/* Remove */}
          <button
            onClick={() => hendelRemove()}
            className="btn btn-circle btn-ghost btn-sm text-slate-500 hover:bg-transparent hover:text-white"
          >
            <FiX className="text-lg" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SavedCard;
