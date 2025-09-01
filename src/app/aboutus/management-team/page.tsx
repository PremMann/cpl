"use client";


import { motion } from "framer-motion";
import Image from "next/image";
import ceoImage from "../../../../public/ceo.png";
import { managementTeamContent } from "../../../data/managementTeamContent";

// Attach image to each member (if not in static file)
const teamMembers = managementTeamContent.teamMembers.map((member) => ({
  ...member,
  image: ceoImage.src,
}));

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.7, ease: "easeOut" },
  }),
};

export default function ManagementTeamPage() {
  return (
    <main className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-50 via-white to-blue-50 py-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto px-6"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {managementTeamContent.heroTitle}
          </h1>
          <p className="text-lg text-gray-600">
            {managementTeamContent.heroDescription}
          </p>
        </motion.div>
      </section>

      {/* Team Section */}
      <section className="max-w-6xl mx-auto px-6 py-16 space-y-24">
        {teamMembers.map((member, index) => (
          <motion.div
            key={index}
            custom={index}
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className={`flex flex-col md:flex-row items-center gap-10 ${
              index % 2 === 1 ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* Image */}
            <div className="w-full md:w-1/2 flex justify-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="rounded-2xl overflow-hidden shadow-lg"
              >
                <Image
                  src={member.image}
                  alt={member.name}
                  width={400}
                  height={400}
                  className="object-cover w-full h-[400px]"
                />
              </motion.div>
            </div>

            {/* Info */}
            <div className="w-full md:w-1/2 space-y-4 text-center md:text-left">
              <h3 className="text-2xl font-semibold text-gray-900">
                {member.name}
              </h3>
              <p className="text-blue-600 font-medium">{member.role}</p>
              <p className="text-gray-500">{member.email} | {member.phone}</p>

              <div className="mt-4 space-y-3 text-gray-700">
                <p><span className="font-semibold">{managementTeamContent.experienceLabel}</span> {member.experience}</p>
                <p><span className="font-semibold">{managementTeamContent.educationLabel}</span> {member.education}</p>
                <p><span className="font-semibold">{managementTeamContent.backgroundLabel}</span> {member.background}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </section>
    </main>
  );
}
