import React from "react";
import { NavLink } from "react-router-dom";
import { Heading, Flex, Button, Image, Box, Text} from "@chakra-ui/core";

function Payment() {
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
              <Heading fontSize="lg">Electricity</Heading>
              <Text color="orange">$2,000</Text>
              <Text mt={4}> The electricity bill came early this month</Text>
              <Image src="#" alt="recibo" />
            </Box>
          

        </div> <br/>
        <NavLink to="/">Home</NavLink>
      </Flex>
    </div>
  );
}

export default Payment;