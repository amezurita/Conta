import React from "react";
import { NavLink } from "react-router-dom";
import { Heading, Flex, Button } from "@chakra-ui/core";

function CreateProperty() {
  return (
    <div
      style={{
        backgroundColor: "black",
        color: "white",
        textAlign: "center"
      }}
    >
      <Flex w="100vw" h="100vh" align="center" justify="center" wrap="wrap">
        
        <div>
          <Heading>Create Property</Heading>
        </div><br/>
        <NavLink to="/profile">Profile</NavLink><br/>
        <NavLink to="/">Home</NavLink>
      </Flex>
    </div>
  );
}

export default CreateProperty;