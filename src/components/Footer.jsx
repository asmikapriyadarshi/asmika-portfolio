function Footer() {
  return (
    <footer className="border-t border-white/10 px-5 py-10 sm:px-8 lg:px-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">

        {/* Brand */}
        <div>
          <p className="font-semibold text-white">
            Asmika Priyadarshi
          </p>

          <p className="mt-1 text-sm text-slate-500">
            B.Tech Computer Science · IoT
          </p>
        </div>


        {/* Social links */}
        <div className="flex flex-wrap items-center gap-5 text-sm">

          <a
            href="https://www.linkedin.com/in/asmika-priyadarshi"
            target="_blank"
            rel="noreferrer"
            className="text-slate-400 transition hover:text-cyan-400"
          >
            LinkedIn
          </a>

          <a
            href="https://github.com/asmikapriyadarshi"
            target="_blank"
            rel="noreferrer"
            className="text-slate-400 transition hover:text-cyan-400"
          >
            GitHub
          </a>

          <a
            href="https://leetcode.com/u/asmika_priyadarshi/"
            target="_blank"
            rel="noreferrer"
            className="text-slate-400 transition hover:text-cyan-400"
          >
            LeetCode
          </a>

          <a
            href="#home"
            className="text-slate-400 transition hover:text-cyan-400"
          >
            Back to top ↑
          </a>

        </div>

      </div>


      {/* Copyright */}
      <div className="mx-auto mt-8 max-w-7xl border-t border-white/5 pt-6">

        <p className="text-center text-xs text-slate-600 sm:text-left">
          © 2026 Asmika Priyadarshi. All rights reserved.
        </p>

      </div>
    </footer>
  )
}

export default Footer