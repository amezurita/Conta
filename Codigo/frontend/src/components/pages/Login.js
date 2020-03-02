import React from "react";
import { MyContext } from "../../context";
import {
  Flex,
  FormControl,
  InputGroup,
  InputLeftAddon,
  Input,
  Icon
} from "@chakra-ui/core";
import Form from "../Styles/Form.js";
import Box from "../Styles/Box.js"
import { NavLink } from "react-router-dom";

export default function Login() {
  return (
    <MyContext.Consumer>
      {context => (
        <div style={{backgroundColor:"white", color:"green"}}>
        <Flex w="100vw" h="100vh" align="center" justify="center" wrap="wrap" direction="column">
          <Form submit={context.handleLoginSubmit} title="Login">
            <FormControl isRequired>
              <InputGroup>
              
                <Input
                  onChange={context.handleLoginInput}
                  placeholder="Email"
                  name="email"
                  type="email"
                  value={context.state.formLogin.email}
                />
              </InputGroup>
            </FormControl>
            <FormControl isRequired>
              <InputGroup>
                
                <Input
                  onChange={context.handleLoginInput}
                  placeholder="Password"
                  name="password"
                  type="password"
                  value={context.state.formLogin.password}
                />
              </InputGroup>
            </FormControl><br/>
          </Form>
          <NavLink to="/profile">Owner profile</NavLink><br/>
          <NavLink to="/tennant"> Tennant profile</NavLink><br/>
          <NavLink to="/">Home</NavLink>
        </Flex>
        </div>
      )}
    </MyContext.Consumer>
  );
}
