const skillGroups = [
  {
    title: "Frontend Development",
    items: [
      "React.js",
      "Next.js",
      "JavaScript",
      "TypeScript",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Redux",
      "Zustand",
    ],
  },
  {
    title: "Mobile Development",
    items: ["React Native", "Expo", "Firebase", "Push Notifications"],
  },
  {
    title: "Backend Development",
    items: ["Node.js", "Express.js", "Authentication", "Server Architecture"],
  },
  {
    title: "API & Integrations",
    items: [
      "REST APIs",
      "GraphQL",
      "JWT Authentication",
      "API Testing",
      "Postman",
    ],
  },
  {
    title: "Databases & ORM",
    items: ["PostgreSQL", "MongoDB", "Redis", "Prisma", "Sequelize"],
  },
  {
    title: "Cloud & DevOps",
    items: ["AWS", "Docker", "Vercel", "Deployment"],
  },
  {
    title: "Developer Tools",
    items: ["Git", "GitHub", "Figma", "VS Code"],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-slate-950 py-24 px-6 sm:px-8 text-slate-100"
    >
      {/* Background glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-20 top-20 h-72 w-72 rounded-full bg-indigo-600/20 blur-[120px]" />
        <div className="absolute bottom-10 right-20 h-72 w-72 rounded-full bg-blue-600/20 blur-[120px]" />
      </div>

      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-14 max-w-3xl">
          <p className="text-sm uppercase tracking-[0.35em] text-indigo-300">
            Skills
          </p>

          <h2 className="mt-4 text-4xl font-bold tracking-tight text-white md:text-5xl">
            Technologies behind my development workflow.
          </h2>

          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-400">
            A full-stack toolkit covering scalable web applications, mobile
            apps, APIs, databases and modern deployments.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="
              group relative overflow-hidden rounded-3xl
              border border-slate-800
              bg-slate-900/70
              p-7
              backdrop-blur
              transition-all duration-300
              hover:-translate-y-2
              hover:border-indigo-500/60
              hover:shadow-[0_20px_70px_-25px_rgba(99,102,241,0.6)]
              "
            >
              {/* small glow on hover */}
              <div
                className="
                absolute inset-0
                bg-gradient-to-br
                from-indigo-500/10
                to-transparent
                opacity-0
                transition-opacity
                duration-300
                group-hover:opacity-100
                "
              />

              <div className="relative">
                <div className="mb-6 flex items-center gap-3">
                  {/* icon dot */}
                  <div
                    className="
                    h-3 w-3 rounded-full
                    bg-indigo-400
                    shadow-[0_0_20px_rgba(129,140,248,0.9)]
                    "
                  />

                  <h3 className="text-xl font-semibold text-white">
                    {group.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-3">
                  {group.items.map((skill) => (
                    <span
                      key={skill}
                      className="
                      rounded-full
                      border border-slate-700
                      bg-slate-950/80
                      px-4 py-2
                      text-sm
                      text-slate-300
                      transition-all
                      duration-300
                      hover:border-indigo-400
                      hover:text-white
                      "
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
