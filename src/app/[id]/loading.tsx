export default function WorkoutDetailSkeleton() {
  return (
    <div className="min-h-screen bg-base-300 p-4 md:p-8 flex justify-center items-center">
      <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-start animate-pulse">
        {/* Left Column: Image Skeleton */}
        <div className="w-full aspect-square md:aspect-4/5 rounded-3xl bg-[#1a1d26] shadow-2xl border border-base-100"></div>

        {/* Right Column: Details Skeleton */}
        <div className="flex flex-col h-full justify-between space-y-6">
          <div>
            {/* Workout Name Skeleton */}
            <div className="h-9 md:h-10 bg-[#1a1d26] rounded-xl w-3/4 mb-4"></div>

            {/* Muscle Group Badges Skeleton */}
            <div className="flex gap-2 mb-6">
              <div className="h-6 w-16 bg-[#1a1d26] rounded"></div>
              <div className="h-6 w-14 bg-[#1a1d26] rounded"></div>
            </div>

            {/* Metrics Dashboard Table Skeleton */}
            <div className="bg-[#11131a] rounded-xl p-4 border border-base-100 mb-6 space-y-4">
              {[...Array(7)].map((_, i) => (
                <div
                  key={i}
                  className="flex justify-between items-center py-1 border-b border-gray-800 last:border-none"
                >
                  <div className="h-3 w-20 bg-[#1a1d26] rounded"></div>
                  <div className="h-4 w-24 bg-[#1a1d26] rounded"></div>
                </div>
              ))}
            </div>

            {/* Description & Instructions Section Skeleton */}
            <div className="space-y-4 max-h-60 pr-2">
              <div className="space-y-2">
                <div className="h-3 bg-[#1a1d26] rounded w-full"></div>
                <div className="h-3 bg-[#1a1d26] rounded w-5/6"></div>
                <div className="h-3 bg-[#1a1d26] rounded w-4/6"></div>
              </div>
              <div className="pt-2 space-y-2">
                <div className="h-3 bg-[#1a1d26] rounded w-24 mb-3"></div>
                <div className="h-3 bg-[#1a1d26] rounded w-11/12 ml-5"></div>
                <div className="h-3 bg-[#1a1d26] rounded w-10/12 ml-5"></div>
              </div>
            </div>
          </div>

          {/* Action Footer Buttons Skeleton */}
          <div className="flex gap-4 pt-4 border-t border-gray-800">
            <div className="h-12 bg-[#1a1d26] rounded-xl flex-1"></div>
            <div className="h-12 bg-[#1a1d26] rounded-xl w-24"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
