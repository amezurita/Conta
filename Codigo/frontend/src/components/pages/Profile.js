import React from "react";
import { NavLink } from "react-router-dom";
import {
  Heading,
  Flex,
  Button,
  Avatar,
  Stack,
  Text,
  Image
} from "@chakra-ui/core";
import lake from "../../Assets/lakehouse.jpg";
import context from "../../context"
import ChatIcon from "../ChatIcon"

import { MyContext } from "../../context";

class ProfileConsumer extends React.Component {
  render() {
    return (
      <MyContext.Consumer>{ctx => <Profile ctx={ctx} />}</MyContext.Consumer>
    );
  }
}

class Profile extends React.Component {
  componentDidMount() {
    console.log(this.props.ctx);
    this.props.ctx.loadOwnerProperties();
  }

  render() {
    const state = this.props.ctx.state || {
      user: {}
    }

    const balance = (state.ownerProperties || []).reduce((sum, property) => {
      return sum + (property.rent || 0)
    }, 0)

    return (
      <div
        style={{
          backgroundColor: "white",
          color: "green",
          textAlign: "justify"
        }}
      >
        <Stack>
          <Flex direction={"column"} justify={"center"} align={"center"}>
            <div>
              <Heading style={{ display: "flex", justifyContent: "center" }}>
                Welcome, {state.user.name}
              </Heading>
            </div>
            <Avatar></Avatar>

            <div>
              <article>Your estimated monthly balance is: ${balance}</article>
            </div>
          </Flex>

          <div>
            <Stack spacing={8}>
              {(state.ownerProperties || []).map(p => {
                return <PropertyCard key={p._id} props={{
                  property: p,
                  selectProperty: () => this.props.ctx.handleSelectPropertyDetail(p)
                }} />;
              })}

              <Button>
                <NavLink to="/create-property">Add property</NavLink>
              </Button>
            </Stack>
          </div>
          <NavLink to="/">Home</NavLink>
        </Stack>
      </div>
    );
  }
}

function PropertyCard({ props }) {
  return (
    <Flex p={5} shadow="md" borderWidth="1px" m={5}>
      <Image src={lake} w="30%" h="30%" alt="property image" />
      <Flex px={5} direction={"column"} justify={"space-between"}>
        <Heading fontSize="xl">{props.property.name}</Heading>
        <Text color="orange">Rent: ${props.property.rent}</Text>
        <Text mt={4}>{props.property.description}</Text>
        <Text my={4}>
          { props.property.tennant ? ('Tenant: ' + props.property.tennant.name) : props.property._id }
        </Text>
        <Button onClick={props.selectProperty}>See more</Button>
      </Flex>
    </Flex>
  );
}

export default ProfileConsumer;

// return (
//   <div
//     style={{
//       backgroundColor: "white",
//       color: "green",
//       textAlign: "justify"
//     }}
//   >
//     <Stack>
//       <Flex direction={"column"} justify={"center"} align={"center"}>
//         <div>
//           <Heading style={{ display: 'flex', justifyContent: 'center' }}>Welcome, {context.user.name}</Heading>
//         </div>
//         <Avatar src={context.user.photoUrl}></Avatar>
//         <div>
//           <article>
//             Your monthly balance is: {context.user.balance}
//             <NavLink to="/balance">see more</NavLink>
//           </article>
//         </div>
//       </Flex>

//       <div>
//         <Stack spacing={8}>
//           <Flex p={5} shadow="md" borderWidth="1px" m={5}>
//             <Image src={context.property.photoUrl} w="30%" h="30%" alt="property image" />
//             <Flex px={5} direction={"column"} justify={"space-between"}>
//               <Heading fontSize="xl">{context.property.name}</Heading>
//               <Text color="orange"> Rent: {context.property.rent}</Text>
//               <Text mt={4}>
//                {context.property.description}
//               </Text>
//               <Button>
//                 <NavLink to="/property/:${this.context.property._id}">see more</NavLink>
//               </Button>
//             </Flex>
//           </Flex>

//           <Flex p={5} shadow="md" borderWidth="1px" m={5}>
//             <Image src={context.property.photoUrl} w="30%" h="30%" alt="property image" />
//             <Flex px={5} direction={"column"} justify={"space-between"}>
//               <Heading fontSize="xl">{context.property.name}</Heading>
//               <Text color="orange"> Rent: {context.property.rent}</Text>
//               <Text mt={4}>
//                {context.property.description}
//               </Text>
//               <Button>
//                 <NavLink to="/property/:${this.context.property._id}">see more</NavLink>
//               </Button>
//             </Flex>
//           </Flex>

//            <Flex p={5} shadow="md" borderWidth="1px" m={5}>
//             <Image src={context.property.photoUrl} w="30%" h="30%" alt="property image" />
//             <Flex px={5} direction={"column"} justify={"space-between"}>
//               <Heading fontSize="xl">{context.property.name}</Heading>
//               <Text color="orange"> Rent: {context.property.rent}</Text>
//               <Text mt={4}>
//                {context.property.description}
//               </Text>
//               <Button>
//                 <NavLink to="/property/:${this.context.property._id}">see more</NavLink>
//               </Button>
//             </Flex>
//           </Flex>
//           <Button>
//                 <NavLink to="/create-property">Add property</NavLink>
//               </Button>
//         </Stack>
//       </div>
//       <NavLink to="/">Home</NavLink>
//     </Stack>
//   </div>
// );
