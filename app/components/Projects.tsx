import Link from "next/link";

const projects = [
  //   {
  //     id: "resume-builder",
  //     title: "Resume Builder",
  //     description:
  //       "A polished MERN app that generates clean, shareable resumes with saved templates and export-ready formatting.",
  //     tech: ["React", "Node.js", "Express", "MongoDB"],
  //     isLive: false,
  //   },
  //   {
  //     id: "food-delivery-app",
  //     title: "Food Delivery App",
  //     description:
  //       "A mobile-first ordering experience built with React Native, featuring smooth browsing and cart flow.",
  //     tech: ["React Native", "Redux", "Firebase"],
  //     isLive: false,
  //   },
  {
    id: "medicine-chatbot",
    title: "Dawai Sathi",
    description:
      "A conversational support tool with secure backend logic, PostgreSQL data storage, and intelligent user prompts.",
    tech: ["Node.js", "PostgreSQL", "Express", "Next.js", "OpenRouter", "AWS"],
    isLive: true,
  },
  {
    id: "cerebrum-hc",
    title: "Cerebrum HC",
    description:
      "An offline-first healthcare management platform designed to streamline hospital workflows, patient records, appointments, and clinical operations with secure data handling.",
    tech: ["Node.js", "PostgreSQL", "Express", "React"],
    isLive: true,
    isContributed: true,
    link: "https://www.cerebrumhc.com/",
  },
  {
    id: "provio-solutions",
    title: "Provio Solutions",
    description:
      "A digital solutions platform focused on delivering scalable web and mobile applications with modern technologies, optimized performance, and user-centric experiences.",
    tech: ["Node.js", "PostgreSQL", "Express", "React", "React Native"],
    isLive: true,
    isContributed: true,
    link: "https://www.proviosolutions.com/",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="bg-slate-950 py-24 px-6 sm:px-8 text-slate-100"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 max-w-3xl">
          <h2 className="mt-3 text-4xl font-semibold text-white">
            Selected work that shows my problem-solving approach.
          </h2>
          <br />
          <p className="text-sm uppercase tracking-[0.3em] text-indigo-300">
            Self Made Projects
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {projects
            .filter((project) => !project.isContributed)
            .map((project) => (
              <Link
                key={project.title}
                href={`/projects/${project.id}`}
                rel="noopener noreferrer"
              >
                <div
                  className={`group cursor-pointer rounded-3xl border ${
                    project.isLive ? "border-green-500" : "border-blue-500"
                  } bg-slate-900 p-8 shadow-[0_20px_60px_-30px_rgba(15,23,42,0.8)] transition-all duration-300 hover:-translate-y-1 hover:border-indigo-500/50 hover:shadow-xl`}
                >
                  <div className="flex items-center justify-between gap-4">
                    <h3 className="text-xl font-semibold text-white group-hover:text-indigo-400 transition-colors">
                      {project.title}
                    </h3>

                    {project.isLive ? (
                      <span className="rounded-full bg-green-500/10 px-3 py-1 text-xs font-semibold text-green-300">
                        Live ↗
                      </span>
                    ) : (
                      <span className="rounded-full bg-indigo-500/10 px-3 py-1 text-xs font-semibold text-indigo-300">
                        Showcase
                      </span>
                    )}
                  </div>

                  <p className="mt-5 text-slate-400 group-hover:text-slate-300 transition-colors">
                    {project.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full bg-slate-800 px-3 py-1 text-xs font-medium text-slate-300 group-hover:bg-slate-700 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Optional: Add a visual indicator that it's clickable */}
                  <div className="mt-4 flex items-center gap-2 text-sm text-indigo-400 opacity-0 group-hover:opacity-100 transition-opacity">
                    <span>View details</span>
                    <svg
                      className="h-4 w-4 transition-transform group-hover:translate-x-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
        </div>
        <br />
        <p className="text-sm uppercase tracking-[0.3em] text-indigo-300">
          Projects that i have contributed
        </p>
        <br />
        <div className="grid gap-6 md:grid-cols-3 ">
          {projects
            .filter((project) => project.isContributed)
            .map((project) => (
              // <Link
              //   key={project.title}
              //   href={`/projects/${project.id}`}
              //   rel="noopener noreferrer"
              // >
              <Link
                key={project.title}
                href={project.Link || `/projects/${project.id}`}
                target={project.Link ? "_blank" : "_self"}
                rel="noopener noreferrer"
              >
                <div
                  className={`group cursor-pointer rounded-3xl border ${
                    project.isLive ? "border-green-500" : "border-blue-500"
                  } bg-slate-900 p-8 shadow-[0_20px_60px_-30px_rgba(15,23,42,0.8)] transition-all duration-300 hover:-translate-y-1 hover:border-indigo-500/50 hover:shadow-xl`}
                >
                  <div className="flex items-center justify-between gap-4">
                    <h3 className="text-xl font-semibold text-white group-hover:text-indigo-400 transition-colors">
                      {project.title}
                    </h3>

                    {project.isLive ? (
                      <span className="rounded-full bg-green-500/10 px-3 py-1 text-xs font-semibold text-green-300">
                        Live ↗
                      </span>
                    ) : (
                      <span className="rounded-full bg-indigo-500/10 px-3 py-1 text-xs font-semibold text-indigo-300">
                        Showcase
                      </span>
                    )}
                  </div>

                  <p className="mt-5 text-slate-400 group-hover:text-slate-300 transition-colors">
                    {project.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full bg-slate-800 px-3 py-1 text-xs font-medium text-slate-300 group-hover:bg-slate-700 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Optional: Add a visual indicator that it's clickable */}
                  <div className="mt-4 flex items-center gap-2 text-sm text-indigo-400 opacity-0 group-hover:opacity-100 transition-opacity">
                    <span>View details</span>
                    <svg
                      className="h-4 w-4 transition-transform group-hover:translate-x-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
        </div>
      </div>
    </section>
  );
}
