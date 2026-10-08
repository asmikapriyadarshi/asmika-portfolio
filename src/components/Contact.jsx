function Contact() {
  return (
    <section
      id="contact"
      className="relative py-32 px-6 overflow-hidden"
    >

      {/* ========================================
          BACKGROUND
      ======================================== */}

      <div className="absolute left-1/2 -translate-x-1/2 bottom-[-150px] w-[700px] h-[450px] rounded-full bg-cyan-400/[0.045] blur-[140px] pointer-events-none"></div>

      <div className="absolute top-1/4 left-[-150px] w-[300px] h-[300px] rounded-full bg-blue-500/[0.025] blur-[100px] pointer-events-none"></div>


      <div className="relative max-w-6xl mx-auto">


        {/* ========================================
            MAIN CONTACT CARD
        ======================================== */}

        <div className="relative border border-white/10 rounded-[2.5rem] bg-white/[0.02] overflow-hidden">


          {/* Top glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-px bg-gradient-to-r from-transparent via-cyan-400/70 to-transparent"></div>


          {/* ========================================
              DECORATIVE GRID
          ======================================== */}

          <div
            className="absolute top-0 right-0 w-[45%] h-full opacity-[0.025] pointer-events-none"
            style={{
              backgroundImage:
                "linear-gradient(rgba(34,211,238,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(34,211,238,0.8) 1px, transparent 1px)",
              backgroundSize: "45px 45px",
            }}
          ></div>


          <div className="relative p-8 md:p-14 lg:p-20">


            {/* ========================================
                HEADER
            ======================================== */}

            <div className="max-w-4xl">

              <div className="flex items-center gap-3 mb-6">

                <span className="w-10 h-px bg-cyan-400"></span>

                <p className="text-cyan-400 tracking-[0.28em] uppercase text-xs md:text-sm font-medium">
                  Contact
                </p>

              </div>


              <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-[-0.04em] leading-[1.02]">

                Let's build

                <br />

                <span className="text-gray-600">
                  something meaningful.
                </span>

              </h2>


              <p className="text-gray-400 text-lg leading-8 mt-8 max-w-2xl">

                I'm open to opportunities in software engineering, IoT,
                Edge AI, embedded systems, and machine learning.

                <span className="text-gray-300">
                  {" "}If you have an interesting opportunity or project,
                  I'd love to connect.
                </span>

              </p>

            </div>


            {/* ========================================
                CONTACT INFORMATION
            ======================================== */}

            <div className="grid md:grid-cols-2 gap-4 mt-12">


              {/* EMAIL */}
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=priyadarshiasmika@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative border border-white/10 rounded-2xl p-6 bg-black/20 hover:bg-white/[0.04] hover:border-cyan-400/30 transition-all duration-300"
              >

                <p className="text-[10px] text-gray-600 uppercase tracking-[0.2em] mb-4">
                  Email
                </p>


                <div className="flex items-center justify-between gap-4">

                  <p className="text-gray-300 group-hover:text-white transition-colors break-all">
                    priyadarshiasmika@gmail.com
                  </p>

                  <span className="shrink-0 text-gray-700 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all">
                    →
                  </span>

                </div>

              </a>


              {/* LOCATION */}
              <div className="group border border-white/10 rounded-2xl p-6 bg-black/20 hover:bg-white/[0.04] hover:border-cyan-400/20 transition-all duration-300">

                <p className="text-[10px] text-gray-600 uppercase tracking-[0.2em] mb-4">
                  Based In
                </p>

                <div className="flex items-center justify-between">

                  <p className="text-gray-300">
                    Bengaluru, India
                  </p>

                  <span className="w-2 h-2 rounded-full bg-green-400 shadow-[0_0_10px_rgba(74,222,128,0.6)]"></span>

                </div>

              </div>

            </div>


            {/* ========================================
                SOCIAL / ACTIONS
            ======================================== */}

            <div className="flex flex-wrap gap-3 mt-8">


              {/* GitHub */}
              <a
                href="https://github.com/asmikapriyadarshi"
                target="_blank"
                rel="noopener noreferrer"
                className="group px-6 py-3 rounded-full border border-white/10 bg-white/[0.02] text-gray-400 hover:text-white hover:border-cyan-400/30 hover:bg-cyan-400/[0.04] transition-all duration-300"
              >

                <span className="mr-2 text-xs">
                  GH
                </span>

                GitHub

              </a>


              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/asmika-priyadarshi"
                target="_blank"
                rel="noopener noreferrer"
                className="group px-6 py-3 rounded-full border border-white/10 bg-white/[0.02] text-gray-400 hover:text-white hover:border-cyan-400/30 hover:bg-cyan-400/[0.04] transition-all duration-300"
              >

                <span className="mr-2 text-sm font-semibold">
                  in
                </span>

                LinkedIn

              </a>


              {/* Email */}
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=priyadarshiasmika@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group px-7 py-3 rounded-full bg-white text-black font-medium hover:bg-gray-200 hover:-translate-y-0.5 transition-all duration-300"
              >

                Email Me

                <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">
                  →
                </span>

              </a>

            </div>


            {/* ========================================
                AVAILABILITY
            ======================================== */}

            <div className="mt-12 pt-7 border-t border-white/10 flex flex-col md:flex-row md:items-center md:justify-between gap-5">


              <div className="flex items-center gap-3">

                <span className="relative flex h-2.5 w-2.5">

                  <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-40 animate-ping"></span>

                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-400"></span>

                </span>

                <span className="text-xs text-gray-500">
                  Open to opportunities
                </span>

              </div>


              <div className="flex items-center gap-3 text-xs text-gray-700">

                <span>
                  Software
                </span>

                <span>·</span>

                <span>
                  IoT
                </span>

                <span>·</span>

                <span>
                  Edge AI
                </span>

              </div>

            </div>

          </div>


          {/* ========================================
              BOTTOM BAR
          ======================================== */}

          <div className="border-t border-white/10 px-8 md:px-14 lg:px-20 py-5 flex flex-col sm:flex-row justify-between gap-3">

            <p className="text-[10px] text-gray-700 uppercase tracking-[0.2em]">
              Available for opportunities
            </p>

            <a
              href="#home"
              className="text-xs text-gray-600 hover:text-cyan-400 transition-colors"
            >
              Back to top ↑
            </a>

          </div>

        </div>

      </div>

    </section>
  )
}

export default Contact