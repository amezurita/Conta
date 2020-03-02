import React from 'react'
import { MyContext } from '../../context'
import {
  Flex,
  FormControl,
  InputGroup,
  InputLeftAddon,
  Input,
  Icon
} from '@chakra-ui/core'
import Form from '../Styles/Form'
import { NavLink } from "react-router-dom";

function TenReg() {
  return (
    <MyContext.Consumer>
      {context => (
        <div style={{backgroundColor:"white", color:"black"}}>
        <Flex w="100vw" h="100vh" align="center" justify="center" direction="column">
          <Form  submit={context.handleSignupSubmit} title="Signup">
            <FormControl  isRequired>
              <InputGroup bg="green">
              
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
            </FormControl><br/>
          </Form><br/>
          <NavLink to="/create-property">Owner</NavLink><br/>
          <NavLink to="/ten-profile">Tennant</NavLink><br/>
          <NavLink to="/">Home</NavLink>
        </Flex>
        </div>
      )}
    </MyContext.Consumer>
  
  )
}

export default TenReg