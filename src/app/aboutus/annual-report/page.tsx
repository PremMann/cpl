"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";

type Report = {
  year: number;
  title: string;
  file: string; // PDFs under /public/reports/...
  size?: string;
  summary?: string;
};

const reports: Report[] = [
  {
    year: 2025,
    title: "Annual Report 2025",
    file: "/reports/apmf-annual-report-2025.pdf",
    size: "7.5 MB",
    summary:
      "A remarkable year of growth, innovation, and operational excellence across all departments.",
  },
  {
    year: 2024,
    title: "Annual Report 2024",
    file: "/reports/apmf-annual-report-2024.pdf",
    size: "7.2 MB",
    summary:
      "Highlights of responsible growth, product innovation, and strengthened client protection standards.",
  },
  {
    year: 2023,
    title: "Annual Report 2023",
    file: "/reports/apmf-annual-report-2023.pdf",
    size: "6.8 MB",
    summary:
      "Solid performance with portfolio quality improvements and digital service expansion.",
  },
];

const page = {
  initial: { opacity: 0, scale: 0.985 },
  animate: { opacity: 1, scale: 1, transition: { duration: 0.35, ease: "easeOut" } },
};

const fadeUp = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const stagger = {
  initial: {},
  animate: { transition: { staggerChildren: 0.08, delayChildren: 0.12 } },
};

const item = {
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
};

function ReportCard({ r }: { r: Report }) {
  return (
    <motion.article
      variants={item}
      whileHover={{ y: -4 }}
      className="group relative overflow-hidden rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-lg"
    >
      <div
        className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(120% 90% at 50% 0%, rgba(240,49,53,0.07) 0%, rgba(240,49,53,0) 60%)",
        }}
      />
      <div className="relative">
        <div className="flex items-start justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-gray-100 px-2.5 py-1 text-xs font-medium text-gray-700">
              <span className="inline-flex h-1.5 w-1.5 rounded-full bg-red-500" />
              {r.year}
            </div>
            <h3 className="mt-2 text-lg font-semibold text-gray-900">{r.title}</h3>
          </div>
          <div className="hidden sm:flex h-10 w-10 items-center justify-center rounded-lg bg-red-50 text-red-600 ring-1 ring-red-100">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
              <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6zM8 12h2a2 2 0 010 4H9v2H8v-6zm5 0h-1v6h1a3 3 0 000-6zm-1 1.5h1a1.5 1.5 0 010 3h-1v-3zM9 13h1a1 1 0 010 2H9v-2zm5-7.5V9h4.5L14 5.5z" />
            </svg>
          </div>
        </div>

        {r.summary && <p className="mt-3 text-sm text-gray-700">{r.summary}</p>}

        <div className="mt-5 flex flex-wrap items-center gap-3">
          <a
            href={r.file}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-md bg-[#f03135] px-3 py-2 text-sm font-semibold text-white hover:bg-[#d3262a]"
          >
            View PDF
          </a>
          <a
            href={r.file}
            download
            className="inline-flex items-center justify-center rounded-md border border-gray-200 px-3 py-2 text-sm font-semibold text-gray-900 hover:border-gray-300"
          >
            Download
          </a>
          {r.size && <span className="text-xs text-gray-500">PDF • {r.size}</span>}
        </div>
      </div>
    </motion.article>
  );
}

export default function AnnualReportPage() {
  const [yearFilter, setYearFilter] = useState<number | "all">("all");

  const years = useMemo(
    () => Array.from(new Set(reports.map((r) => r.year))).sort((a, b) => b - a),
    []
  );

  const sortedAll = useMemo(() => [...reports].sort((a, b) => b.year - a.year), []);
  const filtered = useMemo(
    () => (yearFilter === "all" ? sortedAll : sortedAll.filter((r) => r.year === yearFilter)),
    [sortedAll, yearFilter]
  );

  const highlight = filtered[0] ?? null;

  return (
    <motion.main className="min-h-screen bg-white" variants={page} initial="initial" animate="animate">
      {/* Hero */}
      <section className="border-b border-gray-100 bg-gradient-to-br from-red-50 to-white">
        <div className="mx-auto max-w-7xl px-4 md:px-8 py-12 md:py-16">
          <motion.div variants={fadeUp} initial="initial" animate="animate" className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900">Annual Reports</h1>
            <p className="mt-3 text-gray-700">
              Browse and download our latest and previous annual reports. Each report includes governance updates,
              impact highlights, and performance metrics.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Highlight (latest or selected) */}
      {highlight && (
        <section className="mx-auto max-w-7xl px-4 md:px-8 py-10 md:py-14">
          <motion.div
            variants={fadeUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.25 }}
            className="group relative overflow-hidden rounded-2xl border border-gray-100 bg-white p-6 md:p-8 shadow-sm transition-all duration-300 hover:shadow-lg"
          >
            <div
              className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              style={{
                background:
                  "radial-gradient(120% 90% at 50% 0%, rgba(240,49,53,0.08) 0%, rgba(240,49,53,0) 60%)",
              }}
            />
            <div className="relative flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
              <div className="max-w-2xl">
                <div
                  className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold border ${
                    yearFilter === "all" ? "bg-red-50 text-red-700 border-red-100" : "bg-gray-100 text-gray-700 border-gray-200"
                  }`}
                >
                  {yearFilter === "all" ? "Latest" : `Year ${highlight.year}`}
                </div>
                <h2 className="mt-3 text-2xl font-semibold text-gray-900">
                  {highlight.title} ({highlight.year})
                </h2>
                {highlight.summary && <p className="mt-2 text-gray-700">{highlight.summary}</p>}
                <div className="mt-5 flex flex-wrap items-center gap-3">
                  <a
                    href={highlight.file}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-md bg-[#f03135] px-4 py-2 text-sm font-semibold text-white hover:bg-[#d3262a]"
                  >
                    View PDF
                  </a>
                  <a
                    href={highlight.file}
                    download
                    className="inline-flex items-center justify-center rounded-md border border-gray-200 px-4 py-2 text-sm font-semibold text-gray-900 hover:border-gray-300"
                  >
                    Download
                  </a>
                  {highlight.size && <span className="text-xs text-gray-500">PDF • {highlight.size}</span>}
                </div>
              </div>
              <div className="mt-2 hidden md:flex h-12 w-12 items-center justify-center rounded-xl bg-red-50 text-red-600 ring-1 ring-red-100">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6zM8 12h2a2 2 0 010 4H9v2H8v-6zm5 0h-1v6h1a3 3 0 000-6zm-1 1.5h1a1.5 1.5 0 010 3h-1v-3zM9 13h1a1 1 0 010 2H9v-2zm5-7.5V9h4.5L14 5.5z" />
                </svg>
              </div>
            </div>
          </motion.div>
        </section>
      )}

      {/* Filters */}
      <section className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="flex flex-wrap items-center gap-2">
          <button
            onClick={() => setYearFilter("all")}
            className={`rounded-full px-3 py-1.5 text-sm border transition ${
              yearFilter === "all"
                ? "bg-red-600 text-white border-red-600"
                : "bg-white text-gray-900 border-gray-300 hover:border-gray-400"
            }`}
            aria-pressed={yearFilter === "all"}
          >
            All years
          </button>
          {years.map((y) => (
            <button
              key={y}
              onClick={() => setYearFilter(y)}
              className={`rounded-full px-3 py-1.5 text-sm border transition ${
                yearFilter === y
                  ? "bg-red-600 text-white border-red-600"
                  : "bg-white text-gray-900 border-gray-300 hover:border-gray-400"
              }`}
              aria-pressed={yearFilter === y}
            >
              {y}
            </button>
          ))}
        </div>
      </section>

      {/* Grid */}
      <section className="mx-auto max-w-7xl px-4 md:px-8 py-10 md:py-14">
        <motion.div
          variants={stagger}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8"
        >
          {filtered.map((r) => (
            <ReportCard key={`${r.year}-${r.title}`} r={r} />
          ))}
        </motion.div>

        {filtered.length === 0 && (
          <motion.div
            variants={fadeUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.3 }}
            className="mt-10 rounded-xl border border-dashed border-gray-300 bg-gray-50 p-8 text-center text-gray-600"
          >
            No reports found for the selected year.
          </motion.div>
        )}
      </section>
    </motion.main>
  );
}