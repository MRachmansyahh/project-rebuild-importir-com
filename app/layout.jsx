import { Inter } from "next/font/google";
import { ChakraProvider, Container } from "@chakra-ui/react";
import Head from "next/head";
import Footer from "@/components/footer/Footer";
import WhatsappButton from "@/components/button/WhatsApp";
import ConsultationButton from "@/components/button/Consultation";
import Navigation from "@/components/navbar/layout";
import LayoutProvider from "./LayoutProvider";

const inter = Inter({ subsets: ["latin"] });

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
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link rel="icon" href={metadata.icons.icon} />
      </Head>

      <body className={inter.className} style={{ backgroundColor: "#F1EFEF"}} >
        <ChakraProvider>
          <LayoutProvider>
            {children}

            <ConsultationButton />
            <WhatsappButton />
          </LayoutProvider>
        </ChakraProvider>
      </body>
    </html>
  );
}
