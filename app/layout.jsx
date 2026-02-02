import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "CALIX APPARELS | Premium Garment Exports",
  description: "Trusted global manufacturer delivering ethically produced, export-grade garments from Tiruppur, India.",
  keywords: "textile manufacturing, garment exports, ethically produced clothing, Tiruppur apparel, bulk garment orders",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased selection:bg-charcoal selection:text-white">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
