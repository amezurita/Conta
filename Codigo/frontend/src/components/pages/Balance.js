import React from "react";
import { NavLink } from "react-router-dom";
import { Heading, Flex, Button } from "@chakra-ui/core";

function Balance() {
  return (
    <div
      style={{
        backgroundColor: "red",
        color: "white",
        textAlign: "center"
      }}
    >
      <Flex w="100vw" h="100vh" align="center" justify="center" wrap="wrap">
        <div>
          <Heading>Balance</Heading>
        </div>
      </Flex>
      <br />
      <NavLink to="/">Home</NavLink>
    </div>
  );
}

export default Balance;
