import React from "react";
import Link from "next/link";
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
  UnorderedList,
  ListItem,
  Badge,
} from "@chakra-ui/react";
export default function Navbar() {
  return (
    <Box
      bg="#fff"
      color="#000"
      mb="10px"
      mx="15px"
      p="0"
      borderRadius="10px"
      boxShadow="0px 0px 30px #4c4b4b85"
    >
      <Flex>
        <Box p="0px 15px" display="flex" alignItems="center">
          <Link href="/">
            <Image
              src="data:image/png;base64,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"
              w="110px"
            />
          </Link>
        </Box>
        <Spacer />
        <Box display="block" p="0px 45px">
          <UnorderedList styleType="none" display="flex" gap="25px">
            <ListItem
              fontWeight="600"
              fontSize="17px"
              borderBottom="3px solid #fff"
              pb="4px"
              _hover={{ borderBottom: "3px solid #154eff" }}
            >
              <Link href="/component/Aboutus/Aboutus">About</Link>
            </ListItem>
            <ListItem
              fontWeight="600"
              fontSize="17px"
              borderBottom="3px solid #fff"
              pb="4px"
              _hover={{ borderBottom: "3px solid #154eff" }}
            >
              {" "}
              <Link href="/component/Products/Products">Products</Link>
            </ListItem>
            <ListItem
              fontWeight="600"
              fontSize="17px"
              borderBottom="3px solid #fff"
              pb="4px"
              _hover={{ borderBottom: "3px solid #154eff" }}
            >
              <Link href="/component/contact/Contact">Contact us</Link>{" "}
            </ListItem>
            <ListItem
              fontWeight="600"
              fontSize="17px"
              borderBottom="3px solid #fff"
              pb="4px"
              _hover={{ borderBottom: "3px solid #154eff" }}
            >
              <Link href="/component/terms/Terms">Terms</Link>{" "}
            </ListItem>
          </UnorderedList>
        </Box>
      </Flex>
    </Box>
  );
}
