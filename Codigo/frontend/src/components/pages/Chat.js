import React from "react";

import {
 
  Flex,
 
  InputGroup,
  InputRightAddon,
  Input, 
  Stack, 
  InputLeftAddon, 
  Icon, Box, Avatar, Text

} from "@chakra-ui/core";
import { MyContext } from "../../context";

import PaymentView from "../pages/PaymentView"


function Chat() {
  return (
    <MyContext.Consumer>
      {context => (
        <div
          style={{
            backgroundColor: "white",
            color: "green",
            textAlign: "center",
            flexDirection: "column"
          }}
        >
          <Flex
            w="100vw"
            h="100vh"
       
            justify="center"
            wrap="wrap"
            direction="column"
          >
           
           
              <Stack>
             
              <Box w="100vw" h="80vh"></Box>
              <div style={{backgroundColor: "green", width: "100%",  height:"10%"}}><p>Property</p></div>
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
                <Stack spacing={4}>
                <div style={{display:"flex", flexDirection: "row", border: "1px solid green"}}>
                
                    
                <Avatar/>
                <Box boxShadow="md" border="green"><Text>Hellooooo!</Text></Box>
                </div>
                <div style={{display:"flex", flexDirection: "row", border: "1px solid green"}}>
                <Avatar/>
                <Box boxShadow="md"> Ale Issued a payment: <PaymentView></PaymentView></Box>
                </div>
                </Stack>
              </Stack>
           
          </Flex>
        </div>
      )}
    </MyContext.Consumer>
  );
}

export default Chat