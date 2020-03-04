import React from "react";
import { NavLink } from "react-router-dom";
import { Heading, Flex, Image, Box, Text, Avatar } from "@chakra-ui/core";

function Property() {
  return (
    <div
      style={{
        backgroundColor: "white",
        color: "green",
        textAlign: "center"
      }}
    >
      <Flex w="100vw" h="100vh" align="center" justify="center" wrap="wrap" direction="column">
        
        <div>
          <Box p={5}  >
              <Image src="/places/lakehouse.jpg" alt="property image"  />
              <Heading fontSize="xl">Lake House</Heading>
              <Text color="orange">Rent: $32,000</Text>
              <Text mt={4}> House by the lake, fixed in sept of last year. Need to talk
                with past tennants before renting again. </Text>
             <Heading size="md"> Tenant:</Heading>
             <Avatar src="#"></Avatar>
             <Text>Ale Cuenca</Text>
            <Text>Pending Payments:</Text>
            <Flex direction="row" wrap="wrap">
            <Box borderWidth="1px" p="5" boxShadow="md" >
              <Text>Landscape Maintenance</Text>
              <Text>Amount: $4,000</Text>
              <Text>Desc: The landscaping maintenance </Text>
            </Box>
            <Box borderWidth="1px" p={5} boxShadow="md">
              <Text>Electricity</Text>
              <Text>Amount: $1,200</Text>
              <Text>Desc: The electricity bill came early </Text>
            </Box>
            </Flex>
              <br />
            </Box>
          

        </div> <br/>
        <NavLink to="/">Home</NavLink>
      </Flex>
    </div>
  );
}

export default Property;