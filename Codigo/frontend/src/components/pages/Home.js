import React from "react";
import { NavLink } from "react-router-dom";
import { Heading, Flex, Button, Box, Image } from "@chakra-ui/core";
import Video from "../Video";
import sample from "../../Assets/Landing.mp4";
import { position } from "styled-system";
import img from "../../Assets/Imgbgland.jpg"

function Home() {
  return (
    <div
      style={{
        backgroundColor: "#121212",
        color: "white",
        textAlign: "center",
        position: "relative",
        textAlign: "center"
      }}
    >
      <Flex w="100vw" h="100vh" align="center" justify="center" wrap="wrap" direction="column">
        <div>
        
            {/* <video
              className="videoTag"
              autoPlay
              loop
              muted
              style={{
                // width: "100%",
                // height: "100%",
                objectFit: "fill",
                zIndex: 0
              }}
            >
              <source src={sample} type="video/mp4" />
            </video> */}

            <Image src={img} alt="landing bg"  size="100%" objectFit="cover"></Image>
            <div
              style={{
                position: "absolute",
                top: "46vh",
                left: "50vw",
                transform: "translate(-50%, -50%)"
              }}
            >
              <Heading>Conta</Heading>
            </div>
          {/* <Video /> */}
          
          <Box>
        <Button variantColor="green" variant="outline" marginRight="5px" >
          <NavLink to="/login">Login</NavLink>{" "}
        </Button>
        or...
        <Button variantColor="green" marginLeft="5px">
          <NavLink to="/signup">Signup</NavLink>
        </Button>
      </Box>
        </div>
      </Flex>
    
    </div>
  );
}

export default Home;
