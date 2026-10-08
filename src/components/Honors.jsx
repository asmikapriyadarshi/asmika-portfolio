function Honors() {
  return (
    <section
      id="honors"
      className="px-5 py-24 sm:px-8 lg:px-10"
    >
      <div className="mx-auto max-w-7xl">

        {/* Section heading */}
        <div className="mb-12">

          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
            Honors
          </p>

          <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
            Recognition
          </h2>

        </div>


        {/* Honor card */}
        <div className="relative overflow-hidden rounded-3xl border border-cyan-400/20 bg-white/[0.035] p-7 sm:p-9">

          {/* Background glow */}
          <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-cyan-400/[0.07] blur-3xl" />

          <div className="relative grid gap-8 lg:grid-cols-[auto_1fr_auto] lg:items-center">

            {/* Trophy icon */}
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-cyan-400/30 bg-cyan-400/[0.06] text-2xl">
              🏆
            </div>


            {/* Content */}
            <div>

              <p className="text-sm font-medium text-cyan-400">
                Nov 2025
              </p>

              <h3 className="mt-2 text-2xl font-semibold text-white">
                Certificate of Merit – TALANGITA 2025
              </h3>

              <p className="mt-2 text-sm font-medium text-slate-300">
                Presidency University, Bengaluru
              </p>

              <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-400">
                Awarded for actively participating in TALANGITA 2025 –
                Student Housing Recreational Fest and outstanding performance
                in Fashion Walk/Dance competition, organized by Department
                of Student Housing, Presidency University, Bengaluru, on
                16 Nov 2025.
              </p>

            </div>


            {/* Year badge */}
            <div className="w-fit rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-xs text-slate-400">
              2025
            </div>

          </div>

        </div>

      </div>
    </section>
  )
}

export default Honors