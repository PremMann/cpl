import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Downloads",
  description: "Downloads description",
};

export default function DownloadsLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return <section>{children}</section>
  }