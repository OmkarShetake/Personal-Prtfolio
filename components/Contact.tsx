"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Send, Check, Copy, MapPin, Briefcase, Sparkles } from "lucide-react";

// Brand SVG icons
const GithubIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width={20} height={20} aria-hidden>
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

const LinkedinIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width={20} height={20} aria-hidden>
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const EMAIL_ADDRESS = "omkarshetake4655@gmail.com";

const SOCIAL_LINKS = [
  {
    label: "GitHub",
    handle: "github.com/OmkarShetake",
    href: "https://github.com/OmkarShetake",
    icon: GithubIcon,
  },
  {
    label: "LinkedIn",
    handle: "linkedin.com/in/omkar-shetake",
    href: "https://www.linkedin.com/in/omkar-shetake-53356b285/",
    icon: LinkedinIcon,
  },
  {
    label: "Direct Email",
    handle: EMAIL_ADDRESS,
    href: `mailto:${EMAIL_ADDRESS}`,
    icon: Mail,
  },
];

type FormState = {
  name: string;
  email: string;
  message: string;
};

type Status = "idle" | "sending" | "success" | "error";

export default function Contact() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<Status>("idle");
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(EMAIL_ADDRESS);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;

    setStatus("sending");
    
    // Create mailto fallback link for seamless message delivery
    const mailtoUrl = `mailto:${EMAIL_ADDRESS}?subject=${encodeURIComponent(
      `Portfolio Inquiry from ${form.name}`
    )}&body=${encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`
    )}`;

    // Simulate async submission
    await new Promise((resolve) => setTimeout(resolve, 600));

    setStatus("success");
    // Open default mail client with prefilled fields
    window.location.href = mailtoUrl;

    setForm({ name: "", email: "", message: "" });
    setTimeout(() => setStatus("idle"), 5000);
  };

  return (
    <section id="contact" className="py-24 px-4 bg-slate-50/50 dark:bg-slate-900/40">
      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14 text-center"
        >
          <p className="text-xs font-semibold tracking-widest uppercase text-violet-600 dark:text-violet-400 mb-2">
            Get in touch
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mb-3">
            Let&apos;s Connect
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 max-w-md mx-auto leading-relaxed">
            Actively seeking full-time Java Developer &amp; Backend SWE opportunities. Have an open role, an interesting project, or want to discuss system architecture?
          </p>

          {/* Quick Copy Email Action Pill */}
          <div className="mt-5 inline-flex items-center gap-2 p-1.5 pl-3.5 pr-2 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-xs">
            <span className="text-xs font-mono text-slate-700 dark:text-slate-300">
              {EMAIL_ADDRESS}
            </span>
            <button
              onClick={handleCopyEmail}
              type="button"
              className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-violet-600 hover:bg-violet-700 text-white text-xs font-medium transition-all shadow-xs"
            >
              {copied ? (
                <>
                  <Check size={13} />
                  <span>Copied!</span>
                </>
              ) : (
                <>
                  <Copy size={13} />
                  <span>Copy</span>
                </>
              )}
            </button>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:col-span-7 p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700/80 shadow-xs"
          >
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1">
              Send a Message
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mb-6">
              Fill out the form below to initiate an email directly to my inbox.
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4" noValidate>
              <div>
                <label
                  htmlFor="name"
                  className="block text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5"
                >
                  Your Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={handleChange}
                  placeholder="e.g. Satya Nadella"
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-900/60 text-slate-900 dark:text-white placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-violet-500 transition"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5"
                >
                  Your Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  placeholder="e.g. recruiter@company.com"
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-900/60 text-slate-900 dark:text-white placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-violet-500 transition"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5"
                >
                  Message / Role Details
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell me about your team, role requirements, or project..."
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-900/60 text-slate-900 dark:text-white placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-violet-500 transition resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-violet-600 hover:bg-violet-700 disabled:opacity-60 text-white font-semibold text-xs sm:text-sm transition-all shadow-xs hover:shadow-violet-500/25 active:scale-95 mt-1"
              >
                {status === "sending" ? (
                  <>
                    <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    <span>Preparing email…</span>
                  </>
                ) : (
                  <>
                    <Send size={15} />
                    <span>Send Message via Email</span>
                  </>
                )}
              </button>

              {/* Success / error feedback */}
              {status === "success" && (
                <div className="p-3 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 text-center text-xs text-emerald-700 dark:text-emerald-300 font-medium">
                  Opening your default email composer with your message details. You can also reach out directly to {EMAIL_ADDRESS}.
                </div>
              )}
            </form>
          </motion.div>

          {/* Social and Placement Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:col-span-5 flex flex-col gap-4"
          >
            {/* Location & Relocation Card */}
            <div className="p-5 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700/80 shadow-xs space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-violet-600 dark:text-violet-400 flex items-center gap-1.5">
                <Sparkles size={14} />
                <span>Placement Snapshot</span>
              </h4>
              <div className="flex items-start gap-3 text-xs text-slate-600 dark:text-slate-300">
                <MapPin size={16} className="text-violet-500 shrink-0 mt-0.5" />
                <span>Based in Kolhapur, Maharashtra (Open to on-site in Pune, Bengaluru, Mumbai, Hyderabad, or remote)</span>
              </div>
              <div className="flex items-start gap-3 text-xs text-slate-600 dark:text-slate-300">
                <Briefcase size={16} className="text-violet-500 shrink-0 mt-0.5" />
                <span>Immediate joiner / final-year student graduating in 2027</span>
              </div>
            </div>

            {/* Online Links */}
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 px-1 mt-1">
              Direct Contact &amp; Profiles
            </h4>

            {SOCIAL_LINKS.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700/80 shadow-xs hover:border-violet-400 dark:hover:border-violet-500 hover:shadow-md transition-all group"
              >
                <div className="w-10 h-10 rounded-xl bg-violet-50 dark:bg-violet-950/60 flex items-center justify-center text-violet-600 dark:text-violet-400 group-hover:scale-105 transition-transform">
                  <social.icon />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-900 dark:text-white group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
                    {social.label}
                  </p>
                  <p className="text-[11px] font-mono text-slate-500 dark:text-slate-400 mt-0.5">
                    {social.handle}
                  </p>
                </div>
              </a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
