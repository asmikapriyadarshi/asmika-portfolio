const highlights = [
  {
    number: "01",
    title: "IoT",
    description:
      "Building connected systems using sensors, microcontrollers, and communication technologies.",
  },
  {
    number: "02",
    title: "Edge AI",
    description:
      "Exploring intelligent systems that bring machine learning closer to real-world devices.",
  },
  {
    number: "03",
    title: "Software",
    description:
      "Developing practical applications using Python, Java, databases, and modern development tools.",
  },
  {
    number: "04",
    title: "Problem Solving",
    description:
      "Enjoy solving technical problems and turning ideas into working projects.",
  },
]


function About() {
  return (
    <section id="about" className="relative py-32 px-6 overflow-hidden">

      <div className="absolute top-1/4 right-[-120px] w-[500px] h-[500px] rounded-full bg-cyan-400/[0.035] blur-[120px] pointer-events-none"></div>

      <div className="absolute bottom-0 left-[-150px] w-[400px] h-[400px] rounded-full bg-blue-500/[0.025] blur-[120px] pointer-events-none"></div>


      <div className="relative max-w-6xl mx-auto">

        <div className="mb-16">

          <div className="flex items-center gap-3 mb-5">

            <span className="w-10 h-px bg-cyan-400"></span>

            <p className="text-cyan-400 tracking-[0.28em] uppercase text-xs md:text-sm font-medium">
              About Me
            </p>

          </div>


          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-7">

            <h2 className="text-4xl md:text-6xl font-bold tracking-[-0.035em] leading-tight max-w-3xl">
              Building technology
              <span className="text-gray-600">
                {" "}with purpose.
              </span>
            </h2>

            <span className="text-xs text-gray-700 tracking-[0.2em] uppercase">
              01 — About
            </span>

          </div>

        </div>


        <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-16 lg:gap-24 items-start">

          <div>

            <p className="text-gray-300 text-lg md:text-xl leading-9 mb-7 max-w-2xl">
              I am a Computer Science and Engineering student specializing
              in Internet of Things at Presidency University Bengaluru,
              with a strong interest in software engineering, Edge AI,
              embedded systems, and machine learning.
            </p>

            <p className="text-gray-500 leading-8 mb-7 max-w-2xl">
              I enjoy building practical solutions that connect hardware,
              software, and intelligent systems. My projects explore areas
              such as predictive maintenance, network security, automation,
              and machine learning based applications.
            </p>

            <p className="text-gray-500 leading-8 mb-10 max-w-2xl">
              I am continuously learning and improving my technical skills,
              with the goal of creating useful technology and growing as a
              software engineer.
            </p>


            <div className="grid grid-cols-3 gap-3 max-w-xl">

              <div className="group border border-white/10 rounded-2xl p-5 bg-white/[0.02] hover:bg-white/[0.045] hover:border-cyan-400/30 hover:-translate-y-1 transition-all duration-300">

                <p className="text-3xl md:text-4xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                  04+
                </p>

                <p className="text-[10px] text-gray-600 uppercase tracking-[0.15em] mt-2">
                  Projects
                </p>

              </div>


              <div className="group border border-white/10 rounded-2xl p-5 bg-white/[0.02] hover:bg-white/[0.045] hover:border-cyan-400/30 hover:-translate-y-1 transition-all duration-300">

                <p className="text-3xl md:text-4xl font-bold text-cyan-400">
                  IoT
                </p>

                <p className="text-[10px] text-gray-600 uppercase tracking-[0.15em] mt-2">
                  Specialization
                </p>

              </div>


              <div className="group border border-white/10 rounded-2xl p-5 bg-white/[0.02] hover:bg-white/[0.045] hover:border-cyan-400/30 hover:-translate-y-1 transition-all duration-300">

                <p className="text-3xl md:text-4xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                  AI
                </p>

                <p className="text-[10px] text-gray-600 uppercase tracking-[0.15em] mt-2">
                  Focus Area
                </p>

              </div>

            </div>

          </div>


          <div className="relative">

            <div className="absolute left-5 top-5 bottom-5 w-px bg-gradient-to-b from-cyan-400/40 via-white/10 to-transparent"></div>

            <div className="space-y-5">

              {highlights.map((item) => (
                <div key={item.number} className="group relative pl-14">

                  <div className="absolute left-0 top-5 w-10 h-10 rounded-full border border-white/10 bg-[#080b12] flex items-center justify-center z-10 group-hover:border-cyan-400/40 group-hover:bg-cyan-400/[0.04] transition-all duration-300">

                    <span className="text-[10px] font-mono text-gray-600 group-hover:text-cyan-400 transition-colors">
                      {item.number}
                    </span>

                  </div>


                  <div className="relative border border-white/10 rounded-2xl p-5 md:p-6 bg-white/[0.02] overflow-hidden hover:bg-white/[0.045] hover:border-cyan-400/25 hover:-translate-y-1 transition-all duration-400">

                    <span className="absolute right-4 top-1 text-7xl font-bold text-white/[0.015] leading-none select-none">
                      {item.number}
                    </span>

                    <div className="absolute -right-16 -top-16 w-32 h-32 rounded-full bg-cyan-400/[0.025] blur-3xl group-hover:bg-cyan-400/[0.09] transition-all duration-500"></div>

                    <div className="relative">

                      <h3 className="text-lg font-semibold mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                        {item.title}
                      </h3>

                      <p className="text-sm text-gray-500 leading-6">
                        {item.description}
                      </p>

                      <div className="mt-5 flex items-center gap-2">

                        <span className="w-5 h-px bg-gray-700 group-hover:w-9 group-hover:bg-cyan-400 transition-all duration-300"></span>

                        <span className="text-[9px] uppercase tracking-[0.2em] text-gray-700 group-hover:text-cyan-400 transition-colors">
                          Focus Area
                        </span>

                      </div>

                    </div>

                  </div>

                </div>
              ))}

            </div>

          </div>

        </div>


        <div className="mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row md:items-center md:justify-between gap-4">

          <div className="flex items-center gap-3">

            <span className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.6)]"></span>

            <p className="text-xs text-gray-600">
              Curious mind. Practical builder. Continuous learner.
            </p>

          </div>


          <a
            href="#skills"
            className="group text-sm text-gray-500 hover:text-cyan-400 transition-colors"
          >
            Explore my skills
            <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">
              →
            </span>
          </a>

        </div>

      </div>

    </section>
  )
}

export default About