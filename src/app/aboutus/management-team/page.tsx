"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import ceoImage from "../../../../public/ceo.png";

const teamMembers = [
  {
    name: "John Smith",
    role: "Chief Executive Officer",
    email: "john.smith@example.com",
    phone: "+855 123456789",
    image: ceoImage.src,
    experience:
      "Over 20 years of leadership in the financial services industry, driving growth and innovation across multiple markets.",
    education:
      "MBA in Business Administration, Harvard Business School.",
    background:
      "John has led major organizational transformations and is passionate about building sustainable financial solutions.",
  },
  {
    name: "Sarah Lee",
    role: "Chief Financial Officer",
    email: "sarah.lee@example.com",
    phone: "+855 987654321",
    image: ceoImage.src,
    experience:
      "15 years in corporate finance, specializing in risk management, investment strategies, and operational efficiency.",
    education:
      "Chartered Financial Analyst (CFA), MSc in Finance from London School of Economics.",
    background:
      "Sarah has managed billion-dollar portfolios and focuses on financial transparency and accountability.",
  },
  {
    name: "Michael Chen",
    role: "Head of Operations",
    email: "michael.chen@example.com",
    phone: "+855 555444333",
    image: ceoImage.src,
    experience:
      "10 years of operational leadership in microfinance and digital banking solutions.",
    education: "Bachelor’s Degree in Information Systems, MIT.",
    background:
      "Michael specializes in streamlining processes and implementing technology-driven solutions.",
  },
  {
    name: "Anna Brown",
    role: "Head of Marketing",
    email: "anna.brown@example.com",
    phone: "+855 111222333",
    image: ceoImage.src,
    experience:
      "12 years of experience in brand strategy, communications, and digital marketing.",
    education: "BA in Marketing, University of Melbourne.",
    background:
      "Anna has successfully built campaigns for leading financial brands and focuses on customer engagement.",
  },
];

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
            Meet Our Management Team
          </h1>
          <p className="text-lg text-gray-600">
            Get to know the leaders driving our vision and guiding our company
            with dedication, expertise, and innovation.
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
                <p><span className="font-semibold">Experience:</span> {member.experience}</p>
                <p><span className="font-semibold">Education:</span> {member.education}</p>
                <p><span className="font-semibold">Background:</span> {member.background}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </section>
    </main>
  );
}
