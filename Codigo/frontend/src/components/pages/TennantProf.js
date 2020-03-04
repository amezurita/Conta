import React from "react";
import { NavLink } from "react-router-dom";
import {
  Heading,
  Flex,
  Button,
  Avatar,
  Stack,
  Box,
  Text,
  Image
} from "@chakra-ui/core";
import ChatIcon from "../ChatIcon"
import {MyContext} from '../../context'

class TennantProfileConsumer extends React.Component {
  render() {
    return (
      <MyContext.Consumer>
        {
          ctx => <Profile
            ctx={ctx} user={ctx.state.user}  handleMarkPaymentDone={ctx.handleMarkPaymentDone} />
        }
      </MyContext.Consumer>
    );
  }
}

function Profile(props) {
  return (
    <div
      style={{
        backgroundColor: "white",
        color: "green",
        textAlign: "left"
      }}
    >
      <Box
        w="100vw"
        h="100vh"
        align="center"
        justify="center"
        wrap="wrap"
        direction="column"
      >
        <Flex
          align="center"
          justify="center">
          <div>
            <div>
              <Heading>Hi, {props.user.name}</Heading>
            </div>
            <br />
            <Avatar></Avatar>
            <br />
            <br />
          </div>
        </Flex>

        <div>
          <Stack spacing={8}>
            <Box p={5} shadow="md" borderWidth="1px">
              <Image src="/places/lakehouse.jpg" alt="property image"   />
              <Heading fontSize="xl">${props.user.property.name}</Heading>
              <Text color="orange"> Rent: ${props.user.property.rent}</Text>
            </Box>

            <Box>
              <Text style={{ fontWeight: "bold", fontSize: 24}} pl={4}> Pending Payments </Text>
              {
                (props.user.payments || [])
                  .filter(payment => !payment.isPaid)
                  .map((payment) => {
                  return (
                    <Box boxShadow="md" p={5}>
                      <Text style={{ fontWeight: "bold" }}>{ payment.name }</Text>
                      <Text>Amount: ${ payment.amount }</Text>

                      <Button onClick={() => props.handleMarkPaymentDone(payment)}>
                        Mark as done
                      </Button>
                    </Box>
                  )
                })
              }
            </Box>

            <Box>
              <Text style={{ fontWeight: "bold", fontSize: 24}} pl={4}> Paid Payments </Text>
              {
                (props.user.payments || [])
                  .filter(payment => payment.isPaid)
                  .map((payment) => {
                  return (
                    <Box boxShadow="md" p={5}>
                      <Text style={{ fontWeight: "bold" }}>{ payment.name }</Text>
                      <Text>Amount: ${ payment.amount }</Text>
                    </Box>
                  )
                })
              }
            </Box>

            <Flex justify={'space-between'}>
              <NavLink to="/">Home</NavLink>
              <NavLink to="/profile">Profile</NavLink>
            </Flex>
          </Stack>
        </div>
      </Box>
    </div>
  );
}

export default TennantProfileConsumer;
