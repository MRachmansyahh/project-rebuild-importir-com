import { useEffect, useState } from "react";
import { Box, Container, Text, Heading, Flex } from "@chakra-ui/react";

function calculateTime() {
  const now = new Date();
  const targetTime = new Date(now);
  targetTime.setHours(24, 0, 0, 0); // Set target time to 21:00:00 today

  const difference = +targetTime - +now;
  let timeLeft = {};

  if (difference > 0) {
    timeLeft["hours"] = Math.floor((difference / (1000 * 60 * 60)) % 24);
    timeLeft["minutes"] = Math.floor((difference / (1000 * 60)) % 60);
    timeLeft["seconds"] = Math.floor((difference / 1000) % 60);
  }

  return timeLeft;
}

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState(calculateTime());

  useEffect(() => {
    const id = setTimeout(() => {
      setTimeLeft(calculateTime());
    }, 1000);
    return () => clearTimeout(id);
  });

  return (
    <Box border={"1px"} p={2} borderRadius={"xl"} boxShadow={"lg"} my={2}>
      {Object.keys(timeLeft).length ? (
        <Flex justifyContent={"center"}>
          {Object.entries(timeLeft).map(([interval, value]) => (
            <Flex key={interval} color={"red"} mx={1} flexWrap={"wrap"}>
              <Text fontSize={"xs"} mx={1} fontWeight={"bold"}>
                {value}
              </Text>
              <Text fontSize={"xs"} fontWeight={"bold"}>
                {interval.charAt(0).toUpperCase() + interval.slice(1)}
              </Text>
            </Flex>
          ))}
        </Flex>
      ) : (
        <Text fontSize="4xl" fontStyle="italic" color="white">
          Time's up!
        </Text>
      )}
    </Box>
  );
}
