import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Results",
  description: "Results description",
};

export default function ResultsLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return <section>{children}</section>
  }