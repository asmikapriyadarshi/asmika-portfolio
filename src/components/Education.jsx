function Education() {
  const education = [
    {
      institution: "Presidency University Bangalore",
      degree: "Bachelor of Technology - BTech",
      field: "Computer Science and Engineering",
      duration: "Sep 2023 – Jul 2027",
      details: "Skills: C (Programming Language), JavaScript",
    },

    {
      institution:
        "Eklavya Cent School, Sulindabad, Kahara, Saharsa, Bihar",
      degree: "Senior Secondary (Class XII)",
      field: "Science (PCM)",
      duration: "Apr 2021 – Mar 2023",
      details:
        "Participated in academic activities, science-related learning, and school events.",
    },

    {
      institution: "St. Xavier's School Saharsa",
      degree: "Secondary Education (Class 10)",
      field: "",
      duration: "Mar 2019 – Mar 2020",
      details:
        "Served as Class Monitor, demonstrating leadership, responsibility, and coordination skills.",
    },
  ]

  return (
    <section
      id="education"
      className="px-5 py-24 sm:px-8 lg:px-10"
    >
      <div className="mx-auto max-w-7xl">

        {/* Section heading */}
        <div className="mb-14">

          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
            Education
          </p>

          <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
            My academic journey
          </h2>

        </div>


        {/* Timeline */}
        <div className="relative">

          {/* Vertical line */}
          <div className="absolute left-[11px] top-2 hidden h-[calc(100%-20px)] w-px bg-gradient-to-b from-cyan-400/50 via-white/10 to-transparent sm:block" />

          <div className="space-y-8">

            {education.map((item, index) => (
              <article
                key={item.institution}
                className="relative sm:pl-12"
              >

                {/* Timeline dot */}
                <div className="absolute left-0 top-2 hidden h-[23px] w-[23px] items-center justify-center rounded-full border border-cyan-400/40 bg-[#070a12] sm:flex">
                  <span className="h-2 w-2 rounded-full bg-cyan-400" />
                </div>


                {/* Card */}
                <div className="group rounded-3xl border border-white/10 bg-white/[0.035] p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-white/[0.05] sm:p-7">

                  <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">

                    <div>

                      <p className="text-sm font-medium text-cyan-400">
                        {item.duration}
                      </p>

                      <h3 className="mt-2 text-xl font-semibold text-white sm:text-2xl">
                        {item.institution}
                      </h3>

                    </div>

                    <span className="w-fit rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs text-slate-500">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                  </div>


                  <div className="mt-5">

                    <p className="font-medium text-slate-200">
                      {item.degree}
                    </p>

                    {item.field && (
                      <p className="mt-1 text-sm text-slate-400">
                        {item.field}
                      </p>
                    )}

                    <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-500">
                      {item.details}
                    </p>

                  </div>

                </div>

              </article>
            ))}

          </div>

        </div>

      </div>
    </section>
  )
}

export default Education