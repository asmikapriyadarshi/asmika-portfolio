const skillGroups = [
  {
    number: "01",
    title: "Programming",
    description:
      "Languages I use for problem solving, development, and building software applications.",
    skills: ["Python", "Java", "C"],
  },
  {
    number: "02",
    title: "IoT & Embedded",
    description:
      "Technologies I use to build connected systems and hardware-based applications.",
    skills: [
      "IoT",
      "ESP32",
      "Raspberry Pi",
      "MQTT",
      "Embedded Systems",
    ],
  },
  {
    number: "03",
    title: "AI & Machine Learning",
    description:
      "Technologies and concepts I explore for intelligent and data-driven applications.",
    skills: ["Machine Learning", "Edge AI", "Python"],
  },
  {
    number: "04",
    title: "Development Tools",
    description:
      "Tools and frameworks I use to develop, manage, and build practical projects.",
    skills: ["Node.js", "Flask", "SQL", "Git", "GitHub"],
  },
]


function Skills() {
  return (
    <section id="skills" className="relative py-32 px-6 overflow-hidden">

      <div className="absolute top-0 left-[-120px] w-[500px] h-[500px] rounded-full bg-cyan-400/[0.035] blur-[120px] pointer-events-none"></div>

      <div className="absolute bottom-0 right-[-120px] w-[450px] h-[450px] rounded-full bg-blue-500/[0.03] blur-[120px] pointer-events-none"></div>


      <div className="relative max-w-6xl mx-auto">

        <div className="mb-16">

          <div className="flex items-center gap-3 mb-5">

            <span className="w-10 h-px bg-cyan-400"></span>

            <p className="text-cyan-400 tracking-[0.28em] uppercase text-xs md:text-sm font-medium">
              Skills & Technologies
            </p>

          </div>


          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-7">

            <div>

              <h2 className="text-4xl md:text-6xl font-bold tracking-[-0.035em] leading-tight">
                My technical
                <span className="text-gray-600">
                  {" "}toolkit.
                </span>
              </h2>

              <p className="text-gray-500 max-w-2xl mt-5 leading-7">
                Technologies and tools I use while building software,
                IoT systems, embedded applications, and intelligent solutions.
              </p>

            </div>


            <div className="flex items-center gap-3 text-xs text-gray-600 uppercase tracking-[0.2em]">

              <span className="w-8 h-px bg-gray-700"></span>

              04 Areas

            </div>

          </div>

        </div>


        <div className="grid md:grid-cols-2 gap-5">

          {skillGroups.map((group) => (
            <div
              key={group.number}
              className="group relative border border-white/10 rounded-[2rem] bg-white/[0.02] p-7 md:p-9 overflow-hidden hover:bg-white/[0.045] hover:border-cyan-400/30 hover:-translate-y-1.5 transition-all duration-500"
            >

              <span className="absolute -right-3 -top-7 text-[130px] font-bold text-white/[0.015] leading-none select-none">
                {group.number}
              </span>

              <div className="absolute -top-24 -right-24 w-56 h-56 rounded-full bg-cyan-400/[0.025] blur-3xl group-hover:bg-cyan-400/[0.1] transition-all duration-500"></div>


              <div className="relative">

                <div className="flex items-start justify-between mb-8">

                  <div>

                    <p className="text-[10px] text-cyan-400/60 font-mono tracking-[0.2em] mb-3">
                      / {group.number}
                    </p>

                    <h3 className="text-xl md:text-2xl font-semibold group-hover:text-cyan-400 transition-colors duration-300">
                      {group.title}
                    </h3>

                  </div>


                  <div className="w-10 h-10 rounded-xl border border-white/10 bg-black/20 flex items-center justify-center">

                    <div className="flex items-end gap-[3px] h-4">

                      <span className="w-1 h-2 rounded-full bg-gray-700 group-hover:bg-cyan-400 transition-colors"></span>

                      <span className="w-1 h-3 rounded-full bg-gray-700 group-hover:bg-cyan-400 transition-colors"></span>

                      <span className="w-1 h-4 rounded-full bg-gray-700 group-hover:bg-cyan-400 transition-colors"></span>

                    </div>

                  </div>

                </div>


                <p className="text-sm text-gray-500 leading-7 max-w-md mb-8">
                  {group.description}
                </p>


                <div className="flex flex-wrap gap-2">

                  {group.skills.map((skill, index) => (
                    <span
                      key={skill}
                      className={`px-3.5 py-2 rounded-full border text-xs transition-all duration-300 ${
                        index === 0
                          ? "border-cyan-400/25 bg-cyan-400/[0.05] text-cyan-300"
                          : "border-white/10 bg-white/[0.02] text-gray-400"
                      }`}
                    >
                      {skill}
                    </span>
                  ))}

                </div>


                <div className="mt-9 pt-5 border-t border-white/5 flex items-center justify-between">

                  <div className="flex items-center gap-2">

                    <span className="w-5 h-px bg-gray-700 group-hover:w-10 group-hover:bg-cyan-400 transition-all duration-500"></span>

                    <span className="text-[9px] text-gray-700 uppercase tracking-[0.2em] group-hover:text-cyan-400">
                      Technologies
                    </span>

                  </div>

                  <span className="text-[10px] text-gray-700 font-mono">
                    {String(group.skills.length).padStart(2, "0")}
                  </span>

                </div>

              </div>

            </div>
          ))}

        </div>


        <div className="mt-16 border-t border-white/10 pt-8">

          <div className="flex flex-col lg:flex-row lg:items-center gap-6">

            <div className="flex items-center gap-3 shrink-0">

              <span className="relative flex h-2 w-2">

                <span className="absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-40 animate-ping"></span>

                <span className="relative w-2 h-2 rounded-full bg-cyan-400"></span>

              </span>

              <p className="text-xs text-gray-600 uppercase tracking-[0.25em]">
                Core Technologies
              </p>

            </div>


            <div className="hidden lg:block w-8 h-px bg-gray-800"></div>


            <div className="flex flex-wrap gap-x-7 gap-y-3 text-sm text-gray-600">

              {[
                "Python",
                "Java",
                "C",
                "ESP32",
                "Raspberry Pi",
                "MQTT",
                "Machine Learning",
                "Edge AI",
                "Node.js",
                "Flask",
                "SQL",
                "Git",
                "GitHub",
              ].map((technology) => (
                <span
                  key={technology}
                  className="hover:text-cyan-400 transition-colors duration-300"
                >
                  {technology}
                </span>
              ))}

            </div>

          </div>

        </div>


        <div className="mt-8 flex items-center gap-3">

          <span className="w-1.5 h-1.5 rounded-full bg-gray-700"></span>

          <p className="text-xs text-gray-700">
            Always learning. Always building.
          </p>

        </div>

      </div>

    </section>
  )
}

export default Skills