import profilePic from "../assets/Profile Pic2.jpeg"

function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden px-5 pb-16 pt-28 sm:px-8 lg:px-10"
    >
      {/* Background glows */}
      <div className="pointer-events-none absolute left-[8%] top-[18%] h-[450px] w-[450px] rounded-full bg-cyan-400/[0.045] blur-3xl" />

      <div className="pointer-events-none absolute right-[5%] top-[12%] h-[500px] w-[500px] rounded-full bg-blue-500/[0.04] blur-3xl" />

      {/* Main container */}
      <div className="relative mx-auto flex min-h-[calc(100vh-120px)] w-full max-w-7xl items-center">

        <div className="grid w-full items-center gap-14 lg:grid-cols-[0.85fr_1.15fr]">

          {/* PHOTO */}
          <div className="flex justify-center lg:justify-start">

            <div className="relative">

              {/* Outer decorative frame */}
              <div className="absolute -inset-5 rounded-[2rem] border border-dashed border-cyan-400/20" />

              {/* Photo glow */}
              <div className="absolute -inset-10 rounded-full bg-cyan-400/[0.07] blur-3xl" />

              {/* Profile image */}
              <div className="relative overflow-hidden rounded-[1.8rem] border border-cyan-400/30 bg-[#0b1117] p-2 shadow-[0_0_50px_rgba(34,211,238,0.08)]">

                <img
                  src={profilePic}
                  alt="Asmika Priyadarshi"
                  className="h-[350px] w-[285px] rounded-[1.4rem] object-cover sm:h-[440px] sm:w-[350px]"
                />

              </div>

              {/* Decorative corners */}
              <div className="absolute -bottom-5 -left-5 h-16 w-16 rounded-2xl border-b border-l border-cyan-400/30" />

              <div className="absolute -right-5 -top-5 h-16 w-16 rounded-2xl border-r border-t border-cyan-400/30" />

            </div>

          </div>


          {/* CONTENT */}
          <div className="text-center lg:text-left">

            {/* Status + Category */}
            <div className="mb-6 flex flex-wrap items-center justify-center gap-3 lg:justify-start">

              {/* Open to Work */}
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/25 bg-emerald-400/[0.06] px-4 py-2 text-xs font-medium text-emerald-300">

                <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />

                Open to Work

              </div>

              {/* Computer Science / IoT */}
              <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/[0.06] px-4 py-2 text-xs font-medium text-cyan-300">

                <span className="h-2 w-2 rounded-full bg-cyan-400" />

                Computer Science · IoT

              </div>

            </div>


            {/* Greeting */}
            <p className="text-xl font-medium text-slate-300 sm:text-2xl">
              Hi, I am
            </p>


            {/* Name */}
            <h1 className="mt-2 whitespace-nowrap text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl">

              Asmika{" "}

              <span className="text-cyan-400">
                Priyadarshi
              </span>

            </h1>


            {/* Divider */}
            <div className="mt-7 h-px w-20 bg-cyan-400/60" />


            {/* Description */}
            <p className="mt-7 max-w-2xl text-lg font-medium leading-relaxed text-slate-200 sm:text-xl">
              Final-year B.Tech Computer Science (IoT) student at
              Presidency University, Bangalore.
            </p>


            {/* Skill / Interest Tags */}
            <div className="mt-7 flex flex-wrap justify-center gap-3 lg:justify-start">

              <span className="rounded-full border border-cyan-400/40 bg-cyan-400/[0.03] px-5 py-2 text-sm text-slate-200 transition hover:border-cyan-400">
                IoT
              </span>

              <span className="rounded-full border border-cyan-400/40 bg-cyan-400/[0.03] px-5 py-2 text-sm text-slate-200 transition hover:border-cyan-400">
                Edge AI
              </span>

              <span className="rounded-full border border-cyan-400/40 bg-cyan-400/[0.03] px-5 py-2 text-sm text-slate-200 transition hover:border-cyan-400">
                Computer Science
              </span>

              <span className="rounded-full border border-cyan-400/40 bg-cyan-400/[0.03] px-5 py-2 text-sm text-slate-200 transition hover:border-cyan-400">
                Smart Systems
              </span>

            </div>


            {/* Main Button */}
            <div className="mt-8 flex flex-wrap justify-center gap-3 lg:justify-start">

              <a
                href="#projects"
                className="rounded-xl bg-cyan-400 px-6 py-3 font-semibold text-slate-950 shadow-lg shadow-cyan-400/10 transition duration-300 hover:-translate-y-0.5 hover:bg-cyan-300"
              >
                View Projects
              </a>

            </div>


            {/* Quick Information */}
            <div className="mt-8 grid gap-3 sm:grid-cols-3">

              {/* Education */}
              <a
                href="#education"
                className="rounded-2xl border border-white/10 bg-white/[0.035] p-5 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/30"
              >
                <p className="font-semibold text-white">
                  Education
                </p>

                <p className="mt-2 text-xs leading-5 text-slate-500">
                  B.Tech Computer Science (IoT)
                </p>
              </a>


              {/* Projects */}
              <a
                href="#projects"
                className="rounded-2xl border border-white/10 bg-white/[0.035] p-5 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/30"
              >
                <p className="font-semibold text-white">
                  Projects
                </p>

                <p className="mt-2 text-xs leading-5 text-slate-500">
                  IoT · AI · Smart Systems
                </p>
              </a>


              {/* Certifications */}
              <a
                href="#certifications"
                className="rounded-2xl border border-white/10 bg-white/[0.035] p-5 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/30"
              >
                <p className="font-semibold text-white">
                  Certifications
                </p>

                <p className="mt-2 text-xs leading-5 text-slate-500">
                  View Credentials
                </p>
              </a>

            </div>


            {/* Social Links */}
            <div className="mt-9">

              <p className="text-lg font-semibold text-white">
                Connect with me
              </p>

              <div className="mt-4 flex flex-wrap justify-center gap-3 lg:justify-start">

                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/asmika-priyadarshi"
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.035] px-4 py-3 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-cyan-400/[0.06]"
                >
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/10 text-sm font-bold text-white transition group-hover:bg-cyan-400 group-hover:text-slate-950">
                    in
                  </span>

                  <span className="text-sm font-medium text-slate-300 group-hover:text-white">
                    LinkedIn
                  </span>
                </a>


                {/* GitHub */}
                <a
                  href="https://github.com/asmikapriyadarshi"
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.035] px-4 py-3 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-cyan-400/[0.06]"
                >
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/10 text-xs font-bold text-white transition group-hover:bg-cyan-400 group-hover:text-slate-950">
                    GH
                  </span>

                  <span className="text-sm font-medium text-slate-300 group-hover:text-white">
                    GitHub
                  </span>
                </a>


                {/* LeetCode */}
                <a
                  href="https://leetcode.com/u/asmika_priyadarshi/"
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.035] px-4 py-3 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-cyan-400/[0.06]"
                >
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/10 text-xs font-bold text-white transition group-hover:bg-cyan-400 group-hover:text-slate-950">
                    LC
                  </span>

                  <span className="text-sm font-medium text-slate-300 group-hover:text-white">
                    LeetCode
                  </span>
                </a>

              </div>

            </div>

          </div>

        </div>

      </div>


      {/* Scroll indicator */}
      <a
        href="#projects"
        className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-xs text-slate-600 transition hover:text-slate-400 sm:flex"
      >
        <span>
          Scroll
        </span>

        <span className="text-lg">
          ↓
        </span>
      </a>

    </section>
  )
}

export default Hero