import { Code2, ArrowUp } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="py-8 px-4 border-t border-slate-200/60 dark:border-slate-800 bg-white dark:bg-slate-900">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-slate-500 dark:text-slate-400">
        {/* Brand */}
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-md bg-indigo-600 dark:bg-indigo-500 text-white flex items-center justify-center">
            <Code2 size={14} />
          </div>
          <span className="font-semibold text-slate-800 dark:text-slate-200">
            Omkar Shetake
          </span>
          <span className="text-slate-400 dark:text-slate-600">·</span>
          <span>Java Backend Engineer</span>
        </div>

        {/* Copyright */}
        <p className="text-center sm:text-left">
          © {year} Omkar Shetake. Built with Next.js, React &amp; Tailwind.
        </p>

        {/* Quick nav */}
        <nav className="flex items-center gap-4">
          {["#about", "#skills", "#projects", "#contact"].map((href) => (
            <a
              key={href}
              href={href}
              className="capitalize hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
            >
              {href.replace("#", "")}
            </a>
          ))}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-indigo-600 dark:hover:text-indigo-400 font-medium transition-colors"
          >
            Resume
          </a>
          <a
            href="#hero"
            aria-label="Back to top"
            className="p-1.5 rounded-lg text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            <ArrowUp size={14} />
          </a>
        </nav>
      </div>
    </footer>
  );
}
