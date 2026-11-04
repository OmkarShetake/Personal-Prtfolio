import { Code2, ArrowUp } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="py-8 px-4 border-t border-zinc-200/80 dark:border-zinc-850 bg-white dark:bg-zinc-950">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-zinc-500 dark:text-zinc-400">
        {/* Brand */}
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-md bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 flex items-center justify-center">
            <Code2 size={13} />
          </div>
          <span className="font-semibold text-zinc-800 dark:text-zinc-200">
            Omkar Shetake
          </span>
          <span className="text-zinc-400 dark:text-zinc-600">·</span>
          <span>Java Backend Engineer</span>
        </div>

        {/* Copyright */}
        <p className="text-center sm:text-left text-zinc-500 dark:text-zinc-400">
          © {year} Omkar Shetake. Engineered with Next.js, React &amp; Tailwind.
        </p>

        {/* Quick nav */}
        <nav className="flex items-center gap-4">
          {["#about", "#skills", "#projects", "#contact"].map((href) => (
            <a
              key={href}
              href={href}
              className="capitalize hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
            >
              {href.replace("#", "")}
            </a>
          ))}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-zinc-900 dark:hover:text-zinc-100 font-medium transition-colors"
          >
            Resume
          </a>
          <a
            href="#hero"
            aria-label="Back to top"
            className="p-1.5 rounded-lg text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
          >
            <ArrowUp size={14} />
          </a>
        </nav>
      </div>
    </footer>
  );
}
