"use client";

import { motion } from "framer-motion";
import { Target, Eye, ShieldCheck, Users, Leaf, Sparkles } from "lucide-react";

// Variants for smooth, minimal animations
const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const stagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.08 },
  },
};

export default function MissionVisionPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-blue-50 via-white to-white" />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mx-auto max-w-4xl px-6 pt-20 pb-12 text-center"
        >
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-gray-900">
            Our Mission & Vision
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Clear purpose. Bold direction. We align our daily actions with long-term impact for our customers, team, and community.
          </p>
        </motion.div>
      </section>

      {/* Mission / Vision cards */}
      <section className="mx-auto max-w-6xl px-6 pb-6">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {/* Mission */}
          <motion.div
            variants={fadeInUp}
            className="group relative rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition hover:shadow-md"
          >
            <div className="flex items-start gap-4">
              <div className="rounded-xl border border-blue-100 bg-blue-50 p-3">
                <Target className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h2 className="text-2xl font-semibold text-gray-900">Mission</h2>
                <p className="mt-2 text-gray-600">
                  Empower people and businesses through accessible, transparent, and responsible financial services that create lasting value.
                </p>
              </div>
            </div>
            <ul className="mt-6 space-y-2 text-gray-700">
              <li className="flex items-start gap-2"><ShieldCheck className="mt-0.5 h-5 w-5 text-blue-600"/> Operate with integrity and client-first service.</li>
              <li className="flex items-start gap-2"><Users className="mt-0.5 h-5 w-5 text-blue-600"/> Build products that are inclusive and easy to use.</li>
              <li className="flex items-start gap-2"><Leaf className="mt-0.5 h-5 w-5 text-blue-600"/> Drive sustainable growth for communities.</li>
            </ul>
          </motion.div>

          {/* Vision */}
          <motion.div
            variants={fadeInUp}
            className="group relative rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition hover:shadow-md"
          >
            <div className="flex items-start gap-4">
              <div className="rounded-xl border border-purple-100 bg-purple-50 p-3">
                <Eye className="h-6 w-6 text-purple-600" />
              </div>
              <div>
                <h2 className="text-2xl font-semibold text-gray-900">Vision</h2>
                <p className="mt-2 text-gray-600">
                  Be the most trusted, human-centered financial partner in our region—setting the standard for simplicity, fairness, and impact.
                </p>
              </div>
            </div>
            <ul className="mt-6 space-y-2 text-gray-700">
              <li className="flex items-start gap-2"><Sparkles className="mt-0.5 h-5 w-5 text-purple-600"/> Delight customers with seamless experiences.</li>
              <li className="flex items-start gap-2"><ShieldCheck className="mt-0.5 h-5 w-5 text-purple-600"/> Lead with transparency and data ethics.</li>
              <li className="flex items-start gap-2"><Users className="mt-0.5 h-5 w-5 text-purple-600"/> Grow opportunity through financial inclusion.</li>
            </ul>
          </motion.div>
        </motion.div>
      </section>

      {/* Values */}
      <section className="mx-auto max-w-6xl px-6 py-10">
        <motion.h3
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="text-center text-2xl font-semibold text-gray-900"
        >
          Our Core Values
        </motion.h3>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {[
            {
              icon: <ShieldCheck className="h-6 w-6" />, title: "Integrity", desc: "We keep our promises and act openly and fairly.",
            },
            {
              icon: <Users className="h-6 w-6" />, title: "Empathy", desc: "We listen first and design with people in mind.",
            },
            {
              icon: <Leaf className="h-6 w-6" />, title: "Sustainability", desc: "We balance performance with long-term impact.",
            },
            {
              icon: <Sparkles className="h-6 w-6" />, title: "Excellence", desc: "We pursue clarity, craft, and continuous improvement.",
            },
          ].map((v, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              className="rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition"
            >
              <div className="mb-3 inline-flex rounded-xl border border-gray-200 p-3 text-gray-900">
                {v.icon}
              </div>
              <div className="text-lg font-semibold text-gray-900">{v.title}</div>
              <p className="mt-1 text-gray-600">{v.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* CTA / Footer band */}
      <section className="relative">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white to-blue-50" />
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-5xl rounded-3xl border border-gray-200 bg-white p-8 md:p-12 shadow-sm"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-6">
            <div className="md:col-span-2">
              <h4 className="text-xl font-semibold text-gray-900">Aligned with our purpose</h4>
              <p className="mt-2 text-gray-600">Every initiative we undertake is measured against our mission and vision, ensuring we deliver meaningful outcomes.</p>
            </div>
            <div className="flex justify-start md:justify-end">
              <a
                href="#"
                className="inline-flex items-center justify-center rounded-xl border border-gray-300 px-5 py-3 text-sm font-medium text-gray-900 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
              >
                Learn more
              </a>
            </div>
          </div>
        </motion.div>
      </section>

      <div className="h-16" />
    </main>
  );
}
