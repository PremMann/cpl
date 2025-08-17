import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import product01 from "../../../../public/product01.jpg";

type Product = {
  name: string;
  image: string; // e.g. /products/quick-loan.jpg
  description: string;
  details?: string;
  features?: string[];
  stats?: {
    interestRate?: string;
    minAmount?: string;
    maxAmount?: string;
    term?: string;
  };
  applyHref?: string;
  brochureHref?: string;
};

const PRODUCTS: Record<string, Product> = {
  "quick-loan": {
    name: "Quick Loan",
    image: product01.src,
    description: "Fast approval for urgent personal expenses with flexible terms.",
    details:
      "Designed for urgent needs with a simple application process, clear terms, and rapid disbursement. Ideal for short-term personal financing.",
    features: ["Same-day approval", "Transparent fees", "Flexible repayment"],
    stats: { interestRate: "From 1.2% / month", minAmount: "$100", maxAmount: "$5,000", term: "1–24 months" },
    applyHref: "/standings/call-center",
  },
  "electronics-installment-loan": {
    name: "Electronics Installment Loan",
    image: product01.src,
    description: "Buy electronics now and pay monthly with transparent pricing.",
    details:
      "Finance electronics with fixed, predictable monthly payments. Partnered with leading retailers for a seamless experience.",
    features: ["Fixed installments", "Quick processing", "Clear pricing"],
    stats: { interestRate: "From 1.0% / month", minAmount: "$100", maxAmount: "$3,000", term: "3–24 months" },
    applyHref: "/standings/call-center",
  },
  "motorbike-installment-loan": {
    name: "Motorbike Installment Loan",
    image: product01.src,
    description: "Own a motorbike with low upfront cost and fixed monthly payments.",
    details:
      "Affordable financing for new or used motorbikes with quick processing and flexible tenors tailored to your budget.",
    features: ["Low down payment", "Flexible terms", "Easy documentation"],
    stats: { interestRate: "From 1.1% / month", minAmount: "$300", maxAmount: "$6,000", term: "6–36 months" },
    applyHref: "/standings/call-center",
  },
  "car-installment-loan": {
    name: "Car Installment Loan",
    image: product01.src,
    description: "Finance your car with competitive rates and clear terms.",
    details:
      "Whether new or pre-owned, our car loans offer predictable payments and quick turnaround so you can drive sooner.",
    features: ["Competitive rates", "Fast approval", "Flexible down payment"],
    stats: { interestRate: "From 1.0% / month", minAmount: "$2,000", maxAmount: "$30,000", term: "12–60 months" },
    applyHref: "/standings/call-center",
  },
  "land-installment-loan": {
    name: "Land Installment Loan",
    image: product01.src,
    description: "Structured payments for land purchases with confidence.",
    details:
      "Finance land purchases with installment plans that match your cash flow. Simple process and transparent pricing.",
    features: ["Flexible plans", "Clear documentation", "Dedicated support"],
    stats: { interestRate: "From 1.2% / month", minAmount: "$5,000", maxAmount: "$80,000", term: "12–84 months" },
    applyHref: "/standings/call-center",
  },
  "secured-installment-loan": {
    name: "Secured Installment Loan",
    image: product01.src,
    description: "Leverage your collateral for better rates and limits.",
    details:
      "Use eligible collateral to access higher limits and better pricing. Ideal for larger needs with stable repayment.",
    features: ["Higher limits", "Better pricing", "Predictable installments"],
    stats: { interestRate: "From 0.9% / month", minAmount: "$500", maxAmount: "$50,000", term: "6–60 months" },
    applyHref: "/standings/call-center",
  },
};

type Params = { params: { productId: string } };

export function generateStaticParams() {
  return Object.keys(PRODUCTS).map((productId) => ({ productId }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const product = PRODUCTS[params.productId];
  if (!product) return { title: "Product not found | APMF" };
  return {
    title: `${product.name} | APMF`,
    description: product.description,
    openGraph: {
      title: `${product.name} | APMF`,
      description: product.description,
      images: [{ url: product.image }],
    },
  };
}

export default function ProductDetails({ params: { productId } }: Params) {
  const product = PRODUCTS[productId];
  if (!product) return notFound();

  return (
    <section className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-12">
      {/* Breadcrumbs */}
      <nav className="text-sm text-gray-500 mb-3">
        <Link href="/" className="hover:text-gray-700">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/products" className="hover:text-gray-700">Products</Link>
        <span className="mx-2">/</span>
        <span className="text-gray-700">{product.name}</span>
      </nav>

      {/* Title */}
      <header className="mb-6">
        <h1 className="text-2xl md:text-4xl font-bold text-gray-900">{product.name}</h1>
        <p className="text-gray-600 mt-2 max-w-2xl">{product.description}</p>
      </header>

      {/* Hero + Key Info */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        <div className="relative w-full h-64 md:h-96 rounded-xl overflow-hidden border border-gray-100 bg-gray-50">
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover"
            priority
          />
        </div>

        <aside className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Key Information</h2>
          <dl className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {product.stats?.interestRate && (
              <div>
                <dt className="text-sm text-gray-500">Interest rate</dt>
                <dd className="text-base font-medium text-gray-900">{product.stats.interestRate}</dd>
              </div>
            )}
            {product.stats?.term && (
              <div>
                <dt className="text-sm text-gray-500">Loan term</dt>
                <dd className="text-base font-medium text-gray-900">{product.stats.term}</dd>
              </div>
            )}
            {product.stats?.minAmount && (
              <div>
                <dt className="text-sm text-gray-500">Min amount</dt>
                <dd className="text-base font-medium text-gray-900">{product.stats.minAmount}</dd>
              </div>
            )}
            {product.stats?.maxAmount && (
              <div>
                <dt className="text-sm text-gray-500">Max amount</dt>
                <dd className="text-base font-medium text-gray-900">{product.stats.maxAmount}</dd>
              </div>
            )}
          </dl>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href={product.applyHref ?? "/standings/call-center"}
              className="inline-flex items-center justify-center bg-[#f03134] hover:bg-[#d32629] text-white font-semibold px-5 py-2.5 rounded-md transition-colors"
            >
              Apply now
            </Link>
            {product.brochureHref && (
              <Link
                href={product.brochureHref}
                className="inline-flex items-center justify-center border border-gray-300 hover:border-gray-400 text-gray-800 font-semibold px-5 py-2.5 rounded-md"
              >
                Download brochure
              </Link>
            )}
          </div>
        </aside>
      </div>

      {/* Details + Highlights */}
      <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          {product.details && (
            <>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">About this product</h2>
              <p className="text-gray-700 leading-relaxed">{product.details}</p>
            </>
          )}
        </div>

        {product.features && product.features.length > 0 && (
          <aside className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Highlights</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              {product.features.map((f, i) => (
                <li key={i}>{f}</li>
              ))}
            </ul>
          </aside>
        )}
      </div>
    </section>
  );
}