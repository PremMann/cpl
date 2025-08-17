import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Product Page",
    description: "Welcome to the product page.",
};

export default function ProductLayout({ children }: { children: React.ReactNode }) {
    return (
        <div>
            {children}
        </div>
    );
}
