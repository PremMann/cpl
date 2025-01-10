import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Stats",
  description: "Stats description",
};

export default function StatsLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return <section>{children}</section>
  }