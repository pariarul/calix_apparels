import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: {
    default: "Calix Apparels | Premium Garment Exports",
    template: "%s | Calix Apparels",
  },
  description:
    "Calix Apparels is a trusted global garment manufacturer from Tiruppur, India, delivering ethically produced, export-grade apparel for international brands.",
  keywords: [
    "Calix Apparels",
    "garment manufacturer India",
    "Tiruppur apparel exports",
    "ethical garment manufacturing",
    "bulk clothing manufacturer",
    "export quality garments",
    "textile factory India",
  ],
  authors: [{ name: "Calix Apparels" }],
  creator: "Calix Apparels",
  publisher: "Calix Apparels",

  metadataBase: new URL("https://www.calixapparels.com"),

  icons: {
    icon: "/logo.jpeg",
    shortcut: "/logo.jpeg",
    apple: "/logo.jpeg",
  },

  openGraph: {
    title: "Calix Apparels | Premium Garment Exports",
    description:
      "Ethical, export-grade garment manufacturing from Tiruppur, India. Trusted by global apparel brands.",
    url: "https://www.calixapparels.com",
    siteName: "Calix Apparels",
    images: [
      {
        url: "/logo.jpeg",
        width: 1200,
        height: 630,
        alt: "Calix Apparels – Premium Garment Exports",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Calix Apparels | Premium Garment Exports",
    description:
      "Trusted garment exporter delivering ethical, export-grade apparel from India.",
    images: ["/logo.jpeg"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased selection:bg-charcoal selection:text-white">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
