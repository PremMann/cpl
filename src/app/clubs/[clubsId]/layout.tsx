import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Clubs Details",
  description: "Clubs Details description",
};

export default function ClubsLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return <section>{children}</section>
  }