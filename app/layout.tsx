import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://scalenxt.com"),
  title: "Scale NXT | Leading African Businesses to Institutional Success",
  description: "Scale NXT helps African businesses survive scale, leadership transition, and time. We are not just consultants; we are your enterprise partner for sustainable growth.",
  keywords: ["Scale NXT", "African Business", "Scaleup", "Leadership Transition", "Business Systems", "Institutional Success"],
  icons: {
    icon: "/images/logo.png",
    shortcut: "/images/logo.png",
    apple: "/images/logo.png",
  },
  openGraph: {
    title: "Scale NXT | Leading African Businesses to Institutional Success",
    description: "Scale NXT helps African businesses survive scale, leadership transition, and time.",
    images: ["/images/landing-page-image.jpg"],
    type: "website",
    siteName: "Scale NXT",
  },
  twitter: {
    card: "summary_large_image",
    title: "Scale NXT | Leading African Businesses to Institutional Success",
    description: "Scale NXT helps African businesses survive scale, leadership transition, and time.",
    images: ["/images/landing-page-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} antialiased scroll-smooth`}>
      <body className="bg-white selection:bg-primary/20">{children}</body>
    </html>
  );
}

