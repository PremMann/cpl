import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Container from "@/components/container";
import { NextUIProvider } from "@nextui-org/system";

export const metadata: Metadata = {
  title: "CPL",
  description: "CPL description", 
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* <body className={`${inter.className} bg-white text-zine-900`}> */}
      <body className="text-zinc-900">
        <NextUIProvider>
          <Container>
            <Header />
            {children}
            <Footer />
          </Container>
        </NextUIProvider>
       
        
      </body>
    </html>
  );
}
