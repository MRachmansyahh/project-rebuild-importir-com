import {
  Box,
  TableContainer,
  Thead,
  Tbody,
  Td,
  Tr,
  Th,
  Table,
} from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

const ModulPage = () => {
  return (
    <Box minH={"100vh"}>
    <Box bg={"white"} p={4} borderRadius={"lg"} boxShadow={"lg"} my={4} >
      <TableContainer>
        <Table>
          <Thead bgColor={"rgb(255, 214, 0)"}>
            <Tr>
              <Th fontSize={"xs"} fontWeight={"bold"}>
                NUMBER
              </Th>
              <Th fontSize={"xs"} fontWeight={"bold"}>
                TTITLE
              </Th>
              <Th fontSize={"xs"} fontWeight={"bold"}>
                MINIMUM PASSING GRADE
              </Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>1.</Td>
              <Td color={"blue"}>
                <Link href={"/quiz-onboarding/"}>
                  Istilah-istilah Ekspor dan Impor
                </Link>
              </Td>
              <Td>Score?</Td>
            </Tr>
            <Tr>
              <Td>2.</Td>
              <Td color={"blue"}>
                <Link href={"/quiz-onboarding/"}>Harmonized System Code</Link>
              </Td>
              <Td>Score?</Td>
            </Tr>
            <Tr>
              <Td>3.</Td>
              <Td color={"blue"}>
                <Link href={"/quiz-onboarding/"}>Sistem IMPORTIR.ORG</Link>
              </Td>
              <Td>Score?</Td>
            </Tr>
            <Tr>
              <Td>4.</Td>
              <Td color={"blue"}>
                <Link href={"/quiz-onboarding/"}>Alibaba.com</Link>
              </Td>
              <Td>Score?</Td>
            </Tr>
            <Tr>
              <Td>5.</Td>
              <Td color={"blue"}>
                <Link href={"/quiz-onboarding/"}>Simulasi Kalkulasi HPP</Link>
              </Td>
              <Td>Score?</Td>
            </Tr>
            <Tr>
              <Td>6.</Td>
              <Td color={"blue"}>
                <Link href={"/quiz-onboarding/"}>
                  Info 1688.com dan Importir.com
                </Link>
              </Td>
              <Td>Score?</Td>
            </Tr>
            <Tr>
              <Td>7.</Td>
              <Td color={"blue"}>
                <Link href={"/quiz-onboarding/"}>
                  Menu Dashboard Importir.org
                </Link>
              </Td>
              <Td>Score?</Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
    </Box>
  );
};

export default ModulPage;
