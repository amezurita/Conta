import React from "react";
import { NavLink } from "react-router-dom";
import { Heading, Flex, Button } from "@chakra-ui/core";

function Property() {
  return (
    <div
      style={{
        backgroundColor: "yellow",
        color: "black",
        textAlign: "center"
      }}
    >
      <Flex w="100vw" h="100vh" align="center" justify="center" wrap="wrap">
        
        <div>
          <Heading>Property</Heading>
        </div> <br/>
        <NavLink to="/">Home</NavLink>
      </Flex>
    </div>
  );
}

export default Property;