import React from "react";
import { Box, Stack, Button, Heading, PseudoBox } from "@chakra-ui/core";
import { NavLink } from "react-router-dom";
import { FaFacebook } from "react-icons/fa"

function Form({ width, children, title, submit }) {
  return (
    <Box w={width || "350px"} boxShadow="xl">
      <Stack spacing={8} p={8}>
        <Heading textAlign="center" as="h1">
          {title}
        </Heading>
        <Button leftIcon="FaFacebook" variantColor="blue" size="md" rounded="20px">
          <NavLink to="/auth/facebook">Facebook</NavLink>
        </Button>
        <Button leftIcon="email" variantColor="red" size="md" rounded="20px">
          <NavLink to="/auth/google">Google</NavLink>
        </Button>
      </Stack>
    </Box>
  );
}

export default Form;
