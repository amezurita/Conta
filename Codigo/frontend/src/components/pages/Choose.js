import React from "react";
import { NavLink } from "react-router-dom";
import { Flex, Button, Box, Image } from "@chakra-ui/core";
import {MyContext} from '../../context'

function Choose() {
  return (
    <MyContext.Consumer>
      {context => (
        <Flex w="100vw" h="100vh" align="center" justify="center" direction="column">
          <article> What is your role? </article>
          <Box>
            <Button variantColor="green" variant="outline" marginRight="5px" onClick={(e) => context.handleSelectRole(e, 'owner')}>
              Owner
            </Button>
            or...
            <Button variantColor="green" marginLeft="5px" onClick={(e) => context.handleSelectRole(e, 'tennant')}>
              Tenant
            </Button>
          </Box>
        </Flex>
      )}
    </MyContext.Consumer>
  );
}
export default Choose
