import { Box, Flex, Heading, Spacer, Text } from "@chakra-ui/react";
import React from "react";
import {
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
} from "@chakra-ui/react";
import Link from "next/link";
import Navbar from "../../Navbar";
export default function Header() {
  return (
    <Box>
      <Navbar />
      <Box
        bg="#fff"
        textAlign="center"
        m="20px 50px"
        p="35px"
        boxShadow="0px 0px 30px #4c4b4b85"
        borderRadius="10px"
      >
        <Heading m={0} fontSize="48px" color="#000" fontFamily="serif">
          STRAPI STORE
        </Heading>
        <Text fontSize="16px" m={0} color="##525151">
          Welcome to the House of{" "}
          <Text
            as="mark"
            bg="transparent"
            color="#0072ff"
            p="0px"
            fontWeight="600"
          >
            Fashion
          </Text>
        </Text>
      </Box>
    </Box>
  );
}
