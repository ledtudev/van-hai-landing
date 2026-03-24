import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin", "latin-ext"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin", "latin-ext"],
});

const siteUrl = "https://vinhomeshaivanland.com";
const siteName = "Vinhomes Hải Vân Bay";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "Vinhomes Hải Vân Bay – Biệt Thự Nghỉ Dưỡng Đà Nẵng",
    template: `%s | ${siteName}`,
  },

  description:
    "Vinhomes Hải Vân Bay (Vinhomes Làng Vân) – Tổ hợp nghỉ dưỡng sinh thái đẳng cấp quốc tế tại Vịnh Nam Chơn, chân đèo Hải Vân, Đà Nẵng. 512 ha, 5.928 căn biệt thự, shophouse, liền kề. Chủ đầu tư Vinpearl – Vingroup. Hotline: 08 999 67 999.",

  keywords: [
    "Vinhomes Hải Vân Bay",
    "Vinhomes Làng Vân",
    "Vinpearl Làng Vân",
    "biệt thự Đà Nẵng",
    "nghỉ dưỡng Hải Vân",
    "dự án Vingroup Đà Nẵng",
    "bất động sản Đà Nẵng",
    "mua biệt thự Đà Nẵng",
    "Vịnh Nam Chơn",
    "Liên Chiểu Đà Nẵng",
    "shophouse Đà Nẵng",
    "condotel Đà Nẵng",
  ],

  authors: [{ name: "Vinhomes Hải Vân Land", url: siteUrl }],
  creator: "Vinhomes Hải Vân Land",
  publisher: "Vinhomes Hải Vân Land",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  alternates: {
    canonical: siteUrl,
    languages: {
      "vi-VN": siteUrl,
    },
  },

  openGraph: {
    type: "website",
    locale: "vi_VN",
    url: siteUrl,
    siteName,
    title: "Vinhomes Hải Vân Bay – Biệt Thự Nghỉ Dưỡng Đẳng Cấp Tại Đà Nẵng",
    description:
      "Tổ hợp nghỉ dưỡng sinh thái 512 ha tại Vịnh Nam Chơn, chân đèo Hải Vân. Biệt thự, shophouse, liền kề – sở hữu lâu dài. Hotline: 08 999 67 999.",
    images: [
      {
        url: "https://vinhomeshaivanland.com/wp-content/uploads/2026/03/vinhomes-lang-van.jpg",
        width: 1200,
        height: 630,
        alt: "Vinhomes Hải Vân Bay – Biệt Thự Nghỉ Dưỡng Đà Nẵng",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Vinhomes Hải Vân Bay – Biệt Thự Nghỉ Dưỡng Đà Nẵng",
    description:
      "512 ha nghỉ dưỡng sinh thái tại Vịnh Nam Chơn, chân đèo Hải Vân, Đà Nẵng. Hotline: 08 999 67 999.",
    images: [
      "https://vinhomeshaivanland.com/wp-content/uploads/2026/03/vinhomes-lang-van.jpg",
    ],
  },

  icons: {
    icon: [
      { url: "/logo.png", type: "image/png" },
    ],
    shortcut: "/logo.png",
    apple: "/logo.png",
  },

  category: "real estate",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <head>
        <meta name="geo.region" content="VN-DN" />
        <meta name="geo.placename" content="Đà Nẵng, Việt Nam" />
        <meta name="geo.position" content="16.1147;108.1522" />
        <meta name="ICBM" content="16.1147, 108.1522" />
        <link rel="preconnect" href="https://vinhomeshaivanland.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "RealEstateListing",
              name: "Vinhomes Hải Vân Bay",
              alternateName: ["Vinhomes Làng Vân", "Vinpearl Làng Vân"],
              description:
                "Tổ hợp nghỉ dưỡng – sinh thái – đô thị đẳng cấp quốc tế tại Vịnh Nam Chơn, chân đèo Hải Vân, Đà Nẵng. 512 ha, 5.928 căn biệt thự, shophouse, liền kề.",
              url: siteUrl,
              image:
                "https://vinhomeshaivanland.com/wp-content/uploads/2026/03/vinhomes-lang-van.jpg",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Vịnh Nam Chơn, Phường Hòa Hiệp Bắc",
                addressLocality: "Quận Liên Chiểu, TP. Đà Nẵng",
                addressCountry: "VN",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 16.1147,
                longitude: 108.1522,
              },
              telephone: "+84899967999",
              numberOfRooms: 5928,
              floorSize: {
                "@type": "QuantitativeValue",
                value: 5120000,
                unitCode: "MTK",
              },
              offers: {
                "@type": "Offer",
                priceCurrency: "VND",
                availability: "https://schema.org/InStock",
              },
              brand: {
                "@type": "Organization",
                name: "Vinpearl – Vingroup",
                url: "https://vingroup.net",
              },
            }),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
