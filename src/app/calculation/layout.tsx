import type { Metadata } from 'next';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
    title: 'Calculation',
    description: 'Calculation tools and results',
};

type Props = {
    children: ReactNode;
};

export default function CalculationLayout({ children }: Props) {
    return (
        <section aria-label="Calculation">
            <main>{children}</main>
        </section>
    );
}