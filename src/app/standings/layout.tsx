import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Standings",
  description: "Standings description",
};

export default function StandingsLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return <section>{children}</section>
  }