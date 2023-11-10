import { Inter } from "next/font/google";
import { ChakraProvider, Container } from "@chakra-ui/react";
import Head from "next/head";
import Footer from "@/components/footer/Footer";
import WhatsappButton from "@/components/button/WhatsApp";
import ConsultationButton from "@/components/button/Consultation";
import Navigation from "@/components/navbar/layout";
import LayoutProvider from "./LayoutProvider";
import { CartProvider } from "@/context/CartContext";
import { WishlistProvider } from "@/context/WishlistContext";
import ProductLayout from "./product/layout";

export const metadata = {
  title: "importir.com",
  description: "Best Importer",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ backgroundColor: "#F1EFEF" }}>
        <ChakraProvider>
          <LayoutProvider>
            <ProductLayout>
            {children}
            <ConsultationButton />
            <WhatsappButton />
            </ProductLayout>
          </LayoutProvider>
        </ChakraProvider>
      </body>
    </html>
  );
}
