export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen overflow-hidden bg-[radial-gradient(circle_at_top,_rgba(99,102,241,0.18),_transparent_32%),linear-gradient(180deg,#020617_0%,#111827_100%)] text-slate-100"
    >
      <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_20%_20%,_rgba(59,130,246,0.25),_transparent_20%),radial-gradient(circle_at_80%_25%,_rgba(168,85,247,0.22),_transparent_20%)]" />
      <div className="relative mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-6 py-24 sm:px-8">
        <p className="mb-4 text-sm uppercase tracking-[0.35em] text-indigo-300">
          MERN Stack Developer
        </p>

        <h1 className="max-w-4xl text-5xl font-semibold leading-tight sm:text-6xl lg:text-7xl">
          I build elegant, high-performance web apps with{" "}
          <span className="text-indigo-400">React</span>,
          <span className="text-cyan-300"> Node.js</span>, and thoughtful
          design.
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
          I deliver intuitive user experiences backed by scalable backend
          systems and clean, maintainable code.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <a
            href="#projects"
            className="inline-flex items-center justify-center rounded-full bg-indigo-500 px-8 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/25 transition hover:bg-indigo-400"
          >
            View projects
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-full border border-slate-700 bg-slate-950/70 px-8 py-3 text-sm font-semibold text-slate-100 transition hover:border-indigo-400 hover:bg-slate-900"
          >
            Contact me
          </a>
        </div>

        <div className="mt-10 flex flex-wrap gap-3 text-sm text-slate-300">
          {[
            "React",
            "Next.js",
            "Node.js",
            "Express",
            "PostgreSQL",
            "React Native",
          ].map((skill) => (
            <span
              key={skill}
              className="rounded-full border border-slate-700 bg-slate-900/80 px-4 py-2"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
