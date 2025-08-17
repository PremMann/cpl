"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import product01 from "../../public/product01.jpg";

export type Promotion = {
  id: string;
  title: string;
  summary: string;
  image: string;
  href: string;
  badge?: string;
  category?: string;
  validUntil?: string;
  terms?: string;
};

type PromotionsProps = {
  title?: string;
  promotions?: Promotion[];
  showFilters?: boolean;
};

const fallbackPromotions: Promotion[] = [
  {
    id: "p1",
    title: "Quick Loan – Fast Track Approval",
    summary: "Get funds fast for urgent needs with transparent pricing and flexible terms.",
    image: product01.src,
    href: "/products/quick-loan",
    badge: "Featured",
    category: "Loans",
    validUntil: "Dec 31, 2025",
    terms: "*T&Cs apply",
  },
  {
    id: "p2",
    title: "Electronics Installment – 0% Markup Promo",
    summary: "Own the latest devices now and pay monthly with clear, predictable payments.",
    image: product01.src,
    href: "/products/electronics-installment-loan",
    category: "Installments",
    validUntil: "Nov 30, 2025",
  },
  {
    id: "p3",
    title: "Motorbike Installment – Low Down Payment",
    summary: "Ride sooner with a low upfront cost and fixed monthly installments.",
    image: product01.src,
    href: "/products/motorbike-installment-loan",
    category: "Installments",
  },
  {
    id: "p4",
    title: "SME Working Capital – Grow Your Business",
    summary: "Flexible working capital financing tailored for SMEs and micro businesses.",
    image: product01.src,
    href: "/fixtures/sme-working-capital",
    category: "SME",
  },
  {
    id: "p5",
    title: "Car Installment – Drive with Confidence",
    summary: "Competitive rates and clear terms for new or pre-owned cars.",
    image: product01.src,
    href: "/products/car-installment-loan",
    category: "Installments",
  },
  {
    id: "p6",
    title: "Education Loan – Invest in Your Future",
    summary: "Support tuition and study expenses with predictable monthly payments.",
    image: product01.src,
    href: "/fixtures/education-loan",
    category: "Loans",
  },
  {
    id: "p7",
    title: "Land Installment – Plan with Confidence",
    summary: "Structured installment options for land purchases with transparent pricing.",
    image: product01.src,
    href: "/products/land-installment-loan",
    category: "Installments",
  },
  {
    id: "p8",
    title: "Secured Installment – Better Rates",
    summary: "Leverage your collateral for higher limits and better pricing.",
    image: product01.src,
    href: "/products/secured-installment-loan",
    category: "Loans",
  },
];

export default function Promotions({
  title = "Promotions",
  promotions = fallbackPromotions,
  showFilters = true,
}: PromotionsProps) {
  const [active, setActive] = useState<string>("All");

  const categories = useMemo(() => {
    const set = new Set<string>();
    promotions.forEach((p) => p.category && set.add(p.category));
    return ["All", ...Array.from(set)];
  }, [promotions]);

  const featured =
    promotions.find((p) => p.badge?.toLowerCase() === "featured") ?? promotions[0];

  const visible = useMemo(() => {
    const base = active === "All" ? promotions : promotions.filter((p) => p.category === active);
    // Keep featured first (if included), then others
    if (!featured) return base;
    return [featured, ...base.filter((p) => p.id !== featured.id)];
  }, [promotions, active, featured]);

  return (
    <section aria-labelledby="promotions-heading" className="w-full">
      {/* Section header */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 mb-6">
        <h2 id="promotions-heading" className="text-2xl md:text-3xl font-bold text-gray-900">
          {title}
        </h2>
        <p className="text-gray-600 mt-1">
          Latest offers and campaigns tailored to your financial goals.
        </p>
      </div>

      {/* Spotlight card (distinct look) */}
      {featured && (
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="relative overflow-hidden rounded-3xl shadow-xl ring-1 ring-black/5 bg-gradient-to-br from-[#f03135] to-[#d3262a] text-white">
            <div className="grid md:grid-cols-2">
              <div className="p-8 md:p-12">
                {featured.badge && (
                  <span className="inline-block bg-white/20 backdrop-blur px-3 py-1 rounded-full text-sm mb-3">
                    {featured.badge}
                  </span>
                )}
                <h3 className="text-2xl md:text-4xl font-extrabold leading-tight">
                  {featured.title}
                </h3>
                <p className="mt-3 text-white/90 text-base md:text-lg">
                  {featured.summary}
                </p>
                <div className="mt-6 flex flex-wrap items-center gap-3">
                  <Link
                    href={featured.href}
                    className="inline-flex items-center justify-center bg-white text-[#f03135] hover:bg-white/90 font-semibold px-5 py-2.5 rounded-md transition-colors shadow"
                    aria-label={`View details: ${featured.title}`}
                  >
                    Learn more
                  </Link>
                  {featured.validUntil && (
                    <span className="text-white/90 text-sm">
                      Valid until: {featured.validUntil}
                    </span>
                  )}
                  {featured.terms && (
                    <span className="text-white/70 text-xs">{featured.terms}</span>
                  )}
                </div>
              </div>
              <div className="relative">
                <div className="absolute inset-0 -z-10 opacity-30 blur-3xl">
                  <div className="h-full w-full bg-white/20" />
                </div>
                <div className="relative m-6 md:m-8 rounded-2xl bg-white/10 backdrop-blur p-3 shadow-lg">
                  <div className="relative h-56 md:h-80 rounded-xl overflow-hidden">
                    <Image
                      src={featured.image}
                      alt={featured.title}
                      fill
                      sizes="(min-width: 768px) 50vw, 100vw"
                      className="object-cover"
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Segmented filters (different from products page buttons) */}
      {showFilters && categories.length > 1 && (
        <div className="max-w-7xl mx-auto px-4 md:px-8 mt-8">
          <div className="inline-flex rounded-full bg-neutral-100 p-1 border border-neutral-200 shadow-inner">
            {categories.map((cat) => {
              const isActive = active === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActive(cat)}
                  className={[
                    "px-4 py-1.5 rounded-full text-sm font-medium transition-colors",
                    isActive
                      ? "bg-white text-gray-900 shadow"
                      : "text-gray-600 hover:text-gray-900",
                  ].join(" ")}
                  aria-pressed={isActive}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Horizontal media cards (distinct from product tiles) */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 mt-8">
        <div className="grid gap-5 md:gap-6 md:grid-cols-2">
          {visible.map((p, idx) => (
            <article
              key={p.id}
              className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-white to-gray-50 shadow-md ring-1 ring-gray-200 hover:shadow-lg hover:-translate-y-0.5 transition-all"
            >
              {/* Accent bar (skip for featured that's already highlighted) */}
              {idx !== 0 && (
                <span className="absolute inset-x-0 top-0 h-1 bg-[#f03135]" />
              )}

              <div className="grid grid-cols-1 sm:grid-cols-[160px,1fr] lg:grid-cols-[200px,1fr]">
                <div className="relative h-40 sm:h-full">
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    sizes="(min-width: 1024px) 200px, (min-width: 640px) 160px, 100vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  {/* Ribbon badge */}
                  {p.badge && (
                    <span className="absolute left-3 top-3 bg-[#f03135] text-white text-xs font-semibold px-2.5 py-1 rounded-full shadow">
                      {p.badge}
                    </span>
                  )}
                </div>

                <div className="p-4 md:p-6 flex flex-col">
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="text-lg font-semibold text-gray-900 leading-snug line-clamp-2">
                      {p.title}
                    </h3>
                    {p.category && (
                      <span className="text-xs text-gray-700 bg-gray-100 px-2 py-1 rounded-full shrink-0">
                        {p.category}
                      </span>
                    )}
                  </div>

                  <p className="text-sm text-gray-600 mt-2 line-clamp-3">{p.summary}</p>

                  <div className="mt-4 flex items-center justify-between">
                    <Link
                      href={p.href}
                      className="text-[#f03135] hover:text-[#d3262a] text-sm font-semibold underline underline-offset-4"
                      aria-label={`View details: ${p.title}`}
                    >
                      Learn more →
                    </Link>
                    {p.validUntil && (
                      <span className="text-xs text-gray-500">
                        Until {p.validUntil}
                      </span>
                    )}
                  </div>

                  {p.terms && (
                    <p className="text-[11px] text-gray-400 mt-2">{p.terms}</p>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}