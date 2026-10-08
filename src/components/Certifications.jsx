function Certifications() {
  const certifications = [
    {
      title: "Introduction to Cybersecurity",
      issuer: "Cisco Networking Academy",
      date: "Issued Jul 2026",
    },

    {
      title: "Problem Solving (Basic) Certificate",
      issuer: "HackerRank",
      date: "Issued Mar 2026",
      credential: "Credential ID: 7CO1F51E3612",
    },

    {
      title: "Generative AI for Beginners",
      issuer: "Simplilearn",
      date: "Issued Jan 2026",
      credential: "Credential ID: 9745061",
    },

    {
      title: "Network Security Fundamental",
      issuer: "OnWingspan",
      date: "Issued Jan 2026",
    },

    {
      title: "Free Full Stack Developer Course",
      issuer: "Simplilearn",
      date: "",
    },
  ]

  return (
    <section
      id="certifications"
      className="px-5 py-24 sm:px-8 lg:px-10"
    >
      <div className="mx-auto max-w-7xl">

        {/* Section heading */}
        <div className="mb-12">

          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
            Certifications
          </p>

          <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
            Learning & credentials
          </h2>

          <p className="mt-4 max-w-2xl text-slate-400">
            Certifications and courses that support my technical learning
            and development.
          </p>

        </div>


        {/* Certification cards */}
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">

          {certifications.map((certification, index) => (
            <article
              key={certification.title}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.035] p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-white/[0.05]"
            >

              {/* Glow */}
              <div className="pointer-events-none absolute -right-16 -top-16 h-32 w-32 rounded-full bg-cyan-400/[0.05] blur-3xl transition group-hover:bg-cyan-400/[0.1]" />


              {/* Icon + number */}
              <div className="relative flex items-center justify-between">

                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/[0.05] text-lg text-cyan-400">
                  ✓
                </div>

                <span className="text-xs text-slate-600">
                  {String(index + 1).padStart(2, "0")}
                </span>

              </div>


              {/* Title */}
              <h3 className="relative mt-6 text-lg font-semibold leading-snug text-white transition group-hover:text-cyan-300">
                {certification.title}
              </h3>


              {/* Issuer */}
              <p className="relative mt-3 text-sm font-medium text-slate-300">
                {certification.issuer}
              </p>


              {/* Date */}
              {certification.date && (
                <p className="relative mt-2 text-xs text-slate-500">
                  {certification.date}
                </p>
              )}


              {/* Credential */}
              {certification.credential && (
                <p className="relative mt-4 border-t border-white/10 pt-4 text-xs text-slate-600">
                  {certification.credential}
                </p>
              )}

            </article>
          ))}

        </div>

      </div>
    </section>
  )
}

export default Certifications