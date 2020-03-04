import React from "react";
import { NavLink } from "react-router-dom";
import {
  Heading,
  Flex,
  Button,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText, 
  InputGroup,
  InputLeftAddon,
  Input,
} from "@chakra-ui/core";
import {MyContext} from "../../context";
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
          <Flex w="100vw" h="100vh" align="center" justify="center" wrap="wrap" direction="column">
            <div>
              <FormControl>
                <Form submit={context.handleSubmit} title="Issue Payment">
                  <FormControl isRequired>
                    <InputGroup>
                      <Input
                        onChange={context.handleInput}
                        name="name"
                        type="text"
                        placeholder="Property name"
                        value={context.state.property.payment.name}

                      />
                    </InputGroup>
                  </FormControl>
                  <FormControl isRequired>
                    <InputGroup>
                      <Input
                        onChange={context.handleInput}
                        type="number" name="amount" placeholder="Payment amount"
                        value={context.state.property.payment.amount}
                      />
                    </InputGroup>
                  </FormControl>
                  <FormControl isRequired>
                    <InputGroup>
                      <Input
                        onChange={context.handleInput}
                        type="text" name="description" placeholder="Description"
                        value={context.state.property.payment.description}

                      />
                    </InputGroup>
                  </FormControl>
                </Form>
              </FormControl>
            </div>
            <NavLink to="/property">Property</NavLink>
            <br />
            <NavLink to="/">Home</NavLink>
          </Flex>
        </div>
      )}
    </MyContext.Consumer>
  );
}

export default IssuePayment;
