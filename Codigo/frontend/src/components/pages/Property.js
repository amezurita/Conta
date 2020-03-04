import React from "react";
import { NavLink } from "react-router-dom";
import {
  Heading,
  Flex,
  Button,
  Image,
  Box,
  Text,
  Avatar
} from "@chakra-ui/core";
import { MyContext } from "../../context";

function PropertyConsumer() {
  return (
    <MyContext.Consumer>{ctx => <Property ctx={ctx} />}</MyContext.Consumer>
  );
}

function Property(props) {
  const property = props.ctx.state.selectedProperty;

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
          <Box p={5}>
            <Image src="/places/lakehouse.jpg" alt="property image" />
            <Heading fontSize="xl">{property.name}</Heading>
            <Text color="orange">Rent: ${property.rent}</Text>
            <Text my={4}>{property.description}</Text>

            {
              property.tennant
                ? (
                  <Box>
                    <Heading size="md"> Tenant:</Heading>
                    <Avatar src="#"></Avatar>
                    <Text style={{ fontWeight: "bold" }}>{property.tennant.name}</Text>
                  </Box>
                )
                : (
                  <Box>
                    <Text>id para activar: </Text>
                    <Text style={{ fontWeight: "bold" }}>{ property.id || property._id }</Text>
                  </Box>
                )
            }

            <Text style={{ fontSize: 24 }} mt={4}>Pending Payments:</Text>

            <NavLink to="/payment"
                     style={{ fontWeight: "bold", textDecoration: 'underline' }} my={2}>
              Agregar un pago
            </NavLink>

            <Flex direction="row" wrap="wrap">
              {
                property.payments
                  .filter(payment => !payment.isPaid)
                  .map(payment => {
                  return (
                    <Box borderWidth="1px" p="5" boxShadow="md">
                      <Text>{payment.name}</Text>
                      <Text>Amount: ${payment.amount}</Text>
                      <Text>Desc: {payment.description}</Text>
                    </Box>
                  )
                })
              }
            </Flex>
            <br/><br/>

            <Text style={{ fontSize: 24 }} mt={4}>Paid Payments:</Text>

            <Flex direction="row" wrap="wrap">
              {
                property.payments
                  .filter(payment => payment.isPaid)
                  .map(payment => {
                  return (
                    <Box borderWidth="1px" p="5" boxShadow="md">
                      <Text>{payment.name}</Text>
                      <Text>Amount: ${payment.amount}</Text>
                      <Text>Desc: {payment.description}</Text>
                    </Box>
                  )
                })
              }
            </Flex>

            <Flex justify={'space-between'}>
              <NavLink to="/">Home</NavLink>
              <NavLink to="/profile">Profile</NavLink>
            </Flex>
          </Box>
        </div>
      </Flex>
    </div>
  );
}

export default PropertyConsumer;
