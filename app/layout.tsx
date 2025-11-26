import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://izbaespresso.com'),
  title: {
    default: "Izba Espresso - Caloundra West Cafe",
    template: "%s | Izba Espresso"
  },
  description: "Modern cafe in Caloundra West, QLD offering breakfast, lunch, and dinner service. Enjoy our specialty coffee, delicious meals, and warm atmosphere. Visit us at 1-13 Bells Reach Dr, Caloundra West QLD 4551.",
  keywords: "cafe, coffee, espresso, Caloundra West, QLD, restaurant, dinner, breakfast, lunch, Izba Espresso, specialty coffee, Australian cafe",
  authors: [{ name: "Izba Espresso" }],
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon.png", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png" },
    ],
  },
  openGraph: {
    title: "Izba Espresso - Caloundra West Cafe",
    description: "Modern cafe in Caloundra West, QLD offering breakfast, lunch, and dinner service. Enjoy our specialty coffee and delicious meals.",
    type: "website",
    locale: "en_AU",
    url: "https://izbaespresso.com",
    siteName: "Izba Espresso",
    images: [
      {
        url: "/logo.jpg",
        width: 1200,
        height: 1200,
        alt: "Izba Espresso Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Izba Espresso - Caloundra West Cafe",
    description: "Modern cafe in Caloundra West, QLD offering breakfast, lunch, and dinner service.",
    images: ["/logo.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
