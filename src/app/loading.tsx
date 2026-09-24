const LoadingHome = () => {
  return (
    <main className="min-h-screen bg-[#080a0c] px-4 py-8">
      <div className=" container mx-auto ">
        {/* ================= HERO SKELETON ================= */}
        <section className="mb-14 rounded-2xl border border-slate-800 bg-[#151820] p-8 md:p-10">
          <div className="flex items-center justify-between gap-8">
            {/* Left */}
            <div className="flex-1 space-y-4">
              {/* Small title */}
              <div className="skeleton h-3 w-28 rounded bg-slate-700" />

              {/* Main heading */}
              <div className="space-y-2">
                <div className="skeleton h-8 w-96 max-w-full rounded bg-slate-700" />
                <div className="skeleton h-8 w-72 max-w-full rounded bg-slate-700" />
              </div>

              {/* Description */}
              <div className="space-y-2">
                <div className="skeleton h-3 w-full max-w-lg rounded bg-slate-700" />
                <div className="skeleton h-3 w-80 max-w-full rounded bg-slate-700" />
              </div>

              {/* Button */}
              <div className="skeleton h-10 w-36 rounded-lg bg-slate-700" />
            </div>

            {/* Hero Image */}
            <div className="hidden md:block">
              <div className="skeleton h-56 w-56 rounded-xl bg-slate-700" />
            </div>
          </div>
        </section>

        {/* ================= LIBRARY TITLE ================= */}
        <section>
          <div className="mb-5 space-y-2">
            <div className="skeleton h-8 w-44 rounded bg-slate-700" />
            <div className="skeleton h-3 w-64 rounded bg-slate-700" />
          </div>

          {/* ================= WORKOUT CARDS ================= */}
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 6 }).map((_, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-xl border border-slate-800 bg-[#151820]"
              >
                {/* Image */}
                <div className="skeleton h-44 w-full rounded-none bg-slate-700" />

                {/* Content */}
                <div className="space-y-3 p-4">
                  {/* Tags */}
                  <div className="flex gap-2">
                    <div className="skeleton h-5 w-12 rounded-full bg-slate-700" />
                    <div className="skeleton h-5 w-14 rounded-full bg-slate-700" />
                  </div>

                  {/* Workout name */}
                  <div className="skeleton h-5 w-40 rounded bg-slate-700" />

                  {/* Equipment */}
                  <div className="skeleton h-3 w-24 rounded bg-slate-700" />

                  {/* Divider */}
                  <div className="h-px bg-slate-800" />

                  {/* Stats */}
                  <div className="flex gap-4">
                    <div className="skeleton h-3 w-14 rounded bg-slate-700" />
                    <div className="skeleton h-3 w-16 rounded bg-slate-700" />
                    <div className="skeleton h-3 w-10 rounded bg-slate-700" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
};

export default LoadingHome;
