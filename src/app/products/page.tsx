import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import product01 from "../../../public/product01.jpg";

export const metadata: Metadata = {
  title: "Products | APMF",
  description: "Explore APMF loan products with clear terms and quick approval.",
};

type Product = {
  slug: string;
  name: string;
  image: string; 
  description: string;
};

const PRODUCTS: Product[] = [
  {
    slug: "quick-loan",
    name: "Quick Loan",
    image: product01.src,
    description: "Fast approval for urgent personal expenses with flexible terms.",
  },
  {
    slug: "electronics-installment-loan",
    name: "Electronics Installment Loan",
    image: product01.src,
    description: "Buy electronics now and pay monthly with transparent pricing.",
  },
  {
    slug: "motorbike-installment-loan",
    name: "Motorbike Installment Loan",
    image: product01.src,
    description: "Own a motorbike with low upfront cost and fixed monthly payments.",
  },
  {
    slug: "car-installment-loan",
    name: "Car Installment Loan",
    image: product01.src,
    description: "Finance your car with competitive rates and clear terms.",
  },
  {
    slug: "land-installment-loan",
    name: "Land Installment Loan",
    image: product01.src,
    description: "Structured payments for land purchases with confidence.",
  },
  {
    slug: "secured-installment-loan",
    name: "Secured Installment Loan",
    image: product01.src,
    description: "Leverage your collateral for better rates and limits.",
  },
];

export default function ProductsPage() {
  return (
    <section className="max-w-7xl mx-auto px-4 md:px-8 py-10 md:py-14">
      <header className="mb-8 md:mb-10">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900">Our Products</h1>
        <p className="text-gray-600 mt-2">
          Transparent pricing, quick approval, and flexible terms to fit your needs.
        </p>
      </header>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {PRODUCTS.map((p) => (
          <article
            key={p.slug}
            className="bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow overflow-hidden"
          >
            <Link href={`/products/${p.slug}`} aria-label={`View ${p.name}`}>
              <div className="relative h-44">
                <Image
                  src={p.image}
                  alt={p.name}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover"
                  priority={p.slug === "quick-loan"}
                />
              </div>
            </Link>
            <div className="p-4 flex flex-col gap-2">
              <h2 className="text-lg font-semibold text-gray-900">{p.name}</h2>
              <p className="text-sm text-gray-600 line-clamp-3">{p.description}</p>
              <div className="mt-2">
                <Link
                  href={`/products/${p.slug}`}
                  className="inline-block text-sm font-semibold text-[#f03134] hover:text-[#d32629]"
                >
                  View details →
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}