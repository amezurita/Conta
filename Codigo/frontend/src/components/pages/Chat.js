import React from "react";
import { NavLink } from "react-router-dom";
import {
  Heading,
  Flex,
  Button,
  InputGroup,
  InputRightAddon,
  Input, 
  Stack, 
  InputLeftAddon, 
  Icon, Box, Avatar

} from "@chakra-ui/core";
import { MyContext } from "../../context";
import Form from "../Styles/Form";

function Chat() {
  return (
    <MyContext.Consumer>
      {context => (
        <div
          style={{
            backgroundColor: "white",
            color: "green",
            textAlign: "center"
          }}
        >
          <Flex
            w="100vw"
            h="100vh"
       
            justify="center"
            wrap="wrap"
            direction="column"
          >
           
              <Stack spacing={4}>
              <Box w="100vw" h="10vh" bg="blue"></Box>
              <Box w="100vw" h="80vh"></Box>
                <InputGroup>
                <InputLeftAddon children={<Icon name="attachment" color="gray.300" />} />
                <InputLeftAddon children={<Icon name="arrow-up" color="gray.300" />} />
                  <Flex justify="flex-end">
                  <Input
                    type="text"
                    name="textbody"
                    placeholder="Type a message..."
                    justify="flex-end"


                  /></Flex>
                   <InputRightAddon children={<Icon name="arrow-back" color="green.500" />} />

                </InputGroup>
                <Avatar></Avatar> 
                <Box>message text</Box>
                <Avatar></Avatar>
                <Box> </Box>
              </Stack>
           
          </Flex>
        </div>
      )}
    </MyContext.Consumer>
  );
}

export default Chat