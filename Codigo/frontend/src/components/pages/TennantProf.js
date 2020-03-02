import React from "react";
import { NavLink } from "react-router-dom";
import { Heading, Flex, Button, Box, Image, Avatar } from "@chakra-ui/core";
import img from "../../Assets/Coffi.jpeg"


function TenProf() {
  return (
      <Flex position="relative" w="100vw" h="100vh" align="flex-end" justify="center" wrap="wrap">
    <div
      style={{
        backgroundColor: "#121212",
        color: "white",
        textAlign: "center", 
        position: "absolute",
        top:0,
        bottom:0,
      }}
    >

        <Box bg="green.900" w="100vw" h="85vh" position="absolute">
          <Avatar
            rounded="full"
            size="150px"
            src={img}
            alt="Coffi"
            position="absolute"
          />

        </Box>
     
    </div>
    </Flex>
  );
}

export default TenProf;
