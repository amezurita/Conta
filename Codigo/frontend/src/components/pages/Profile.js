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
import lake from "../../Assets/lakehouse.jpg"
import silver from "../../Assets/silverstapt.jpg"

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
        textAlign: "justify"
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
          <Heading>Welcome, María</Heading>
        </div>
        <br />
        <br />
        <Avatar></Avatar> <br />
        <div>
          <article>
            Your monthly balance is: $47,000{" "}
            <NavLink to="/balance">see more</NavLink>
          </article>
        </div>
        <br />
        <div>
          <Stack spacing={8}>
            <Box p={5} shadow="md" borderWidth="1px">
              <Image src={lake} w="30%" h="30%"alt="property image"   />
              <Heading fontSize="xl">Lake house</Heading>
              <Text color="orange"> Rent: $32,000</Text>
              <Text mt={4}>
                House by the lake, fixed in sept of last year. Need to talk
                with past tennants before renting again.
              </Text>
             
              <Button>
                <NavLink to="/property">see more</NavLink>
              </Button>{" "}
              <br />
            </Box>

            <Box p={5} shadow="md" borderWidth="1px" >
              <Image src={silver} w="30%" h="30%" alt="property image"  />
              <Heading fontSize="xl">Silver st apt</Heading>
              <Text color="orange">Rent: $15,000</Text>
              <Text mt={4}>Apartment by the coffee house. Water damage. </Text>
              
              <Button>
                <NavLink to="/property">see more</NavLink>
              </Button>{" "}
              <br />
            </Box>
            <Button>
                <NavLink to="/create-property">+</NavLink>
              </Button>
          </Stack>
        </div>
        <NavLink to="/">Home</NavLink>
      </Flex>
    </div>
  );
}

export default Profile;
