import {
  Box,
  Heading,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Text,
  Tr,
} from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

const ContactPage = () => {
  return (
    <Box bg={"white"} p={6} m={6} borderRadius={"2xl"} boxShadow={"lg"}>
      <Heading textAlign={"center"}>Contact Us</Heading>

      <TableContainer my={8}>
        <Table variant="simple">
          <Text p={4} fontWeight={"bold"}>
            Contact Information
          </Text>
          <Tbody>
            <Tr>
              <Td>Warehouse Indonesia Sarah</Td>
              <Td>: +62 812-8892-0526 </Td>
            </Tr>
            <Tr>
              <Td>China Trip Yudha</Td>
              <Td>: +62 812-8166-7786</Td>
            </Tr>
            <Tr>
              <Td>Official WhatsApp</Td>
              <Td>: +62 878-0017-4596 </Td>
            </Tr>
            <Tr>
              <Td>Customer Service</Td>
              <Td>: 02155714597</Td>
            </Tr>
            <Tr>
              <Td>Live Chat</Td>
              <Td>: 09.00-12.00 and 12.00-17.00 Monday - Friday</Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>

      <TableContainer my={8}>
        <Table variant="simple">
          <Text p={4} fontWeight={"bold"}>
            Warehouse Information
          </Text>
          <Tbody>
            <Tr>
              <Td>Warehouse</Td>
              <Td>
                : Guangzhou Baiyun District, Baiyunhu Avenue, Tangge Shangcun
                Middle Road No.28 Unit 103B Postal Code 510000
              </Td>
            </Tr>
            <Tr>
              <Td>Mr. Wei</Td>
              <Td>: 18142827674 (Wechat)</Td>
            </Tr>
            <Tr>
              <Td>Mr. Deandy</Td>
              <Td>: +62 878-0017-4596 </Td>
            </Tr>
            <Tr>
              <Td>Customer Service</Td>
              <Td>: IMPORTIRORG_admin (Wechat)</Td>
            </Tr>
            <Tr>
              <Td>Working Hours</Td>
              <Td>: 09.00-12.00 and 12.00-17.00 Monday - Friday</Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>

      <Box my={4}>
        <Text fontWeight={"bold"}>Notes:</Text>
        <Text>1. Closed on Sunday and Public Holidays</Text>
        <Text>2. Every carton must be wrapped in a woven bag</Text>
        <Text>
          3. It is compulsory to attach accurate MARKING CODE (please add total
          quantity behind the marking code) and SHIPPING CODE
        </Text>
        <Text>
          4. Any wrong spelling will result in shipment delay even cancellation
        </Text>
        <Text>
          5. It is compulsory to attach{" "}
          <Link href="https://view.officeapps.live.com/op/view.aspx?src=https%3A%2F%2Fd2jnbxtr5v4vqu.cloudfront.net%2Ffiles%2Fgaming-chair-packing-list-2017-2017-12-22-15-38-21-2017_12_24_10_56_49.xls&wdOrigin=BROWSELINK">
            <Text
              as={"span"}
              color={"red"}
              fontWeight={"bold"}
              textDecoration="underline"
            >
              PACKING LIST
            </Text>
          </Link>{" "}
          and{" "}
          <Link href="https://view.officeapps.live.com/op/view.aspx?src=https%3A%2F%2Fd2jnbxtr5v4vqu.cloudfront.net%2Ffiles%2Fcommercial-invoice-2017_12_22_15_38_21.xls&wdOrigin=BROWSELINK">
            <Text
              as={"span"}
              color={"red"}
              fontWeight={"bold"}
              textDecoration="underline"
            >
              INVOICE
            </Text>
          </Link>{" "}
          on the carton sent to our warehouse (if more than one carton, only
          need to attach on one carton)
        </Text>
      </Box>
    </Box>
  );
};

export default ContactPage;
