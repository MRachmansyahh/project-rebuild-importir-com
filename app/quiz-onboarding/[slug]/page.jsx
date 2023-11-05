import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  Radio,
  RadioGroup,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";

const QuizPage = () => {
  return (
    <Box bg={"white"} m={10} minH={"100vh"} borderRadius={"xl"} p={12}>
      <Text fontSize={"2xl"} fontWeight={"bold"}>
        Istilah - istilah Export Import (BASIC)
      </Text>
      <Divider />
      <Text fontWeight={"bold"} mt={4}>
        Anda akan dapat mengakses sistem kami setelah anda dapat menjawab
        pertanyaan pertanyaa dari tutorial ini.
      </Text>
      <Text>
        Di modul ini, anda akan mempelajari istilah istilah untuk export-import.
      </Text>

      <Box>Video</Box>

      <Box my={10}>
        <Box
          bg={"gray.100"}
          mt={4}
          border={"1px"}
          p={4}
          borderRadius={"lg"}
          borderColor={"rgb(255, 214, 0)"}
        >
          <Text>1. Apa itu harga EXW/exwork ?</Text>
          <RadioGroup spacing={2}>
            <Stack spacing={2}>
              <Radio borderColor="rgb(255, 214, 0)" borderWidth={1} value="A">
                Harga barang dengan posisi ada di gudang si penjual.
              </Radio>
              <Radio borderColor="rgb(255, 214, 0)" borderWidth={1} value="B">
                Harga barang dengan posisi ada di atas kapal (sudah di urus izin
                export)
              </Radio>
              <Radio borderColor="rgb(255, 214, 0)" borderWidth={1} value="C">
                Posisi barang ada di pelabuhan pembeli (belum di urus izin
                impor)
              </Radio>
              <Radio borderColor="rgb(255, 214, 0)" borderWidth={1} value="D">
                Posisi barang ada di gudang pembeli.
              </Radio>
            </Stack>
          </RadioGroup>
        </Box>
        <Box
          bg={"gray.100"}
          mt={4}
          border={"1px"}
          p={4}
          borderRadius={"lg"}
          borderColor={"rgb(255, 214, 0)"}
        >
          <Text>1. Apa itu harga EXW/exwork ?</Text>
          <RadioGroup spacing={2}>
            <Stack spacing={2}>
              <Radio borderColor="rgb(255, 214, 0)" borderWidth={1} value="A">
                Harga barang dengan posisi ada di gudang si penjual.
              </Radio>
              <Radio borderColor="rgb(255, 214, 0)" borderWidth={1} value="B">
                Harga barang dengan posisi ada di atas kapal (sudah di urus izin
                export)
              </Radio>
              <Radio borderColor="rgb(255, 214, 0)" borderWidth={1} value="C">
                Posisi barang ada di pelabuhan pembeli (belum di urus izin
                impor)
              </Radio>
              <Radio borderColor="rgb(255, 214, 0)" borderWidth={1} value="D">
                Posisi barang ada di gudang pembeli.
              </Radio>
            </Stack>
          </RadioGroup>
        </Box>
      </Box>
      <Flex justifyContent={"end"}>
        <Button bg={"rgb(255, 214, 0)"}>Submit</Button>
      </Flex>
    </Box>
  );
};

export default QuizPage;
