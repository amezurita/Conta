import React from "react";
import { NavLink } from "react-router-dom";
import { Heading, Flex, Button } from "@chakra-ui/core";

function Balance() {
  return (
    <div
      style={{
        backgroundColor: "brown",
        color: "white",
        textAlign: "center"
      }}
    >
      <Flex w="100vw" h="100vh" align="center" justify="center" wrap="wrap">
        
        <div>
          <Heading>Tennant Property View</Heading>
        </div><br/>
        <NavLink to="/">Home</NavLink>

      </Flex>
    </div>
  );
}

export default Balance;