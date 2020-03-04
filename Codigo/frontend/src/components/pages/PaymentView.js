import React from "react";
import { Heading, Flex, Button, Image, Box, Text, ButtonGroup } from "@chakra-ui/core";

function Payment() {
  return (
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
        align="center"
        justify="center"
        wrap="wrap"
        direction="column"
      >
        <div>
          <Box p={5} boxShadow="md">
            <Heading fontSize="lg">Electricity</Heading>
            <Text color="orange">$2,000</Text>
            <Text mt={4}> The electricity bill came early this month</Text>
            <Image src="#" alt="recibo" />
            <ButtonGroup spacing={4}>
              <Button variant="outline">Come back Later</Button>
              <Button
          backgroundColor="green.300"
          variantColor="green"
          
          type="submit"
        >Done</Button>{" "}
            </ButtonGroup>
          </Box>
        </div>
      </Flex>
    </div>
  );
}

export default Payment;
