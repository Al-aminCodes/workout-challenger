"use client";

import React, { useContext } from "react";
import { FiBookmark, FiCalendar } from "react-icons/fi";
import { WorkoutContext } from "@/context/workoutContext";
import { notFound } from "next/navigation";
import { IWorkout } from "@/type/workoutType";

import { toast } from "react-toastify";

const DetailsButton = ({ workout }: { workout: IWorkout }) => {
  const workoutContext = useContext(WorkoutContext);

  if (!workoutContext) {
    return notFound();
  }
  const { todayPlan, setTodayPlan, saved, setSaved } = workoutContext;
  const isAdd = todayPlan.some((work: IWorkout) => work.id === workout.id);
  const isSave = saved.some((work: IWorkout) => work.id === workout.id);
  const hendelAddPlan = () => {
    if (isAdd) {
      toast.error(`${workout.name} alraedy have today's plan!`);
      return;
    }
    const newAddPlan = [...todayPlan, workout];

    setTodayPlan(newAddPlan);
    toast.success(` Added to today's plan`);
  };
  const hendelSaved = () => {
    if (isSave) {
      toast.error(`${workout.name} alraedy have saved!`);
      return;
    }
    const newSaved = [...saved, workout];
    setSaved(newSaved);
    toast.success(`Added to Saved`);
  };

  return (
    <div className="flex flex-col gap-3 border-t border-gray-800 pt-4 sm:flex-row">
      <button
        type="button"
        onClick={() => hendelAddPlan()}
        className="btn flex-1 border-0 bg-[#baff00] font-bold uppercase text-black hover:bg-[#c8ff33]"
      >
        <FiCalendar className="text-lg" />
        Add to today&apos;s plan
      </button>

      <button
        type="button"
        onClick={() => hendelSaved()}
        className="btn flex-1 border border-[#3a404a] bg-transparent font-bold uppercase text-[#bfc3ca] hover:border-[#baff00] hover:bg-transparent hover:text-[#baff00]"
      >
        <FiBookmark className="text-lg" />
        Save for later
      </button>
    </div>
  );
};

export default DetailsButton;
