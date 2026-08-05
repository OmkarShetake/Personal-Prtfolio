import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// -------------------------------------------------------
// TODO: Replace with your deployed URL once live
// -------------------------------------------------------
export const metadata: Metadata = {
  title: "Omkar Shetake | Java Developer & Backend Engineer",
  description:
    "Portfolio of Omkar Shetake — a Java Developer and Backend Engineer specialising in Spring Boot, AI integrations, and event-driven systems.",
  keywords: ["java developer", "backend developer", "spring boot", "kafka", "gemini ai", "portfolio", "omkar shetake"],
  authors: [{ name: "Omkar Shetake" }],
  openGraph: {
    title: "Omkar Shetake | Java Developer & Backend Engineer",
    description: "Portfolio of Omkar Shetake — Java Developer specialising in Spring Boot, AI, and Kafka.",
    type: "website",
    // TODO: Replace with your deployed URL
    url: "https://yourportfolio.dev",
  },
  twitter: {
    card: "summary_large_image",
    creator: "@omkar_shetake",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // `suppressHydrationWarning` prevents mismatch from dark-mode class set by JS
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
