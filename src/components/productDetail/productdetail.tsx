import Image from "next/image";
import Link from "next/link";

export type ProductDetailProps = {
  name: string;
  image: string; // public path e.g. /products/quick-loan.jpg
  description: string; // short summary
  details?: string; // longer body text
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

export default function ProductDetail({
  name,
  image,
  description,
  details,
  features = [],
  stats = {},
  applyHref = "/standings/call-center",
  brochureHref,
}: ProductDetailProps) {
  return (
    <section className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-12">
      {/* Header */}
      <div className="mb-6">
        <nav className="text-sm text-gray-500 mb-2">
          <Link href="/" className="hover:text-gray-700">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/fixtures" className="hover:text-gray-700">Products</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-700">{name}</span>
        </nav>
        <h1 className="text-2xl md:text-4xl font-bold text-gray-900">{name}</h1>
        <p className="text-gray-600 mt-2 max-w-2xl">{description}</p>
      </div>

      {/* Hero block */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        <div className="relative w-full h-64 md:h-96 rounded-xl overflow-hidden border border-gray-100 bg-gray-50">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover"
            sizes="(min-width: 768px) 50vw, 100vw"
            priority
          />
        </div>

        <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Key Information</h2>
          <dl className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {stats.interestRate && (
              <div>
                <dt className="text-sm text-gray-500">Interest rate</dt>
                <dd className="text-base font-medium text-gray-900">{stats.interestRate}</dd>
              </div>
            )}
            {stats.term && (
              <div>
                <dt className="text-sm text-gray-500">Loan term</dt>
                <dd className="text-base font-medium text-gray-900">{stats.term}</dd>
              </div>
            )}
            {stats.minAmount && (
              <div>
                <dt className="text-sm text-gray-500">Min amount</dt>
                <dd className="text-base font-medium text-gray-900">{stats.minAmount}</dd>
              </div>
            )}
            {stats.maxAmount && (
              <div>
                <dt className="text-sm text-gray-500">Max amount</dt>
                <dd className="text-base font-medium text-gray-900">{stats.maxAmount}</dd>
              </div>
            )}
          </dl>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href={applyHref}
              className="inline-flex items-center justify-center bg-[#f03134] hover:bg-[#d32629] text-white font-semibold px-5 py-2.5 rounded-md transition-colors"
            >
              Apply now
            </Link>
            {brochureHref && (
              <Link
                href={brochureHref}
                className="inline-flex items-center justify-center border border-gray-300 hover:border-gray-400 text-gray-800 font-semibold px-5 py-2.5 rounded-md"
              >
                Download brochure
              </Link>
            )}
          </div>
        </div>
      </div>

      {/* Details and features */}
      <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          {details && (
            <>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">About this product</h2>
              <p className="text-gray-700 leading-relaxed">{details}</p>
            </>
          )}
        </div>

        {features.length > 0 && (
          <aside className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Highlights</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              {features.map((f, i) => (
                <li key={i}>{f}</li>
              ))}
            </ul>
          </aside>
        )}
      </div>
    </section>
  );
}