import React from "react";
import { NavLink } from "react-router-dom";
import {

  Flex,

  FormControl,

  InputGroup,

  Input
  // Modal,
  // ModalOverlay,
  // ModalContent,
  // ModalHeader,
  // ModalFooter,
  // ModalBody,
  // ModalCloseButton
} from "@chakra-ui/core";
import { MyContext } from "../../context";
import Form from "../Styles/Form";

function IssuePayment() {
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
            align="center"
            justify="center"
            wrap="wrap"
            direction="column"
          >
            <div>
              <FormControl>
                <Form submit={context.handleSubmit} title="Issue Payment">
                  <FormControl isRequired>
                    <InputGroup>
                      <Input
                        onChange={context.handleInput}
                        name="name"
                        type="text"
                        placeholder="Payment Subject"
                        value="miau"
                      />
                    </InputGroup>
                  </FormControl>
                  <FormControl isRequired>
                    <InputGroup>
                      <Input
                        onChange={context.handleInput}
                        type="number"
                        name="amount"
                        placeholder="Payment amount"
                        value="miau"
                      />
                    </InputGroup>
                  </FormControl>
                  <FormControl isRequired>
                    <InputGroup>
                      <Input
                        onChange={context.handleInput}
                        type="text"
                        name="description"
                        placeholder="Tell the tenant a little more about the payment"
                        value="miau"
                      />
                    </InputGroup>
                  </FormControl>
                </Form>
              </FormControl>
            </div>
          </Flex>
        </div>
      )}
    </MyContext.Consumer>
  );
}

export default IssuePayment;
