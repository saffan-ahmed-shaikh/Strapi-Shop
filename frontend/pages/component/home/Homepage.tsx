import React from "react";
import {
  Box,
  Text,
  Image,
  Flex,
  Spacer,
  Grid,
  GridItem,
  Heading,
  Center,
  Button,
  Stack,
  Badge,
} from "@chakra-ui/react";
import Header from "./Header";
import Herosection from "./Herosection";
import People from "../Products/Products";
import Cardtwo from "./Cardtwo";
import Posts from "./Posts";
import Namecard from "./Namecard";
import Flatsec from "./Flatsec";
export default function Homepage(props) {
  return (
    <Box bg="#d3e9f9" pt="10px">
      <Box>
        <Header />
        <Herosection />
        <Box>
          <Flex>
            <Box w="60%" p={20}>
              <Posts />
            </Box>
            <Box w="40%" p={20}>
              <Cardtwo />
              <Namecard />
            </Box>
          </Flex>
          <Flatsec />
        </Box>
      </Box>
    </Box>
  );
}
