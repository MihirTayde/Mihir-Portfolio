export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-slate-950 py-24 px-6 sm:px-8 text-slate-100"
    >
      <div className="mx-auto max-w-5xl rounded-3xl border border-slate-800 bg-slate-900 p-10 shadow-[0_30px_80px_-40px_rgba(15,23,42,0.9)]">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm uppercase tracking-[0.3em] text-indigo-300">
              Let's build something great
            </p>

            <h2 className="mt-3 text-4xl font-semibold tracking-tight text-white">
              Ready to collaborate? Send a message and let's make it happen.
            </h2>

            <p className="mt-4 text-slate-400">
              Whether you need a MERN Stack Developer, React Native Developer,
              or Backend Engineer, I'm available for freelance, contract, and
              full-time opportunities.
            </p>
          </div>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {/* Email */}
          <a
            href="mailto:mihirtayde138@gmail.com"
            className="rounded-3xl border border-slate-800 bg-slate-950 p-6 transition hover:border-indigo-500"
          >
            <p className="text-sm uppercase tracking-[0.3em] text-indigo-300">
              Email
            </p>
            <p className="mt-3 text-lg font-medium text-white break-all">
              mihirtayde138@gmail.com
            </p>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/mihir-tayde-410ba71ba/"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-3xl border border-slate-800 bg-slate-950 p-6 transition hover:border-indigo-500"
          >
            <p className="text-sm uppercase tracking-[0.3em] text-indigo-300">
              LinkedIn
            </p>
            <p className="mt-3 text-lg font-medium text-white">
              linkedin.com/in/mihir-tayde-410ba71ba
            </p>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/MihirTayde"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-3xl border border-slate-800 bg-slate-950 p-6 transition hover:border-indigo-500"
          >
            <p className="text-sm uppercase tracking-[0.3em] text-indigo-300">
              GitHub
            </p>
            <p className="mt-3 text-lg font-medium text-white">
              https://github.com/MihirTayde
            </p>
          </a>

          <a
            href="https://gitLab.com/MihirTayde"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-3xl border border-slate-800 bg-slate-950 p-6 transition hover:border-indigo-500"
          >
            <p className="text-sm uppercase tracking-[0.3em] text-indigo-300">
              GitLab
            </p>
            <p className="mt-3 text-lg font-medium text-white">
              https://gitlab.com/MihirTayde
            </p>
          </a>

          {/* Availability */}
          <div className="rounded-3xl border border-slate-800 bg-slate-950 p-6">
            <p className="text-sm uppercase tracking-[0.3em] text-indigo-300">
              Availability
            </p>
            <p className="mt-3 text-lg font-medium text-green-400">
              Open for New Opportunities
            </p>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="mt-10 flex flex-wrap gap-4">
          {/* <a
            href="mailto:mihirtayde138@gmail.com"
            className="rounded-full bg-indigo-600 px-6 py-3 font-semibold text-white transition hover:bg-indigo-500"
          >
            Email Me
          </a> */}

          <a
            href="https://www.linkedin.com/in/mihir-tayde-410ba71ba/"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-slate-700 px-6 py-3 font-semibold text-white transition hover:border-indigo-500"
          >
            Connect on LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
