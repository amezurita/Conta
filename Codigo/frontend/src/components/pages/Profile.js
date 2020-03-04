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
import lake from "../../Assets/lakehouse.jpg";
import context from "../../context"


function Profile() {
  // function Feature({ title, desc, ...rest }) {
  //   return (
  //     <Box p={5} shadow="md" borderWidth="1px" {...rest}>
  //       <Image src="../../Assets/lakehouse.jpg" alt="property image"/>
  //       <Heading fontSize="xl">{title}</Heading>
  //       <Text mt={4}>{desc}</Text>
  //       <Button><NavLink to="/property">see more</NavLink></Button> <br />
  //     </Box>
  //   );
  // }
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
            <Heading style={{ display: 'flex', justifyContent: 'center' }}>Welcome, María</Heading>
          </div>
          <Avatar></Avatar>
          <div>
            <article>
              Your monthly balance is: $21,896{" "}
              <NavLink to="/balance">see more</NavLink>
            </article>
          </div>
        </Flex>

        <div>
          <Stack spacing={8}>
            <Flex p={5} shadow="md" borderWidth="1px" m={5}>
              <Image src={lake} w="30%" h="30%" alt="property image" />
              <Flex px={5} direction={"column"} justify={"space-between"}>
                <Heading fontSize="xl">Lake house</Heading>
                <Text color="orange"> Rent: $32,000</Text>
                <Text mt={4}>
                  House by the lake, fixed in sept of last year. Need to talk
                  with past tennants before renting again.
                </Text>
                <Button>
                  <NavLink to="/property">see more</NavLink>
                </Button>{" "}
              </Flex>
            </Flex>

            <Flex p={5} shadow="md" borderWidth="1px" m={5}>
              <Image src={lake} w="30%" h="30%" alt="property image" />
              <Flex px={5} direction={"column"} justify={"space-between"}>
                <Heading fontSize="xl">Lake house</Heading>
                <Text color="orange"> Rent: $32,000</Text>
                <Text mt={4}>
                  House by the lake, fixed in sept of last year. Need to talk
                  with past tennants before renting again.
                </Text>
                <Button>
                  <NavLink to="/property">see more</NavLink>
                </Button>{" "}
              </Flex>
            </Flex>

            <Flex p={5} shadow="md" borderWidth="1px" m={5}>
              <Image src={lake} w="30%" h="30%" alt="property image" />
              <Flex px={5} direction={"column"} justify={"space-between"}>
                <Heading fontSize="xl">Lake house</Heading>
                <Text color="orange"> Rent: $32,000</Text>
                <Text mt={4}>
                  House by the lake, fixed in sept of last year. Need to talk
                  with past tennants before renting again.
                </Text>
                <Button>
                  <NavLink to="/property">see more</NavLink>
                </Button>{" "}
              
              </Flex>
              
            </Flex>
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

export default Profile;






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
