export default function About() {
  return (
    <section
      id="about"
      className="bg-slate-950 py-24 px-6 sm:px-8 text-slate-100"
    >
      <div className="mx-auto max-w-6xl">
        <div className="max-w-3xl">
          <p className="text-sm uppercase tracking-[0.3em] text-indigo-300">
            About Me
          </p>
          <h2 className="mt-3 text-4xl font-semibold text-white">
            I bring clean interfaces and reliable backend systems together.
          </h2>
          <p className="mt-6 text-lg leading-8 text-slate-300">
            I am a MERN Stack Developer with experience building web and mobile
            applications using React, Node.js, Express, PostgreSQL, Sequelize,
            and React Native. I focus on performance, accessibility, and a
            polished user experience.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8 shadow-[0_20px_60px_-30px_rgba(15,23,42,0.8)]">
            <h3 className="text-xl font-semibold text-white">What I offer</h3>
            <ul className="mt-6 space-y-4 text-slate-300">
              <li>• End-to-end MERN applications from UI to database</li>
              <li>• Fast, responsive layouts with modern design systems</li>
              <li>• API development, authentication, and data modeling</li>
              <li>• Mobile-ready interfaces with React Native</li>
            </ul>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8 shadow-[0_20px_60px_-30px_rgba(15,23,42,0.8)]">
            <h3 className="text-xl font-semibold text-white">How I work</h3>
            <ul className="mt-6 space-y-4 text-slate-300">
              <li>• Collaborate closely to define the right scope</li>
              <li>• Build with reusable components and consistent styles</li>
              <li>• Deliver clean code and useful documentation</li>
              <li>• Iterate quickly based on feedback and testing</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
