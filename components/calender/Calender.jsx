"use client";

import { useState } from "react";
import {
  Box,
  Button,
  Flex,
  Text,
  Input,
  Divider,
  FormLabel,
  FormControl,
  Select,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const CalendarWithForm = () => {
  const [value, onChange] = useState(new Date());
  const [time, setTime] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const form = useForm();

  const { register, handleSubmit } = form;

  const handleDateChange = (date) => {
    const currentDate = new Date();
    if (date >= currentDate) {
      onChange(date);
    }
  };

  const handleTimeChange = (selectedTime) => {
    setTime(selectedTime);
    console.log(selectedTime);
  };

  const handleSelectDate = () => {
    setShowForm(true);
  };

  const handleSubmitForm = (formData) => {
    console.log("Form submitted:", formData);
    setShowForm(false);
  };

  return (
    <Box>
      {!showForm && (
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
            <Button
              border={"1px"}
              borderColor={"gray"}
              mt={2}
              width={"150px"}
              bg={time === "13:00" ? "blue.400" : "white"}
              onClick={() => handleTimeChange("13:00")}
            >
              13:00
            </Button>
            <Button
              border={"1px"}
              borderColor={"gray"}
              mt={2}
              width={"150px"}
              bg={time === "14:00" ? "blue.400" : "white"}
              onClick={() => handleTimeChange("14:00")}
            >
              14:00
            </Button>
            <Button
              border={"1px"}
              borderColor={"gray"}
              mt={2}
              width={"150px"}
              bg={time === "15:00" ? "blue.400" : "white"}
              onClick={() => handleTimeChange("15:00")}
            >
              15:00
            </Button>
          </Flex>
        </Flex>
      )}

      {!showForm && (
        <Flex justifyContent={"center"} my={10}>
          <Button bg={"green.600"} color={"white"} onClick={handleSelectDate}>
            Select Date
          </Button>
        </Flex>
      )}

      {showForm && (
        <Box my={4}>
          <Text textAlign={"center"} fontWeight={"bold"}>
            Selected Date: {value.toLocaleDateString()} {time}
          </Text>
          <Divider />
          <Flex justifyContent={"center"} alignItems={"center"} w={"100%"}>
          <form onSubmit={handleSubmit(handleSubmitForm)}>
            <FormControl id="name" my={2} isRequired>
              <FormLabel fontSize={"sm"}>Name</FormLabel>
              <Input type="text" {...register("name")} />
            </FormControl>
            <FormControl id="phonenumber" my={2} isRequired>
              <FormLabel fontSize={"sm"}>Phone Number</FormLabel>
              <Input type="text" {...register("phonenumber")} />
            </FormControl>
            <FormControl id="email" my={2} isRequired>
              <FormLabel fontSize={"sm"}>Email</FormLabel>
              <Input type="text" {...register("email")} />
            </FormControl>
            <FormControl id="membership" my={2} isRequired>
              <FormLabel fontSize={"sm"}>Already a Member?</FormLabel>
              <Select {...register("membership")}>
                <option value="Yes">Yes</option>
                <option value="Not Yet">Not Yet</option>
              </Select>
            </FormControl>
            <FormControl my={2} isRequired>
              <FormLabel fontSize={"sm"}>Already completed course?</FormLabel>
              <Select {...register("course")}>
                <option value="Yes">Yes</option>
                <option value="Not Yet">Not Yet</option>
              </Select>
            </FormControl>
            <FormControl my={2} isRequired>
              <FormLabel fontSize={"sm"}>Already have a product to import?</FormLabel>
              <Select {...register("product")}>
                <option value="Yes">Yes</option>
                <option value="Not Yet">Not Yet</option>
              </Select>
            </FormControl>
            <FormControl my={2} isRequired>
              <FormLabel fontSize={"sm"}>
                How many budgets you have for the first import?
              </FormLabel>
              <Select {...register("budget")}>
                <option value="1">Rp. 500.000 - Rp. 5.000.000</option>
                <option value="2">Rp. 5.000.000 - Rp. 10.000.000</option>
              </Select>
            </FormControl>
            <FormControl my={2} isRequired>
              <FormLabel fontSize={"sm"}>Type of Consultation?</FormLabel>
              <Select {...register("type")}>
                <option value="Offline">Offline</option>
                <option value="Online">Online</option>
              </Select>
            </FormControl>
            <Flex justifyContent={"center"} alignItems={"center"}>
            <Button type="submit" mt={4} bg={"green.600"} color={"white"} >
              Submit Form
            </Button>
            </Flex>
          </form>
          </Flex>
        </Box>
      )}
    </Box>
  );
};

export default CalendarWithForm;
