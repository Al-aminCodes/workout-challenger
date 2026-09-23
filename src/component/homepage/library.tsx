import { getWorkoutData } from "@/lib/workoutData";
import React from "react";
import LibraryCard from "../share/LibraryCard";
import { IWorkout } from "@/type/workoutType";

const LibraryPage = async () => {
  const allData = await getWorkoutData();
  // console.log(allData);
  return (
    <section>
      <div className="container mx-auto my-10 ">
        <div className="mb-5">
          <h2 className="text-4xl font-black text-white ">THE LIBRARY</h2>
          <p className="mt-2 text-sm text-[#8e949e]">
            Twelve lifts covering every major muscle group.
          </p>
        </div>
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {allData.map((data: IWorkout) => (
            <LibraryCard key={data.id} workout={data}></LibraryCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LibraryPage;
