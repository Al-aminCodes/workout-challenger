"use client";

import { createContext, ReactNode, useEffect, useState } from "react";
import { IWorkout } from "@/type/workoutType";

interface IWorkoutContextType {
  todayPlan: IWorkout[];
  setTodayPlan: React.Dispatch<React.SetStateAction<IWorkout[]>>;
  saved: IWorkout[];
  setSaved: React.Dispatch<React.SetStateAction<IWorkout[]>>;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

export const WorkoutContext = createContext<IWorkoutContextType>({
  todayPlan: [],
  setTodayPlan: () => {},

  saved: [],
  setSaved: () => {},

  loading: true,
  setLoading: () => {},
});

const WorkoutProvider = ({ children }: { children: ReactNode }) => {
  const [todayPlan, setTodayPlan] = useState<IWorkout[]>([]);
  const [saved, setSaved] = useState<IWorkout[]>([]);

  const [loading, setLoading] = useState(true);

  // Load data from localStorage
  useEffect(() => {
    const storedTodayPlan = localStorage.getItem("todayPlan");
    const storedSaved = localStorage.getItem("saved");

    if (storedTodayPlan) {
      setTodayPlan(JSON.parse(storedTodayPlan));
    }

    if (storedSaved) {
      setSaved(JSON.parse(storedSaved));
    }

    setLoading(false);
  }, []);

  // Save today's plan
  useEffect(() => {
    if (!loading) {
      localStorage.setItem("todayPlan", JSON.stringify(todayPlan));
    }
  }, [todayPlan, loading]);

  // Save saved workouts
  useEffect(() => {
    if (!loading) {
      localStorage.setItem("saved", JSON.stringify(saved));
    }
  }, [saved, loading]);

  return (
    <WorkoutContext.Provider
      value={{
        todayPlan,
        setTodayPlan,
        saved,
        setSaved,
        loading,
        setLoading,
      }}
    >
      {children}
    </WorkoutContext.Provider>
  );
};

export default WorkoutProvider;
