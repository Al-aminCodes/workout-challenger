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
  count: number;
  setCount: Dispatch<SetStateAction<number>>;
}
export const WorkoutContext = createContext<IWorkoutContextType>({
  todayPlan: [],
  setTodayPlan: () => {},
  saved: [],
  setSaved: () => {},
  count: 0,
  setCount: () => {},
});

const WorkoutProvaider = ({ children }: { children: ReactNode }) => {
  const [todayPlan, setTodayPlan] = useState<IWorkout[]>([]);
  const [saved, setSaved] = useState<IWorkout[]>([]);
  const [count, setCount] = useState(0);
  const shareData = {
    todayPlan,
    setTodayPlan,
    saved,
    setSaved,
    count,
    setCount,
  };
  return <WorkoutContext value={shareData}>{children}</WorkoutContext>;
};

export default WorkoutProvaider;
