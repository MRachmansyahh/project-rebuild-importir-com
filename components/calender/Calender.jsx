"use client";

import { Box, Button, ButtonGroup, Flex, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

export default function CalendarGfg() {
  const [value, onChange] = useState(new Date());

  const handleDateChange = (date) => {
    // Validasi jika tanggal yang dipilih lebih besar atau sama dengan tanggal saat ini
    const currentDate = new Date();
    if (date >= currentDate) {
      onChange(date);
    }
  };

  return (
    <Box>
      <Flex
        gap={10}
        mt={10}
        justifyContent={"center"}
        flexDir={{ base: "column", md: "row" }}
      >
        <Box>
          <Text textAlign={"center"} fontWeight={"bold"}>
            Pick a Date and Time
          </Text>
          <Flex justifyContent={"center"}>
            <Calendar onChange={handleDateChange} value={value} />
          </Flex>
        </Box>

        <Box>
          <Text textAlign={"center"} fontWeight={"bold"}>
            AM
          </Text>
          <Text textAlign={"center"}>No Slots Available</Text>
        </Box>

        <Flex flexDirection="column" alignItems="center">
          <Text fontWeight={"bold"}>PM</Text>
          <Button border={"1px"} mt={2} width={"150px"} variant={"ghost"}>
            13:00
          </Button>
          <Button border={"1px"} mt={2} width={"150px"} variant={"ghost"}>
            14:00
          </Button>
          <Button border={"1px"} mt={2} width={"150px"} variant={"ghost"}>
            15:00
          </Button>
        </Flex>
      </Flex>
      <Flex justifyContent={"center"} my={10}>
        <Button bg={"green.600"} color={"white"}>
          Select Date
        </Button>
      </Flex>
    </Box>
  );
}
