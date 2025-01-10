import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact description",
};

export default function ContactLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return <section>{children}</section>
  }