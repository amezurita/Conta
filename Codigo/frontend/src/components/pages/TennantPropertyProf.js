import React from "react";
import { NavLink } from "react-router-dom";
import { Heading, Flex, Button, Box, Image, Text, Avatar } from "@chakra-ui/core";

function TennantPropertyProf() {
  return (
    <div
      style={{
        backgroundColor: "white",
        color: "green",
        textAlign: "center"
      }}
    >
      <Flex w="100vw" h="100vh" align="center" justify="center" wrap="wrap">
        
        <div>
        <Box p={5}  >
              <Image src="../../Assets/lakehouse.jpg" alt="property image"  />
              <Heading fontSize="xl">Lake House</Heading>
              <Text color="orange">Rent: $32,000</Text>
              <Text mt={4}> House by the lake, fixed in sept of last year. Need to talk
                with past tennants before renting again. </Text>
             <Heading size="md"> Tenant:</Heading>
             <Avatar src="#"></Avatar>
             <Text>Ale Cuenca</Text>
            
              <br />
            </Box>
        </div><br/>
        <NavLink to="/">Home</NavLink>

      </Flex>
    </div>
  );
}

export default TennantPropertyProf;