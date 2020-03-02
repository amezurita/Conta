import React from "react";
import { NavLink } from "react-router-dom";
import { Heading, Flex, Button, Box, Image } from "@chakra-ui/core";

function Choose() {
  return (
    <Flex w="100vw" h="100vh" align="center" justify="center" direction="column">
    <article> What is your role? </article>
      <Box>
        <Button variantColor="green" variant="outline" marginRight="5px">
          <NavLink to="/signup">Owner</NavLink>
        </Button>
        or...
        <Button variantColor="green" marginLeft="5px">
          <NavLink to="/ten-signup">Tennant</NavLink>
        </Button>
      </Box>
    </Flex>
  );
}
export default Choose
