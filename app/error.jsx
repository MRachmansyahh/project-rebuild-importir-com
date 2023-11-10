'use client'

import { Box, Heading, Text } from "@chakra-ui/react";
import Link from "next/link";

const ErrorPage = ({ statusCode }) => (
  <Box textAlign="center" padding="40px" h={"100vh"}>
    <Heading>Oops! Something went wrong</Heading>
    <Text>
      {statusCode
        ? `An error ${statusCode} occurred on the server`
        : "An error occurred on the client"}
    </Text>
    <Link href="/">Go back to home</Link>
  </Box>
);

ErrorPage.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default ErrorPage;
