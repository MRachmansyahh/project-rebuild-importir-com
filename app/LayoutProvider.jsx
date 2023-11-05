"use client";

import Footer from "@/components/footer/Footer";
import { usePathname } from "next/navigation";
import Navigation from "@/components/navbar/layout";
import { Container } from "@chakra-ui/react";

const LayoutProvider = ({ children }) => {
  const pathname = usePathname();

  if (pathname.startsWith("/mitra")) {
    return children;
  }

  return (
    <>
      {pathname === "/register" || pathname === "/login" ? null : (
        <Navigation />
      )}
      {pathname === "/mitra" || pathname === "/register" || pathname === "/login" ? children : <Container maxW="8xl">{children}</Container>}
      {pathname === "/register" || pathname === "/login" ? null : <Footer />}
    </>
  );
};

export default LayoutProvider;
