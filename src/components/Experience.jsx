const experiences = [
  {
    number: "01",
    role: "Samsung Innovation Campus Trainee",
    company: "Samsung Innovation Campus",
    period: "2026",
    description:
      "Completed technical training with a focus on programming, emerging technologies, and hands-on project-based learning.",
  },
]


function Experience() {
  return (
    <section
      id="experience"
      className="relative py-32 px-6 overflow-hidden"
    >

      {/* ========================================
          BACKGROUND
      ======================================== */}

      <div className="absolute left-[-150px] top-1/3 w-[500px] h-[500px] rounded-full bg-cyan-400/[0.03] blur-[130px] pointer-events-none"></div>

      <div className="absolute right-[-180px] bottom-0 w-[400px] h-[400px] rounded-full bg-blue-500/[0.02] blur-[120px] pointer-events-none"></div>


      <div className="relative max-w-6xl mx-auto">


        {/* ========================================
            HEADER
        ======================================== */}

        <div className="mb-16">

          <div className="flex items-center gap-3 mb-5">

            <span className="w-10 h-px bg-cyan-400"></span>

            <p className="text-cyan-400 tracking-[0.28em] uppercase text-xs md:text-sm font-medium">
              Experience
            </p>

          </div>


          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-7">

            <div>

              <h2 className="text-4xl md:text-6xl font-bold tracking-[-0.035em] leading-tight">

                Where I've

                <span className="text-gray-600">
                  {" "}learned.
                </span>

              </h2>

              <p className="text-gray-500 max-w-2xl mt-5 leading-7">
                Technical training and learning experiences that have helped
                me strengthen my foundation in software and emerging technologies.
              </p>

            </div>


            <span className="text-xs text-gray-700 uppercase tracking-[0.2em]">
              01 — Experience
            </span>

          </div>

        </div>


        {/* ========================================
            EXPERIENCE TIMELINE
        ======================================== */}

        <div className="relative">


          {/* Timeline */}
          <div className="absolute left-6 top-8 bottom-8 w-px bg-gradient-to-b from-cyan-400/50 via-white/10 to-transparent"></div>


          {experiences.map((experience) => (
            <div
              key={experience.role}
              className="relative pl-16"
            >


              {/* ========================================
                  TIMELINE NODE
              ======================================== */}

              <div className="absolute left-0 top-7 w-12 h-12 rounded-full border border-cyan-400/25 bg-[#080b12] flex items-center justify-center z-10">

                <span className="relative flex h-2.5 w-2.5">

                  <span className="absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-40 animate-ping"></span>

                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.8)]"></span>

                </span>

              </div>


              {/* ========================================
                  EXPERIENCE CARD
              ======================================== */}

              <div className="group relative border border-cyan-400/15 rounded-[2rem] bg-cyan-400/[0.02] p-7 md:p-10 overflow-hidden hover:bg-cyan-400/[0.035] hover:border-cyan-400/35 hover:-translate-y-1 transition-all duration-500">


                {/* Glow */}
                <div className="absolute -right-28 -top-28 w-72 h-72 rounded-full bg-cyan-400/[0.025] blur-3xl group-hover:bg-cyan-400/[0.1] transition-all duration-700"></div>


                {/* Background number */}
                <span className="absolute right-8 top-2 text-[140px] font-bold text-white/[0.015] leading-none select-none group-hover:text-cyan-400/[0.025] transition-colors duration-500">
                  01
                </span>


                <div className="relative">


                  {/* ========================================
                      TOP
                  ======================================== */}

                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">

                    <div>

                      <div className="flex items-center gap-3 mb-4">

                        <span className="px-3 py-1 rounded-full border border-cyan-400/20 bg-cyan-400/[0.04] text-cyan-400 text-[9px] uppercase tracking-[0.2em]">
                          Technical Training
                        </span>

                        <span className="w-1 h-1 rounded-full bg-gray-700"></span>

                        <span className="text-[10px] text-gray-600 uppercase tracking-widest">
                          01
                        </span>

                      </div>


                      <h3 className="text-2xl md:text-3xl font-semibold tracking-tight group-hover:text-cyan-400 transition-colors duration-300">
                        {experience.role}
                      </h3>


                      <p className="text-gray-400 mt-2">
                        {experience.company}
                      </p>

                    </div>


                    {/* Period */}
                    <span className="self-start px-4 py-2 rounded-full border border-white/10 bg-black/20 text-xs text-gray-500">
                      {experience.period}
                    </span>

                  </div>


                  {/* Divider */}
                  <div className="w-full h-px bg-white/5 my-8"></div>


                  {/* ========================================
                      DESCRIPTION
                  ======================================== */}

                  <div className="flex items-start gap-4">

                    <span className="mt-2 w-1.5 h-1.5 shrink-0 rounded-full bg-cyan-400"></span>

                    <p className="text-gray-500 leading-8 max-w-3xl">
                      {experience.description}
                    </p>

                  </div>


                  {/* ========================================
                      BOTTOM
                  ======================================== */}

                  <div className="mt-9 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">

                    <div className="flex items-center gap-3">

                      <span className="w-6 h-px bg-gray-700 group-hover:w-10 group-hover:bg-cyan-400 transition-all duration-300"></span>

                      <span className="text-[9px] text-gray-700 uppercase tracking-[0.2em] group-hover:text-cyan-400 transition-colors">
                        Learning & Development
                      </span>

                    </div>


                    <span className="text-[10px] font-mono text-gray-700">
                      SIC / 2026
                    </span>

                  </div>

                </div>

              </div>

            </div>
          ))}

        </div>


        {/* ========================================
            BOTTOM STATEMENT
        ======================================== */}

        <div className="mt-10 pl-16 flex items-center gap-3">

          <span className="w-1.5 h-1.5 rounded-full bg-gray-700"></span>

          <p className="text-xs text-gray-700">
            Focused on continuous technical growth.
          </p>

        </div>

      </div>

    </section>
  )
}

export default Experience