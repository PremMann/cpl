"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import slide02 from "../../public/slide02.jpg";
import slide03 from "../../public/slide03.jpg";
import slide04 from "../../public/slide04.jpg";
import slide05 from "../../public/slide05.png";
import product01 from "../../public/product01.jpg";

import Promotions from "./promotions";

type Slide = {
  title: string;
  subtitle: string;
  ctaLabel: string;
  ctaHref: string;
  image: string; // public path
  alt: string;
};

type Product = {
  name: string;
  image: string; // public path
  detailHref: string;
  description: string;
};

const slides: Slide[] = [
  {
    title: "Empowering Your Financial Journey",
    subtitle: "Fast, transparent, and responsible microfinance services.",
    ctaLabel: "Explore Products",
    ctaHref: "/fixtures",
    image: slide02.src,
    alt: "Customer receiving financial consultation at branch",
  },
  {
    title: "Loans That Fit Your Needs",
    subtitle: "Flexible terms and quick approval to help you grow.",
    ctaLabel: "Get Started",
    ctaHref: "/standings/call-center",
    image: slide03.src,
    alt: "Small business owner working in a shop",
  },
  {
    title: "Trusted Across Communities",
    subtitle: "Serving individuals and SMEs with care and integrity.",
    ctaLabel: "Find a Branch",
    ctaHref: "/standings/branch-locator",
    image: slide04.src,
    alt: "Branch location service on a map",
  },
  {
    title: "Empowering Small Businesses",
    subtitle: "Tailored financing solutions for your growth.",
    ctaLabel: "Learn More",
    ctaHref: "/standings/call-center",
    image: slide05.src,
    alt: "Small business owner reviewing financial documents",
  },
];

const products: Product[] = [
  {
    name: "Quick Loan",
    image: product01.src,
    detailHref: "/products/quick-loan",
    description: "Fast approval for urgent personal expenses with flexible terms.",
  },
  {
    name: "Electronics Installment Loan",
    image: product01.src,
    detailHref: "/products/electronics-installment-loan",
    description: "Buy electronics now and pay monthly with transparent pricing.",
  },
  {
    name: "Motorbike Installment Loan",
    image: product01.src,
    detailHref: "/products/motorbike-installment-loan",
    description: "Own a motorbike with low upfront cost and fixed monthly payments.",
  },
  {
    name: "Car Installment Loan",
    image: product01.src,
    detailHref: "/products/car-installment-loan",
    description: "Finance your car with competitive rates and clear terms.",
  },
  {
    name: "Land Installment Loan",
    image: product01.src,
    detailHref: "/products/land-installment-loan",
    description: "Structured payments for land purchases with confidence.",
  },
  {
    name: "Secured Installment Loan",
    image: product01.src,
    detailHref: "/products/secured-installment-loan",
    description: "Leverage your collateral for better rates and limits.",
  },
  {
    name: "SME Working Capital",
    image: product01.src,
    detailHref: "/products/sme-working-capital",
    description: "Fuel daily operations and growth with tailored financing.",
  },
  {
    name: "Education Loan",
    image: product01.src,
    detailHref: "/products/education-loan",
    description: "Invest in education with flexible and predictable payments.",
  },
];

export default function HomeLanding() {
  const [index, setIndex] = useState(0);
  const delayMs = 6000;

  useEffect(() => {
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, delayMs);
    return () => window.clearInterval(id);
  }, []);

  const goPrev = () => setIndex((i) => (i - 1 + slides.length) % slides.length);
  const goNext = () => setIndex((i) => (i + 1) % slides.length);

  return (
    <div className="flex flex-col gap-14">
      {/* Hero Slideshow */}
      <section className="relative w-full">
        <div className="relative h-[380px] sm:h-[460px] md:h-[520px] w-full overflow-hidden">
          {slides.map((s, i) => (
            <div
              key={s.image}
              className={`absolute inset-0 transition-opacity duration-700 ${i === index ? "opacity-100" : "opacity-0"}`}
              aria-hidden={i !== index}
            >
              <div className="absolute inset-0">
                <Image
                  src={s.image}
                  alt={s.alt}
                  fill
                  priority={i === 0}
                  sizes="100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/40" />
              </div>

              <div className="relative z-10 h-full max-w-7xl mx-auto px-4 md:px-8 flex items-center">
                <div className="text-white max-w-2xl">
                  <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold leading-tight">
                    {s.title}
                  </h1>
                  <p className="mt-3 md:mt-4 text-base md:text-lg text-white/90">
                    {s.subtitle}
                  </p>
                  <div className="mt-6">
                    <Link
                      href={s.ctaHref}
                      className="inline-block bg-[#f03134] hover:bg-[#d32629] text-white font-semibold px-5 py-3 rounded-md shadow-md transition-colors"
                    >
                      {s.ctaLabel}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Controls */}
          <button
            aria-label="Previous slide"
            onClick={goPrev}
            className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 rounded-full w-10 h-10 grid place-items-center shadow"
          >
            ‹
          </button>
          <button
            aria-label="Next slide"
            onClick={goNext}
            className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 rounded-full w-10 h-10 grid place-items-center shadow"
          >
            ›
          </button>

          {/* Indicators */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                aria-label={`Go to slide ${i + 1}`}
                onClick={() => setIndex(i)}
                className={`h-2.5 w-2.5 rounded-full transition-all ${i === index ? "bg-white w-6" : "bg-white/60"}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-end justify-between mb-6">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Our Products</h2>
          <Link href="/fixtures" className="text-[#f03134] hover:text-[#d32629] font-semibold">
            View all
          </Link>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((p) => (
            <article key={p.name} className="bg-white rounded-xl shadow hover:shadow-lg transition-shadow border border-gray-100 overflow-hidden">
              <div className="relative h-40">
                <Image
                  src={p.image}
                  alt={p.name}
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="p-4 flex flex-col gap-2">
                <h3 className="text-lg font-semibold text-gray-900">{p.name}</h3>
                <p className="text-sm text-gray-600 line-clamp-3">{p.description}</p>
                <div className="mt-2">
                  <Link
                    href={p.detailHref}
                    className="inline-block text-sm font-semibold text-[#f03134] hover:text-[#d32629]"
                    aria-label={`View details for ${p.name}`}
                  >
                    Product details →
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
        {/* Promotions Section */}
        <section className="max-w-7xl mx-auto px-4 md:px-8 mt-10">
            <Promotions />
        </section>
    </div>
  );
}