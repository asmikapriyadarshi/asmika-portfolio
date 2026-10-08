import { useState } from "react"

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => {
    setMenuOpen(false)
  }

  return (
    <nav className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-[#070a12]/90 backdrop-blur-xl">

      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-6">

        {/* Brand */}
        <a
          href="#home"
          onClick={closeMenu}
          className="flex items-center gap-3"
        >

          <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-cyan-400/30 bg-cyan-400/[0.08] text-sm font-bold text-cyan-400">
            AP
          </div>

          <div className="hidden sm:block">
            <p className="text-sm font-semibold text-white">
              Asmika Priyadarshi
            </p>

            <p className="text-[10px] text-slate-500">
              B.Tech CSE · IoT
            </p>
          </div>

        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-6 text-sm text-slate-300 lg:flex">

          <a
            href="#home"
            className="transition hover:text-cyan-400"
          >
            Home
          </a>

          <a
            href="#projects"
            className="transition hover:text-cyan-400"
          >
            Projects
          </a>

          <a
            href="#education"
            className="transition hover:text-cyan-400"
          >
            Education
          </a>

          <a
            href="#certifications"
            className="transition hover:text-cyan-400"
          >
            Certifications
          </a>

          <a
            href="#honors"
            className="transition hover:text-cyan-400"
          >
            Honors
          </a>

          <a
            href="https://www.linkedin.com/in/asmika-priyadarshi"
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-cyan-400/30 px-4 py-2 text-cyan-300 transition hover:border-cyan-400 hover:bg-cyan-400/10"
          >
            LinkedIn
          </a>

          <a
            href="https://github.com/asmikapriyadarshi"
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-white/10 px-4 py-2 text-slate-300 transition hover:border-cyan-400/30 hover:text-cyan-300"
          >
            GitHub
          </a>

        </div>

        {/* Mobile button */}
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/[0.04] text-slate-300 transition hover:border-cyan-400/30 hover:text-cyan-400 lg:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? (
            <span className="text-2xl leading-none">
              ×
            </span>
          ) : (
            <span className="text-lg">
              ☰
            </span>
          )}
        </button>

      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="border-t border-white/10 bg-[#070a12]/95 px-5 py-5 backdrop-blur-xl lg:hidden">

          <div className="mx-auto flex max-w-7xl flex-col gap-1">

            <a
              href="#home"
              onClick={closeMenu}
              className="rounded-lg px-4 py-3 text-sm text-slate-300 transition hover:bg-white/[0.05] hover:text-cyan-400"
            >
              Home
            </a>

            <a
              href="#projects"
              onClick={closeMenu}
              className="rounded-lg px-4 py-3 text-sm text-slate-300 transition hover:bg-white/[0.05] hover:text-cyan-400"
            >
              Projects
            </a>

            <a
              href="#education"
              onClick={closeMenu}
              className="rounded-lg px-4 py-3 text-sm text-slate-300 transition hover:bg-white/[0.05] hover:text-cyan-400"
            >
              Education
            </a>

            <a
              href="#certifications"
              onClick={closeMenu}
              className="rounded-lg px-4 py-3 text-sm text-slate-300 transition hover:bg-white/[0.05] hover:text-cyan-400"
            >
              Certifications
            </a>

            <a
              href="#honors"
              onClick={closeMenu}
              className="rounded-lg px-4 py-3 text-sm text-slate-300 transition hover:bg-white/[0.05] hover:text-cyan-400"
            >
              Honors
            </a>

            <div className="my-2 h-px bg-white/10" />

            <a
              href="https://www.linkedin.com/in/asmika-priyadarshi"
              target="_blank"
              rel="noreferrer"
              onClick={closeMenu}
              className="rounded-lg px-4 py-3 text-sm text-cyan-400 transition hover:bg-cyan-400/[0.06]"
            >
              LinkedIn ↗
            </a>

            <a
              href="https://github.com/asmikapriyadarshi"
              target="_blank"
              rel="noreferrer"
              onClick={closeMenu}
              className="rounded-lg px-4 py-3 text-sm text-slate-300 transition hover:bg-white/[0.05] hover:text-cyan-400"
            >
              GitHub ↗
            </a>

            <a
              href="https://leetcode.com/u/asmika_priyadarshi/"
              target="_blank"
              rel="noreferrer"
              onClick={closeMenu}
              className="rounded-lg px-4 py-3 text-sm text-slate-300 transition hover:bg-white/[0.05] hover:text-cyan-400"
            >
              LeetCode ↗
            </a>

          </div>

        </div>
      )}

    </nav>
  )
}

export default Navbar