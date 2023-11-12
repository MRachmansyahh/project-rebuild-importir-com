"use client";

import { Button, ButtonGroup } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

const HeaderLogout = () => {
  return (
    <ButtonGroup>
      <Link href="/login">
        <Button
          display={{ base: "none", md: "inline-flex" }}
          fontSize={"sm"}
          fontWeight={600}
          color={"black"}
          bg={"rgb(255, 214, 0)"}
          borderColor={"black"}
          borderWidth={2}
          _hover={{
            bg: "blue.400",
          }}
        >
          Tracking Non Member
        </Button>
      </Link>

      <Link href="/login">
        <Button
          display={{ base: "none", md: "inline-flex" }}
          fontSize={"sm"}
          fontWeight={600}
          color={"black"}
          bg={"rgb(255, 214, 0)"}
          borderColor={"black"}
          borderWidth={2}
          _hover={{
            bg: "blue.400",
          }}
        >
          Login
        </Button>
      </Link>

      <Link href="/register">
        <Button
          display={{ base: "none", md: "inline-flex" }}
          fontSize={"sm"}
          fontWeight={600}
          color={"rgb(255, 214, 0)"}
          bg={"black"}
          _hover={{
            bg: "blue.400",
          }}
        >
          Register
        </Button>
      </Link>
    </ButtonGroup>
  );
};

export default HeaderLogout;
