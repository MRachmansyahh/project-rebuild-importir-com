import { GridItem, Grid, Text, Flex, Image, Box } from "@chakra-ui/react";
import React from "react";

const CoursesPage = () => {
  return (
    <Grid templateColumns="2fr 1fr" gap={4} padding={4} minH={"100vh"}>
      <GridItem bg={"white"} borderRadius={"xl"}>
        <Box p={4} >
          <Text fontWeight={"bold"} fontSize={"lg"} my={4}>
            Rekaman LIVE Akademi (Belum Punya Produk)
          </Text>
          <Text fontSize={"sm"} my={4}>Hi Selamat datang di video rekaman Live Akademi Importir</Text>
          <Text>
            Ini adalah kumpulan video live bersama mentor akademi importir,
            untuk kamu yang tidak sempat untuk mengikuti live bersama mentor
            silahkan tonton video ini ya
          </Text>
          <Text fontSize={"sm"} my={4}>
            untuk setiap jadwal LIVE akan kita umumkan di channel telegram resmi
            IMPORTIR jadi jangan sampai kelewatan yaa karena kamu bisa langsung
            tanya dan ngobrol bersama mentor
          </Text>
          <Text fontSize={"sm"} my={4}>Selamat menonton~</Text>
        </Box>
      </GridItem>
      <GridItem bg={"white"} borderRadius={"xl"}>
        <Text fontWeight={"bold"} fontSize={"lg"} p={4}>
          Other Courses
        </Text>
        <Flex p={4} gap={4} alignItems={"center"} _hover={{ transform: "scale(1.05)", transition: "0.2s" }}>
          <Image
            src="https://d2jnbxtr5v4vqu.cloudfront.net/images/slide2-2022_07_26_11_38_22.jpeg"
            alt="image"
            width={100}
            height={100}
            borderRadius={"xl"}
          />
          <Box flex={1}>
            <Text fontWeight={"bold"}>Course Title</Text>
            <Text>Course Date</Text>
          </Box>
        </Flex>
      </GridItem>
    </Grid>
  );
};

export default CoursesPage;
