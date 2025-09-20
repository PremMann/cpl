"use client";
import Image from "next/image";
import Link from "next/link";
import '../../lib/i18n';
import { useTranslation } from 'react-i18next';
import product01 from '../../../public/product01.jpg';
type Product = { slug: string; name: string; description: string; image: string };

function useProducts(): { products: Product[]; heroTitle: string; heroDescription: string; viewDetails: string; ariaView: (name: string) => string } {
  const { t } = useTranslation('products');
  const items = t('list', { returnObjects: true }) as { slug: string; name: string; description: string; image: string }[];
  const fallbackImage = product01.src;
  const mapped: Product[] = (items || []).map((p) => ({
    ...p,
    image: p.image || fallbackImage,
  }));
  return {
    products: mapped,
    heroTitle: t('heroTitle'),
    heroDescription: t('heroDescription'),
    viewDetails: t('viewDetails'),
    ariaView: (name: string) => t('ariaView', { name }),
  };
}

export default function ProductsPage() {
  const { products, heroTitle, heroDescription, viewDetails, ariaView } = useProducts();
  return (
    <section className="max-w-7xl mx-auto px-4 md:px-8 py-10 md:py-14">
      <header className="mb-8 md:mb-10">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900">{heroTitle}</h1>
        <p className="text-gray-600 mt-2">{heroDescription}</p>
      </header>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((p) => (
          <article key={p.slug} className="bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow overflow-hidden">
            <Link href={`/products/${p.slug}`} aria-label={ariaView(p.name)}>
              <div className="relative h-44">
                <Image
                  src={p.image}
                  alt={p.name}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover"
                  priority={p.slug === 'quick-loan'}
                />
              </div>
            </Link>
            <div className="p-4 flex flex-col gap-2">
              <h2 className="text-lg font-semibold text-gray-900">{p.name}</h2>
              <p className="text-sm text-gray-600 line-clamp-3">{p.description}</p>
              <div className="mt-2">
                <Link href={`/products/${p.slug}`} className="inline-block text-sm font-semibold text-[#f03134] hover:text-[#d32629]">
                  {viewDetails}
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}