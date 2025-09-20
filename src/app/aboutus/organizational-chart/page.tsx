"use client";

import { motion } from "framer-motion";
import '../../globals.css';
import '../../../lib/i18n';
import { useTranslation } from 'react-i18next';

// Types
interface Person {
  name: string;
  role: string;
  email?: string;
  phone?: string;
}

// Animation variants
const page = {
  initial: { opacity: 0, scale: 0.98 },
  animate: { opacity: 1, scale: 1, transition: { duration: 0.35, ease: "easeOut" } },
};

const fadeUp = {
  initial: { opacity: 0, y: 14 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
};

const stagger = {
  initial: {},
  animate: { transition: { staggerChildren: 0.06, delayChildren: 0.1 } },
};

const item = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

function initials(name: string) {
  const parts = name.trim().split(/\s+/);
  const a = parts[0]?.[0] ?? "";
  const b = parts[parts.length - 1]?.[0] ?? "";
  return (a + b).toUpperCase();
}

function Card({ p, labels }: { p: Person; labels: { email: string; phone: string } }) {
  return (
    <motion.article
      variants={item}
      whileHover={{ y: -4 }}
      className="group relative rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition-all duration-300 hover:shadow-lg"
    >
      <div
        className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(120% 90% at 50% 0%, rgba(240,49,53,0.07) 0%, rgba(240,49,53,0) 60%)",
        }}
      />
      <div className="relative flex items-start gap-4">
        <div className="h-12 w-12 shrink-0 rounded-full bg-gradient-to-br from-red-100 to-red-200 text-red-700 flex items-center justify-center font-semibold">
          {initials(p.name)}
        </div>
        <div className="min-w-0">
          <h3 className="text-sm md:text-base font-semibold text-gray-900 truncate">{p.name}</h3>
          <p className="mt-0.5 inline-flex items-center rounded-full bg-gray-100 px-2 py-0.5 text-[11px] font-medium text-gray-700 group-hover:bg-red-50 group-hover:text-red-700 transition-colors">
            {p.role}
          </p>
          {(p.email || p.phone) && (
            <div className="mt-3 space-y-1 text-xs text-gray-600">
              {p.email && (
                <p className="truncate">
                  <span className="text-gray-500">{labels.email}: </span>
                  <a className="text-blue-600 hover:underline" href={`mailto:${p.email}`}>{p.email}</a>
                </p>
              )}
              {p.phone && (
                <p>
                  <span className="text-gray-500">{labels.phone}: </span>
                  <a className="text-blue-600 hover:underline" href={`tel:${p.phone.replace(/\s|\(|\)/g, "")}`}>{p.phone}</a>
                </p>
              )}
            </div>
          )}
        </div>
      </div>
    </motion.article>
  );
}

export default function OrganizationalChartPage() {
  const { t } = useTranslation('orgChart');
  const heroTitle = t('heroTitle');
  const heroDescription = t('heroDescription');
  const labels = { email: t('labels.email'), phone: t('labels.phone') };
  // People arrays from translation JSON
  const top = t('top', { returnObjects: true }) as Person;
  const executives = t('executives', { returnObjects: true }) as Person[];
  const heads = t('heads', { returnObjects: true }) as Person[];

  return (
    <motion.main
      className="min-h-screen bg-white"
      variants={page}
      initial="initial"
      animate="animate"
    >
      <section className="border-b border-gray-100 bg-gradient-to-br from-red-50 to-white">
        <div className="mx-auto max-w-7xl px-4 md:px-8 py-10 md:py-14">
          <motion.div variants={fadeUp} initial="initial" animate="animate" className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900">{heroTitle}</h1>
            <p className="mt-3 text-gray-700">{heroDescription}</p>
          </motion.div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 md:px-8 py-12 md:py-16">
        <motion.div
          variants={stagger}
          initial="initial"
            whileInView="animate"
          viewport={{ once: true, amount: 0.2 }}
          className="flex flex-col items-center"
        >
          <div className="w-full max-w-sm">
            <Card p={top} labels={labels} />
          </div>
        </motion.div>

        <div className="relative h-12 md:h-14 my-6 md:my-8">
          <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-gray-300" />
        </div>

        <div className="relative mt-10">
          <div className="pointer-events-none absolute inset-x-0 -top-6 h-px bg-gray-300" />
          <motion.div
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
          >
            {executives.map((p) => (
              <div key={p.name} className="relative">
                <span className="pointer-events-none absolute -top-6 left-1/2 -translate-x-1/2 h-6 w-px bg-gray-300" />
                <Card p={p} labels={labels} />
              </div>
            ))}
          </motion.div>
        </div>

        <div className="relative h-10 md:h-12 my-6 md:my-8">
          <div className="absolute left-1/2 -translate-x-1/2 h-full w-px bg-gray-300" />
        </div>

        <div className="relative mt-8">
          <div className="pointer-events-none absolute inset-x-0 -top-5 h-px bg-gray-300" />
          <motion.div
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 md:gap-8"
          >
            {heads.map((p) => (
              <div key={p.name} className="relative">
                <span className="pointer-events-none absolute -top-5 left-1/2 -translate-x-1/2 h-5 w-px bg-gray-300" />
                <Card p={p} labels={labels} />
              </div>
            ))}
          </motion.div>
        </div>
      </section>
    </motion.main>
  );
}