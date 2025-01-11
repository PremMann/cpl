import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Videos",
  description: "Videos description",
};

export default function VideosLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return <section>{children}</section>
  }