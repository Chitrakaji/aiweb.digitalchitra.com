import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/lib/site";

const inter = Inter({
  subsets: ["latin"],
  display: "swap"
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: "Website That Generates Customers | Digital Marketing Consultant",
  description:
    "Turn your website into a high-converting sales system that brings consistent leads and revenue. Stop guessing. Start converting.",
  openGraph: {
    title: "Website That Generates Customers | Digital Marketing Consultant",
    description:
      "Turn your website into a high-converting sales system that brings consistent leads and revenue. Stop guessing. Start converting.",
    url: siteConfig.siteUrl,
    siteName: siteConfig.name,
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Digital marketing consultant website preview"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Website That Generates Customers | Digital Marketing Consultant",
    description:
      "Turn your website into a high-converting sales system that brings consistent leads and revenue. Stop guessing. Start converting.",
    images: ["/opengraph-image"]
  },
  alternates: {
    canonical: "/"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-background">
      <body className={`${inter.className} bg-background text-foreground antialiased`}>
        {children}
      </body>
    </html>
  );
}
