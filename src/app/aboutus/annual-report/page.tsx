"use client";
import { useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

type Report = {
  year: number;
  title: string;
  file: string; 
  size?: string;
  summary?: string;
};

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
  const { t } = useTranslation(['annualReports']);
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
            {t('buttons.viewPdf', { ns: 'annualReports' })}
          </a>
          <a
            href={r.file}
            download
            className="inline-flex items-center justify-center rounded-md border border-gray-200 px-3 py-2 text-sm font-semibold text-gray-900 hover:border-gray-300"
          >
            {t('buttons.download', { ns: 'annualReports' })}
          </a>
          {r.size && <span className="text-xs text-gray-500">PDF • {r.size}</span>}
        </div>
      </div>
    </motion.article>
  );
}

export default function AnnualReportPage() {
  const { t } = useTranslation(['annualReports']);

  // Derive reports from translation resources to stay in sync with language
  const reports: Report[] = useMemo(() => {
    type ReportInput = { year: number; title: string; file: string; size?: string; summary?: string };
    const isReportInput = (o: unknown): o is ReportInput => {
      if (typeof o !== 'object' || o === null) return false;
      const rec = o as Record<string, unknown>;
      return (
        typeof rec.year === 'number' &&
        typeof rec.title === 'string' &&
        typeof rec.file === 'string' &&
        (rec.size === undefined || typeof rec.size === 'string') &&
        (rec.summary === undefined || typeof rec.summary === 'string')
      );
    };

    const raw = t('reports', { returnObjects: true, ns: 'annualReports' });
    if (!Array.isArray(raw)) return [];
    const cleaned: Report[] = [];
    for (const r of raw) {
      if (isReportInput(r)) cleaned.push({ ...r });
    }
    cleaned.sort((a, b) => b.year - a.year);
    return cleaned;
  }, [t]);

  const [yearFilter, setYearFilter] = useState<number | "all">("all");

  const years = useMemo(
    () => Array.from(new Set(reports.map((r) => r.year))).sort((a, b) => b - a),
    [reports]
  );

  const sortedAll = useMemo(() => [...reports].sort((a, b) => b.year - a.year), [reports]);
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
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900">{t('title', { ns: 'annualReports' })}</h1>
            <p className="mt-3 text-gray-700">{t('heroSubtitle', { ns: 'annualReports' })}</p>
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
                  {yearFilter === "all"
                    ? t('labels.latest', { ns: 'annualReports' })
                    : t('labels.year', { ns: 'annualReports', year: highlight.year })}
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
                    {t('buttons.viewPdf', { ns: 'annualReports' })}
                  </a>
                  <a
                    href={highlight.file}
                    download
                    className="inline-flex items-center justify-center rounded-md border border-gray-200 px-4 py-2 text-sm font-semibold text-gray-900 hover:border-gray-300"
                  >
                    {t('buttons.download', { ns: 'annualReports' })}
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
            {t('filters.allYears', { ns: 'annualReports' })}
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
            {t('empty.noReports', { ns: 'annualReports' })}
          </motion.div>
        )}
      </section>
    </motion.main>
  );
}