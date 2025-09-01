"use client";

// import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import React from 'react';
import '../../../../src/lib/i18n';
import product01 from "../../../../public/product01.jpg";
import { useTranslation } from 'react-i18next';

interface ProductDetail {
  name: string;
  description: string;
  details?: string;
  features?: string[];
  stats?: { interestRate?: string; minAmount?: string; maxAmount?: string; term?: string };
  applyHref?: string;
  brochureHref?: string;
  image: string;
}

interface ProductListItem { slug: string; name: string; description: string }
type ProductDetailTranslation = Partial<ProductDetail>;

function getProductBase(slug: string, t: (k: string, o?: { returnObjects?: boolean }) => unknown): { name: string; description: string } | null {
  const list = t('list', { returnObjects: true }) as ProductListItem[];
  const found = list.find(p => p.slug === slug);
  return found ? { name: found.name, description: found.description } : null;
}

function getFullProduct(slug: string, t: (k: string, o?: { returnObjects?: boolean }) => unknown): ProductDetail | null {
  const base = getProductBase(slug, t);
  if (!base) return null;
  const detailKey = `details.${slug}`;
  const detailObj = t(detailKey, { returnObjects: true }) as ProductDetailTranslation;
  const image = product01.src; // fallback static image; adapt if per-product assets later
  return { name: base.name, description: base.description, image, ...detailObj };
}

// export function generateStaticParams(): { productId: string }[] {
//   // Keep static list aligned with translation JSON slugs
//   return [
//     'quick-loan',
//     'electronics-installment-loan',
//     'motorbike-installment-loan',
//     'car-installment-loan',
//     'land-installment-loan',
//     'secured-installment-loan'
//   ].map(productId => ({ productId }));
// }

// export async function generateMetadata(
//   { params }: { params: Promise<{ productId: string }> }
// ): Promise<Metadata> {
//   const { productId } = await params;
//   // Metadata fallback (can't use client hook). Import JSON directly.
//   // Dynamic import to avoid bundling for all locales.
//   const en = await import('../../../../public/locales/en/products.json');
//   const base = (en as any).default.list.find((p: any) => p.slug === productId);
//   if (!base) return { title: 'Product not found | APMF' };
//   return {
//     title: `${base.name} | APMF`,
//     description: base.description,
//     openGraph: {
//       title: `${base.name} | APMF`,
//       description: base.description,
//       images: [{ url: product01.src }],
//     },
//   };
// }

export default function ProductDetails({ params }: { params: Promise<{ productId: string }> }) {
  const { productId } = React.use(params);
  return <ClientProductDetails productId={productId} />;
}

// Client component to use translation hook
function ClientProductDetails({ productId }: { productId: string }) {
  const { t } = useTranslation('products');
  const product = getFullProduct(productId, t);
  if (!product) return notFound();
  const labels = t('labels', { returnObjects: true }) as {
    breadcrumbs: { home: string; products: string };
    keyInformation: string; interestRate: string; loanTerm: string; minAmount: string; maxAmount: string;
    applyNow: string; downloadBrochure: string; about: string; highlights: string;
  };
  return (
    <section className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-12">
      <nav className="text-sm text-gray-500 mb-3">
        <Link href="/" className="hover:text-gray-700">{labels.breadcrumbs.home}</Link>
        <span className="mx-2">/</span>
        <Link href="/products" className="hover:text-gray-700">{labels.breadcrumbs.products}</Link>
        <span className="mx-2">/</span>
        <span className="text-gray-700">{product.name}</span>
      </nav>
      <header className="mb-6">
        <h1 className="text-2xl md:text-4xl font-bold text-gray-900">{product.name}</h1>
        <p className="text-gray-600 mt-2 max-w-2xl">{product.description}</p>
      </header>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        <div className="relative w-full h-64 md:h-96 rounded-xl overflow-hidden border border-gray-100 bg-gray-50">
          <Image src={product.image} alt={product.name} fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover" priority />
        </div>
        <aside className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">{labels.keyInformation}</h2>
          <dl className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {product.stats?.interestRate && (
              <div>
                <dt className="text-sm text-gray-500">{labels.interestRate}</dt>
                <dd className="text-base font-medium text-gray-900">{product.stats.interestRate}</dd>
              </div>
            )}
            {product.stats?.term && (
              <div>
                <dt className="text-sm text-gray-500">{labels.loanTerm}</dt>
                <dd className="text-base font-medium text-gray-900">{product.stats.term}</dd>
              </div>
            )}
            {product.stats?.minAmount && (
              <div>
                <dt className="text-sm text-gray-500">{labels.minAmount}</dt>
                <dd className="text-base font-medium text-gray-900">{product.stats.minAmount}</dd>
              </div>
            )}
            {product.stats?.maxAmount && (
              <div>
                <dt className="text-sm text-gray-500">{labels.maxAmount}</dt>
                <dd className="text-base font-medium text-gray-900">{product.stats.maxAmount}</dd>
              </div>
            )}
          </dl>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href={product.applyHref ?? '/standings/call-center'} className="inline-flex items-center justify-center bg-[#f03134] hover:bg-[#d32629] text-white font-semibold px-5 py-2.5 rounded-md transition-colors">
              {labels.applyNow}
            </Link>
            {product.brochureHref && (
              <Link href={product.brochureHref} className="inline-flex items-center justify-center border border-gray-300 hover:border-gray-400 text-gray-800 font-semibold px-5 py-2.5 rounded-md">
                {labels.downloadBrochure}
              </Link>
            )}
          </div>
        </aside>
      </div>
      <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          {product.details && (
            <>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">{labels.about}</h2>
              <p className="text-gray-700 leading-relaxed">{product.details}</p>
            </>
          )}
        </div>
        {product.features && product.features.length > 0 && (
          <aside className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">{labels.highlights}</h3>
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