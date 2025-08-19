"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import ceoImage from "../../../../public/ceo.png";

const director = {
  name: "Kikuchi Nobuhito",
  role: "CEO of Active People’s Microfinance Institution Plc",
  bio: "With over 20 years of leadership in the financial sector, Kikuchi provides strategic direction and governance oversight. His experience spans multiple international financial institutions, where he championed innovation and responsible growth.",
  speech: "In 2022, Active People’s Microfinance Institution Plc (AP) has become the leading financial institution in the country. For 11 years, AP has been standing steadily in the direction of improving the lives of Cambodians and supporting the government in national economic development. By the end of 2022, the institution achieved 281,695,309 US dollars in assets, including a total credit portfolio of 248,620,497 US dollars, and provided customers a total of 178,162 accounts with 29 branch operations and 570 employees. After the recovery of the economy after the Covid-19 crisis two years ago, in 2022, the institution has a net profit of 10,966,250 US dollars, an unprecedented amount. The Company continues to implement its strategy to increase its assets by providing more and more efficient credit to its customers. In addition to providing credit, we have also been actively involved with the Royal Government through The Cambodia Microfinance Association in blood donation and humanitarian assistance campaigns for flood-affected people in Kampong Thom province. In particular, the company always continues its activities directly to donate some money to the Cambodian Red Cross every year, and in 2022, the company has donated 20,000,000 Riels to the Cambodian Red Cross. In addition, the organization has donated $ 3,000 to help alleviate the hardships of the people affected by the October 2022 floods.",
  image: ceoImage.src,
};

export default function DirectorProfilePage() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 flex flex-col items-center">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center py-16 px-6"
      >
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight">{director.name}</h1>
        <p className="mt-2 text-2xl text-blue-600 font-semibold">{director.role}</p>
      </motion.section>

      {/* Photo */}
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
      className="relative w-full max-w-4xl h-96 md:h-[500px] mb-12 overflow-hidden rounded-3xl bg-gray-100"
    >
      <Image
        src={director.image}
        alt={director.name}
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
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">{director.bio}</p>

        {/* Speech */}
        <div className="relative">
          <span className="absolute left-0 top-0 h-full w-1 bg-blue-400 rounded-full"></span>
          <p className="pl-6 text-lg md:text-xl text-gray-800 leading-relaxed bg-blue-50/50 p-6 rounded-xl">
            {director.speech}
          </p>
        </div>
      </motion.section>
    </div>
  );
}
