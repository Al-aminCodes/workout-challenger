const LoadingMyPlan = () => {
  return (
    <main className="min-h-screen bg-[#080808] px-4 py-10 md:px-8">
      <div className="mx-auto container">
        {/* ================= HEADER ================= */}
        <section className="mb-8">
          {/* MY PLAN */}
          <div className="skeleton h-9 w-44 rounded-md bg-slate-700" />

          {/* Description */}
          <div className="skeleton mt-3 h-4 w-80 max-w-full rounded bg-slate-700" />
        </section>

        {/* ================= STATS ================= */}
        <section className="mb-14 rounded-2xl border border-slate-800 bg-[#0d0f14] p-6 md:p-8">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {/* Exercises */}
            <div className="border-b border-slate-800 pb-5 md:border-b-0 md:border-r md:pb-0">
              <div className="skeleton h-4 w-20 rounded bg-slate-700" />

              <div className="skeleton mt-3 h-10 w-12 rounded bg-slate-700" />
            </div>

            {/* Minutes */}
            <div className="border-b border-slate-800 pb-5 md:border-b-0 md:border-r md:pb-0 md:pl-8">
              <div className="skeleton h-4 w-20 rounded bg-slate-700" />

              <div className="skeleton mt-3 h-10 w-16 rounded bg-slate-700" />
            </div>

            {/* Calories */}
            <div className="md:pl-8">
              <div className="skeleton h-4 w-20 rounded bg-slate-700" />

              <div className="skeleton mt-3 h-10 w-20 rounded bg-slate-700" />
            </div>
          </div>
        </section>

        {/* ================= FILTERS ================= */}
        <section className="mb-14 flex items-center justify-between">
          {/* Tabs */}
          <div className="flex gap-1 rounded-lg bg-[#1a1e25] p-1">
            <div className="skeleton h-9 w-24 rounded-md bg-slate-700" />
            <div className="skeleton h-9 w-16 rounded-md bg-slate-700" />
          </div>

          {/* Rating */}
          <div className="skeleton h-10 w-24 rounded-md bg-slate-700" />
        </section>

        {/* ================= EMPTY STATE ================= */}
        <section className="flex min-h-70 items-center justify-center rounded-2xl bg-[#151820]">
          <div className="flex w-full max-w-md flex-col items-center px-6 text-center">
            {/* Heading */}
            <div className="skeleton h-6 w-48 rounded bg-slate-700" />

            {/* Description */}
            <div className="skeleton mt-4 h-4 w-80 max-w-full rounded bg-slate-700" />

            {/* Button */}
            <div className="skeleton mt-7 h-11 w-80 max-w-full rounded-2xl bg-slate-700" />
          </div>
        </section>
      </div>
    </main>
  );
};

export default LoadingMyPlan;
