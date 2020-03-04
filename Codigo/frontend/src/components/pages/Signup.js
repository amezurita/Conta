import React from "react";

import {
  Flex,
  FormControl,
  InputGroup,
  Input,
} from "@chakra-ui/core";

import Form from "../Styles/Form";
import { NavLink } from "react-router-dom";
import { MyContext } from "../../context";

function Signup() {
  return (
    <MyContext.Consumer>
      {context => (
        <div style={{ backgroundColor: "white", color: "green" }}>
          <Flex
            w="100vw"
            h="100vh"
            align="center"
            justify="center"
            direction="column"
          >
            <Form submit={context.handleSignupSubmit} title="Signup">
              <FormControl isRequired>
                <InputGroup>
                  <Input
                    placeholder="Name"
                    name="name"
                    type="text"
                    value={context.state.formSignup.name}
                    onChange={context.handleSignupInput}
                  />
                </InputGroup>
              </FormControl>
              <FormControl isRequired>
                <InputGroup>
                  <Input
                    onChange={context.handleSignupInput}
                    placeholder="Email"
                    name="email"
                    type="email"
                    value={context.state.formSignup.email}
                  />
                </InputGroup>
              </FormControl>
              <FormControl isRequired>
                <InputGroup>
                  <Input
                    onChange={context.handleSignupInput}
                    placeholder="Password"
                    name="password"
                    type="password"
                    value={context.state.formSignup.password}
                  />
                </InputGroup>
              </FormControl>

              {
                context.state.formSignup.role === 'tennant'
                  ? (
                    <FormControl isRequired>
                      <InputGroup>
                        <Input
                          onChange={context.handleSignupInput}
                          placeholder="reference code"
                          name="property_id"
                          type="text"
                          value={context.state.formSignup.property_id}
                        />
                      </InputGroup>
                    </FormControl>
                  )
                  : null
              }

              <br />
            </Form>

            <NavLink to="/">Home</NavLink>
          </Flex>
        </div>
      )}
    </MyContext.Consumer>
  );
}

export default Signup;
