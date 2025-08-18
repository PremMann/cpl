import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/header";
// import Header01 from "@/components/header01";
import Footer from "@/components/footer";
import Container from "@/components/container";
import { NextUIProvider } from "@nextui-org/system";
import { Open_Sans } from "next/font/google";

const openSans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-open-sans",
});

export const metadata: Metadata = {
  title: "Active People’s Microfinance Institution Plc",
  description: "Active People’s Microfinance Institution Plc",
  keywords: [
    "APMF",
    "Active People’s Microfinance Institution Plc",
    "Microfinance",
    "Cambodia",
    "Financial Services",
    "Loans",
    "Savings",
    "Investments"
  ],
  icons: {
    icon: [
      { url: "/main.png", sizes: "180x180", type: "image/png" },
      { url: "/main.png", sizes: "180x180", type: "image/png" },
      { url: "/main.png" },
    ],
    apple: [
      { url: "/main.png", sizes: "180x180", type: "image/png" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
       <body className={`${openSans.className} antialiased`}>
        <NextUIProvider>
          <Container>
            <Header />
            {/* <Header01 /> */}
            {children}
            <Footer />
          </Container>
        </NextUIProvider>
      </body>
    </html>
  );
}
