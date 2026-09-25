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
  loading : boolean ;
  setLoading:Dispatch<SetStateAction<boolean>>;
}
export const WorkoutContext = createContext<IWorkoutContextType>({
  todayPlan: [],
  setTodayPlan: () => {},
  saved: [],
  setSaved: () => {},
  loading : true, 
  setLoading: () => {}
});

const WorkoutProvaider = ({ children }: { children: ReactNode }) => {
  const [todayPlan, setTodayPlan] = useState<IWorkout[]>([]);
  const [saved, setSaved] = useState<IWorkout[]>([]);
  const [loading, setLoading] = useState(true);

  const shareData = {
    todayPlan,
    setTodayPlan,
    saved,
    setSaved,
    loading,
    setLoading,
  };
  return <WorkoutContext value={shareData}>{children}</WorkoutContext>;
};

export default WorkoutProvaider;
