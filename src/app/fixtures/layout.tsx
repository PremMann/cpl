import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fixtres",
  description: "Fixtures description",
};

export default function DownloadsLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return <section>{children}</section>
  }