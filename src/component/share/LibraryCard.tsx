import { IWorkout } from "@/type/workoutType";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FiClock, FiStar } from "react-icons/fi";
import { MdLocalFireDepartment } from "react-icons/md";

const LibraryCard = ({ workout }: { workout: IWorkout }) => {
  return (
    <Link href={`/${workout.id}`}>
      <div className="group overflow-hidden rounded-2xl border border-[#292e38] bg-[#15171d] transition-all duration-300 hover:-translate-y-1 hover:border-[#baff00]/50">
        {/* Image */}
        <div className="relative h-48 w-full overflow-hidden">
          <Image
            src={workout.image}
            alt={workout.name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        {/* Card Content */}
        <div className="p-5">
          {/* Muscle Groups */}
          <div className="mb-4 flex flex-wrap gap-2">
            {workout.muscleGroups.map((muscle) => (
              <span
                key={muscle}
                className="badge border-0 bg-[#baff00] px-3 py-3 text-[10px] font-extrabold uppercase tracking-wide text-black"
              >
                {muscle}
              </span>
            ))}
          </div>

          {/* Workout Name */}
          <h2 className="truncate text-lg font-black uppercase tracking-wide text-white">
            {workout.name}
          </h2>

          {/* Equipment */}
          <p className="mt-1 truncate text-sm text-[#8b919c]">
            {workout.equipment}
          </p>

          {/* Divider */}
          <div className="my-4 border-t border-[#292d35]" />

          {/* Stats */}
          <div className="flex items-center gap-4 text-xs text-[#9ba1ac]">
            {/* Duration */}
            <div className="flex items-center gap-1.5">
              <FiClock className="text-sm" />
              <span>{workout.duration} min</span>
            </div>

            {/* Calories */}
            <div className="flex items-center gap-1.5">
              <MdLocalFireDepartment className="text-sm" />
              <span>{workout.caloriesBurned} kcal</span>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-1.5">
              <FiStar className="text-sm" />
              <span>{workout.rating}</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default LibraryCard;
