import React from "react";
import { NavLink } from "react-router-dom";
import {
  Heading,
  Flex,
  Button,
  Avatar,
  Stack,
  Box,
  Text,
  Image
} from "@chakra-ui/core";

function Profile() {
  // function Feature({ title, desc, ...rest }) {
  //   return (
  //     <Box p={5} shadow="md" borderWidth="1px" {...rest}>
  //       <Image src="../../Assets/lakehouse.jpg" alt="property image"/>
  //       <Heading fontSize="xl">{title}</Heading>
  //       <Text mt={4}>{desc}</Text>
  //       <Button><NavLink to="/property">see more</NavLink></Button> <br />
  //     </Box>
  //   );
  // }
  return (
    <div
      style={{
        backgroundColor: "white",
        color: "green",
        textAlign: "left"
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
        <div>
          <Heading>Welcome, Ame</Heading>
        </div>
        <br />
        <Avatar></Avatar> <br />
        <div>
          <article>
            Your rent is: $11,800
          </article>
          <article>
            Due by: 12/03/2020
          </article>
        </div>
        <br />
        <div>
          <Stack spacing={8}>
            <Box p={5} shadow="md" borderWidth="1px">
              <Image src="../../Assets/lakehouse.jpg" alt="property image"   />
              <Heading fontSize="xl">Home</Heading>
              <Text color="orange"> Rent: $32,000</Text>
              <Text mt={4}>
                Entered in august of 2019.
              </Text>
             
              <Button>
                <NavLink to="/ten-property">see more</NavLink>
              </Button>{" "}
              <br />
            </Box>
          </Stack>
        </div>


        <NavLink to="/">Home</NavLink>
      </Flex>
    </div>
  );
}

export default Profile;