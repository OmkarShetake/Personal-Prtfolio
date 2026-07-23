import { Code2 } from "lucide-react";

// -------------------------------------------------------
// TODO: Replace "Your Name" with your real name
// -------------------------------------------------------

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="py-8 px-4 border-t border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-slate-500 dark:text-slate-500">
        {/* Brand */}
        <div className="flex items-center gap-2">
          <Code2 size={16} className="text-indigo-600 dark:text-indigo-400" />
          {/* TODO: Replace "Your Name" */}
          <span className="font-medium text-slate-700 dark:text-slate-300">
            Omkar Shetake
          </span>
        </div>

        {/* Copyright */}
        <p>© {year} Omkar Shetake. All rights reserved.</p>

        {/* Quick nav */}
        <nav className="flex gap-4">
          {["#about", "#skills", "#projects", "#contact"].map((href) => (
            <a
              key={href}
              href={href}
              className="capitalize hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
            >
              {href.replace("#", "")}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
