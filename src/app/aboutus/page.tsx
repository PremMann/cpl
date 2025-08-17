import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import award from "./../../../public/award.jpg";
import quality from "./../../../public/quality.jpg";
import reverd from "./../../../public/reverd.png";

export const metadata: Metadata = {
  title: "Our History | APMF",
  description:
    "Discover APMF’s journey and milestones, including international awards for quality and growth.",
};

export default function OurHistoryPage() {
  const awards = [
    {
      title: "Quality Choice Prize 2024",
      description:
        "Recognized for our commitment to service excellence, transparent pricing, and continuous process improvement across the organization.",
      image: award.src
    },
    {
      title: "Fastest Growing Microfinance Cambodia 2024",
      description:
        "Awarded for strong, sustainable portfolio growth driven by responsible lending and customer-centric innovation.",
      image: quality.src
    },
    {
      title: "Quality Achievements Award 2023",
      description:
        "Honored for consistent quality management practices and our dedication to improving customer experience.",
      image: reverd.src,
    },
  ];

  return (
    <main className="min-h-screen">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-6">
        <nav className="text-sm text-gray-500">
          <Link href="/" className="hover:text-gray-700">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/about" className="hover:text-gray-700">About Us</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-700">Our History</span>
        </nav>
      </div>

      <section className="bg-gradient-to-br from-red-50 to-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-10 md:py-14">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">Our History</h1>
          <p className="mt-3 max-w-3xl text-gray-700">
            From our beginnings as a community-focused microfinance provider to a nationwide
            institution, APMF has grown by empowering customers with clear, fair, and flexible financing.
          </p>
        </div>
      </section>

    <section className="max-w-7xl mx-auto px-4 md:px-8 py-10 md:py-14">
      <div>
        <h2 className="text-2xl font-semibold text-gray-900">Milestones and Growth</h2>
        <p className="mt-3 text-gray-700 leading-relaxed">
        We began with a simple mission: enable access to responsible finance. Over the years,
        we expanded our footprint, broadened our product suite, and invested in digital experiences.
        Our growth has always been grounded in strong governance, risk discipline, and a customer-first mindset.
        </p>
        <ul className="mt-5 space-y-2 text-gray-700">
        <li>• Expansion from a single-branch service to a nationwide presence</li>
        <li>• Launch of installment and secured products with clear, predictable terms</li>
        <li>• Investments in customer support, branch accessibility, and digital tools</li>
        </ul>
        <div className="mt-6">
        <Link
          href="/products"
          className="inline-flex items-center justify-center bg-[#f03135] hover:bg-[#d3262a] text-white font-semibold px-5 py-2.5 rounded-md transition-colors"
        >
          Explore our products
        </Link>
        </div>
      </div>
    </section>

      <section className="max-w-7xl mx-auto px-4 md:px-8 pb-14">
        <h2 className="text-2xl font-semibold text-gray-900">Awards and Recognition</h2>
        <p className="mt-2 text-gray-700">International recognition for quality and sustainable growth.</p>

        <div className="mt-8 grid gap-6 md:gap-8">
          {awards.map((a, i) => (
            <article
              key={a.title}
              className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden"
            >
              <div className={`order-1 ${i % 2 === 1 ? "md:order-2" : ""}`}>
                <div className="relative w-full h-64 md:h-80 bg-gray-50">
                  <Image
                    src={a.image}
                    alt={a.title}
                    fill
                    className="object-cover"
                    sizes="(min-width: 768px) 50vw, 100vw"
                  />
                </div>
              </div>
              <div className={`order-2 p-5 md:p-7 ${i % 2 === 1 ? "md:order-1" : ""}`}>
                <h3 className="text-xl font-semibold text-gray-900">{a.title}</h3>
                <p className="mt-3 text-gray-700">{a.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}