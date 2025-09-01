"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import ceoImage from "../../../../public/ceo.png";
import { useTranslation } from "react-i18next";
import { directorContent } from "../../../data/directorContent";

type Lang = 'en' | 'kh';

export default function DirectorProfilePage() {
  const { i18n } = useTranslation();
  const lang = (['en', 'kh'].includes(i18n.language) ? i18n.language : 'en') as Lang;
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 flex flex-col items-center">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center py-16 px-6"
      >
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight">{directorContent.name[lang]}</h1>
        <p className="mt-2 text-2xl text-blue-600 font-semibold">{directorContent.role[lang]}</p>
      </motion.section>

      {/* Photo */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="relative w-full max-w-4xl h-96 md:h-[500px] mb-12 overflow-hidden rounded-3xl bg-gray-100"
      >
        <Image
          src={ceoImage}
          alt={directorContent.name[lang]}
          fill
          priority
          sizes="(max-width: 768px) 100vw, 1024px"
          className="object-contain p-3"
        />
      </motion.div>

      {/* Bio & Speech */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl px-6 mb-20 space-y-10"
      >
        {/* Bio */}
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">{directorContent.bio[lang]}</p>

        {/* Speech */}
        <div className="relative">
          <span className="absolute left-0 top-0 h-full w-1 bg-blue-400 rounded-full"></span>
          <p className="pl-6 text-lg md:text-xl text-gray-800 leading-relaxed bg-blue-50/50 p-6 rounded-xl">
            {directorContent.speech[lang]}
          </p>
        </div>
      </motion.section>
    </div>
  );
}
