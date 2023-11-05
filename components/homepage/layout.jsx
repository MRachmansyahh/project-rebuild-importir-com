"use client";

import { Grid, GridItem } from "@chakra-ui/react";
import Right from "./Right";
import Left from "./Left";
import Middle from "./Middle";

const HeroSection = () => {
  return (
    <Grid
      templateColumns={{
        base: "repeat(1, 1fr)",
        md: "1fr 2fr 1fr",
      }}
      gap={4}
      padding={4}
    >
      <GridItem
        colSpan={{ base: 1, md: 1 }}
        bg={"white"}
        p={4}
        borderRadius={"xl"}
        boxShadow={"xl"}
        maxH={"auto"}
      >
        <Left />
      </GridItem>

      <GridItem colSpan={{ base: 1, md: 1 }} maxH={"auto"}>
        <Middle />
      </GridItem>

      <GridItem
        colSpan={{ base: 1, md: 1 }}
        bg={"white"}
        p={4}
        borderRadius={"xl"}
        boxShadow={"xl"}
        maxH={"auto"}
      >
        <Right />
      </GridItem>
    </Grid>
  );
};

export default HeroSection;
