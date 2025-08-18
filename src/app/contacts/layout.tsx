import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | APMF",
  description:
    "Get in touch with APMF. Find branches, business hours, call center, and submit inquiries or complaints.",
};

export default function ContactLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return <section>{children}</section>
  }