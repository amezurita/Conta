import React from "react";
import { NavLink } from "react-router-dom";
import { Heading, Flex, Button } from "@chakra-ui/core";

function Profile() {
  return (
    <div
      style={{
        backgroundColor: "green",
        color: "white",
        textAlign: "center"
      }}
    >
      <Flex w="100vw" h="100vh" align="center" justify="center" wrap="wrap">
        
        <div>
          <Heading>Profile</Heading>
        </div> <br/>
        <NavLink to="/edit-profile">Edit Profile</NavLink> <br/>
        <NavLink to="/balance">See Balance</NavLink> <br/>
        <NavLink to="/property">See Property</NavLink> <br/>
        <NavLink to="/">Home</NavLink>
      </Flex>
    </div>
  );
}

export default Profile;