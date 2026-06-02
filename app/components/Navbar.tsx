export default function Navbar() {
  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-slate-800 bg-slate-950/95 shadow-2xl shadow-slate-950/30 backdrop-blur-lg">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a
          href="#hero"
          className="text-xl font-semibold tracking-tight text-slate-100"
        >
          Mihir<span className="text-indigo-400"> Tayde</span>
        </a>

        <ul className="hidden items-center gap-8 text-slate-300 md:flex">
          <li>
            <a
              href="#about"
              className="text-sm font-medium transition hover:text-indigo-300"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#skills"
              className="text-sm font-medium transition hover:text-indigo-300"
            >
              Skills
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="text-sm font-medium transition hover:text-indigo-300"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="text-sm font-medium transition hover:text-indigo-300"
            >
              Contact
            </a>
          </li>
        </ul>

        <a
          href="#contact"
          className="rounded-full bg-indigo-500 px-5 py-2 text-sm font-semibold text-white shadow-md shadow-indigo-500/20 transition hover:bg-indigo-400"
        >
          Hire me
        </a>
      </div>
    </nav>
  );
}
