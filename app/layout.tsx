import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "IntelliCoreERP | Microsoft Dynamics ERP Consulting & AI Automation",
  description:
    "Expert Microsoft Dynamics ERP consulting, AI automation, machine learning integration, and digital signature solutions for enterprise operations.",
  metadataBase: new URL("https://www.intellicoreerp.com"),
  openGraph: {
    title: "IntelliCoreERP | Microsoft Dynamics ERP Consulting & AI Automation",
    description:
      "Expert Microsoft Dynamics Business Central consulting, AI automation, machine learning integration, and digital signature solutions.",
    url: "https://www.intellicoreerp.com",
    siteName: "IntelliCoreERP",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "IntelliCoreERP | Microsoft Dynamics ERP Consulting & AI Automation",
    description:
      "Transform ERP performance with Microsoft Dynamics expertise, AI automation, and digital signature integration.",
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
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
