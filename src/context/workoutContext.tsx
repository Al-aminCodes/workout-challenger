"use client";

import { IWorkout } from "@/type/workoutType";
import React from "react";
import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from "react";
interface IWorkoutContextType {
  todayPlan: IWorkout[];
  setTodayPlan: Dispatch<SetStateAction<IWorkout[]>>;
  saved: IWorkout[];
  setSaved: Dispatch<SetStateAction<IWorkout[]>>;
}
export const WorkoutContext = createContext<IWorkoutContextType>({
  todayPlan: [],
  setTodayPlan: () => {},
  saved: [],
  setSaved: () => {},
});

const WorkoutProvaider = ({ children }: { children: ReactNode }) => {
  const [todayPlan, setTodayPlan] = useState<IWorkout[]>([]);
  const [saved, setSaved] = useState<IWorkout[]>([]);

  const shareData = {
    todayPlan,
    setTodayPlan,
    saved,
    setSaved,
  };
  return <WorkoutContext value={shareData}>{children}</WorkoutContext>;
};

export default WorkoutProvaider;
