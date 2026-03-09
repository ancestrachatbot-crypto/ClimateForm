import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tejhyuani Charles",
  description:
    "Building AI infrastructure for the Caribbean — from St. Kitts & Nevis. Founder & CEO of Oceanic. CTO of Sugar City AI.",
  keywords: [
    "Tejhyuani Charles",
    "Oceanic",
    "Sugar City AI",
    "Caribbean AI",
    "St. Kitts",
    "AI infrastructure",
  ],
  authors: [{ name: "Tejhyuani Charles" }],
  openGraph: {
    title: "Tejhyuani Charles",
    description: "Building AI infrastructure for the Caribbean",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-brand-bg text-brand-text antialiased">{children}</body>
    </html>
  );
}
