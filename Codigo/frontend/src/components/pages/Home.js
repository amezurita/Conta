import React from "react";
import { NavLink } from "react-router-dom";
import { Heading, Flex, Button, Box, Image } from "@chakra-ui/core";
import ChatIcon from "../ChatIcon.js"

import img from "../../Assets/Imgbgland.jpg";

function Home(props) {
  return (
    <div
      style={{
        backgroundColor: "#121212",
        color: "white",
        textAlign: "center",
        position: "relative"
      }}
    >
      <Flex
        w="100vw"
        h="100vh"
        align="center"
        justify="center"
        wrap="wrap"
        direction="column"
      >
        <div
          style={{
            background: `url(${img})`,
            width: 414,
            height: 716,
            display: 'flex',
            justifyContent: 'Center',
            alignItems: 'Center'
          }}
        >
          <div>
            <div>
              <Heading size="2xl">Renting</Heading>
            </div>
            <br/><br/>
            <Box>
              <Button variantColor="green" variant="outline" marginRight="5px">
                <NavLink to="/login">Login</NavLink>
              </Button>
              or...
              <Button variantColor="green" marginLeft="5px">
                <NavLink to="/choose">Signup</NavLink>
              </Button>
            </Box>
            <ChatIcon/>
          </div>
        </div>
      </Flex>
    </div>
  );
}

export default Home;
