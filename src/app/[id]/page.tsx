import { getWorkoutData } from "@/lib/workoutData";
import { IWorkout } from "@/type/workoutType";
import { notFound } from "next/navigation";

import Image from "next/image";
import { FiBookmark, FiCalendar } from "react-icons/fi";
interface IWorkoutDatailsPros {
  params: Promise<{ id: string }>;
}

export const generateStaticParams = async () => {
  const workoutData = await getWorkoutData();
  return workoutData.slice(0, 5).map((workout: IWorkout) => {
    return { id: workout.id.toString() };
  });
};

const DatailPage = async ({ params }: IWorkoutDatailsPros) => {
  const { id } = await params;
  const workoutData = await getWorkoutData();
  const workout = workoutData.find(
    (workout: IWorkout) => String(workout.id) === String(id),
  );
  if (!workout) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-base-300 text-base-content p-4 md:p-8 flex justify-center items-center">
      <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        {/* Left Column: Image */}
        <div className="w-full aspect-square md:aspect-4/5 rounded-3xl overflow-hidden shadow-2xl border border-base-100">
          <Image
            src={workout.image}
            alt={workout.name}
            width={740}
            height={740}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Column: Details */}
        <div className="flex flex-col h-full justify-between space-y-6">
          <div>
            {/* Workout Name */}
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight uppercase mb-2">
              {workout.name}
            </h1>
            <p className="text-[#9CA3AF] text-sm mb-2">{workout.description}</p>

            {/* Muscle Group Badges */}
            <div className="flex flex-wrap gap-2 mb-6">
              {workout.muscleGroups.map((muscle: string, index: number) => (
                <div
                  key={index}
                  className="badge bg-[#ccff00] text-black border-none font-bold px-3 py-3 text-xs uppercase rounded"
                >
                  {muscle}
                </div>
              ))}
            </div>

            {/* Metrics Dashboard Table */}
            <div className="overflow-x-auto bg-[#11131a] rounded-xl p-2 shadow-inner border border-base-100 mb-6">
              <table className="table w-full text-sm font-medium">
                <tbody>
                  <tr className="border-b border-gray-800">
                    <td className="text-gray-400 uppercase text-xs tracking-wider">
                      Equipment
                    </td>
                    <td className="text-right text-[#E5E7EB] font-semibold">
                      {workout.equipment}
                    </td>
                  </tr>
                  <tr className="border-b border-gray-800">
                    <td className="text-gray-400 uppercase text-xs tracking-wider">
                      Difficulty
                    </td>
                    <td className="text-right text-[#E5E7EB] font-semibold">
                      {workout.difficulty}
                    </td>
                  </tr>
                  <tr className="border-b border-gray-800">
                    <td className="text-gray-400 uppercase text-xs tracking-wider">
                      Sets
                    </td>
                    <td className="text-right text-white font-semibold">
                      {workout.sets}
                    </td>
                  </tr>
                  <tr className="border-b border-gray-800">
                    <td className="text-gray-400 uppercase text-xs tracking-wider">
                      Reps
                    </td>
                    <td className="text-right text-white font-semibold">
                      {workout.reps}
                    </td>
                  </tr>
                  <tr className="border-b border-gray-800">
                    <td className="text-gray-400 uppercase text-xs tracking-wider">
                      Duration
                    </td>
                    <td className="text-right text-white font-semibold">
                      {workout.duration} min
                    </td>
                  </tr>
                  <tr className="border-b border-gray-800">
                    <td className="text-gray-400 uppercase text-xs tracking-wider">
                      Calories
                    </td>
                    <td className="text-right text-white font-semibold">
                      {workout.caloriesBurned} kcal
                    </td>
                  </tr>
                  <tr className="border-none">
                    <td className="text-gray-400 uppercase text-xs tracking-wider">
                      Rating
                    </td>
                    <td className="text-right text-white font-semibold">
                      ⭐ {workout.rating}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Description & Instructions Section */}
            <div className="space-y-4 text-sm text-gray-300 leading-relaxed max-h-60 overflow-y-auto pr-2">
              <div>
                <h3 className="font-bold text-white mb-2 uppercase text-xs tracking-wider">
                  Instructions:
                </h3>
                <ul className="list-decimal pl-5 space-y-1">
                  {workout.instructions.map((step: string, idx: number) => (
                    <li key={idx}>{step}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Action Footer Buttons */}
          <div className="flex gap-4 pt-4 border-t border-gray-800">
            <button
              className="
                    btn
                    flex-1
                    border-0
                    bg-[#baff00]
                    font-bold
                    uppercase
                    text-black
                    hover:bg-[#c8ff33]
                  "
            >
              <FiCalendar className="text-lg" />
              Add to today&apos;s plan
            </button>
            <button
              className="
                    btn
                    flex-1
                    border-[#3a404a]
                    bg-transparent
                    font-bold
                    uppercase
                    text-[#bfc3ca]
                    hover:border-[#baff00]
                    hover:bg-transparent
                    hover:text-[#baff00]
                  "
            >
              <FiBookmark className="text-lg" />
              Save for later
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DatailPage;
