import React from "react";
import { NavLink } from "react-router-dom";
import { Heading, Flex} from "@chakra-ui/core";

function EditProfile() {
  return (
    <div
      style={{
        backgroundColor: "peru",
        color: "white",
        textAlign: "center"
      }}
    >
      <Flex w="100vw" h="100vh" align="center" justify="center" wrap="wrap">
        <div><Heading>Edit Profile View</Heading></div><br/>
        <NavLink to="/">Home</NavLink>
      </Flex>
    </div>
  );
}

export default EditProfile;