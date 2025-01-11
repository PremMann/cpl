import { Metadata } from "next";

export const metadata: Metadata = {
  title: "News",
  description: "News description",
};

export default function NewsLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return <section>{children}</section>
  }