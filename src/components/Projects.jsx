function Projects() {
  const projects = [
    {
      title: "NEXUS: Smart Conveyor Predictive Maintenance System",
      year: "2026",
      description:
        "Developed an Edge AI-based smart conveyor health monitoring and predictive maintenance system for mining environments. The system uses ESP32 sensors and a Raspberry Pi camera to monitor conveyor conditions, collect real-time data, detect anomalies, and support predictive maintenance.",
      tags: ["Edge AI", "IoT", "ESP32", "Raspberry Pi"],
    },

    {
      title: "AI-Based DDoS Detection & Adaptive Firewall",
      year: "Apr 2026",
      description:
        "Developed as part of Mini Smart India Hackathon (Mini SIH) showcased at InnovateX 4.0 – International Tech Fest at Presidency University. Uses AI to identify DDoS attacks in network traffic and dynamically updates firewall rules to mitigate malicious activity in real time.",
      tags: ["AI", "Cybersecurity", "Network Security", "Python"],
    },

    {
      title: "Real-Time Crack Detection on Railway Tracks",
      year: "Oct 2024 – Jan 2025",
      description:
        "Designed and implemented an IoT-based system using Raspberry Pi Zero 2W and sensors to detect cracks in railway tracks in real time. Built an image processing module to identify track anomalies and trigger alerts for early maintenance.",
      tags: ["IoT", "Raspberry Pi", "Image Processing", "Sensors"],
    },

    {
      title: "Arduino-Based Drone Signal Booster",
      year: "Feb 2024 – Jun 2024",
      description:
        "Developed an Arduino-controlled module to boost drone communication signals for extended range and stability. Integrated wireless transmission techniques to enhance drone connectivity in challenging environments.",
      tags: ["Arduino", "IoT", "Wireless Communication"],
    },
  ]

  return (
    <section
      id="projects"
      className="px-5 py-24 sm:px-8 lg:px-10"
    >
      <div className="mx-auto max-w-7xl">

        {/* Section heading */}
        <div className="mb-12">

          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
            Projects
          </p>

          <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
            Things I have built
          </h2>

          <p className="mt-4 max-w-2xl text-slate-400">
            Projects focused on IoT, Edge AI, cybersecurity, smart systems,
            and real-world problem solving.
          </p>

        </div>


        {/* Project cards */}
        <div className="grid gap-6 lg:grid-cols-2">

          {projects.map((project, index) => (
            <article
              key={project.title}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.035] p-7 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-white/[0.05]"
            >

              {/* Glow */}
              <div className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-cyan-400/[0.06] blur-3xl transition duration-500 group-hover:bg-cyan-400/[0.1]" />


              {/* Project number */}
              <div className="relative flex items-start justify-between">

                <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/[0.05] text-sm font-semibold text-cyan-400">
                  0{index + 1}
                </span>

                <span className="text-sm text-slate-500">
                  {project.year}
                </span>

              </div>


              {/* Title */}
              <h3 className="relative mt-6 text-xl font-semibold leading-snug text-white transition group-hover:text-cyan-300 sm:text-2xl">
                {project.title}
              </h3>


              {/* Description */}
              <p className="relative mt-4 text-sm leading-7 text-slate-400">
                {project.description}
              </p>


              {/* Tags */}
              <div className="relative mt-6 flex flex-wrap gap-2">

                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/10 bg-white/[0.035] px-3 py-1.5 text-xs text-slate-300 transition group-hover:border-cyan-400/20"
                  >
                    {tag}
                  </span>
                ))}

              </div>

            </article>
          ))}

        </div>

      </div>
    </section>
  )
}

export default Projects