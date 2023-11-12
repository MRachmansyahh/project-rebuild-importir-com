import { ChakraProvider, Container } from "@chakra-ui/react";
import WhatsappButton from "@/components/button/WhatsApp";
import ConsultationButton from "@/components/button/Consultation";
import LayoutProvider from "./LayoutProvider";
import CombinedContext from "@/context/CombinedContext";

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
          <CombinedContext>
            <LayoutProvider>
              {children}
              <ConsultationButton />
              <WhatsappButton />
            </LayoutProvider>
          </CombinedContext>
        </ChakraProvider>
      </body>
    </html>
  );
}
