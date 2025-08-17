import React, { ReactNode } from 'react';

interface ProductLayoutProps {
    children: ReactNode;
}

export default function ProductLayout({ children }: ProductLayoutProps) {
    return (
        <section style={{ padding: '2rem', maxWidth: 1200, margin: '0 auto' }}>
            <main>{children}</main>
        </section>
    );
}