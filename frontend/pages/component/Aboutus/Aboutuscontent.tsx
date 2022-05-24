import {
  Box,
  Center,
  Flex,
  Heading,
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
  Image,
  Spacer,
  Link,
  Button,
  Text,
} from "@chakra-ui/react";
import React from "react";

export default function Aboutuscontent() {
  return (
    <Box>
      <Flex
        w="100%"
        display="flex"
        bg="#fff"
        p="15px"
        mb="50px"
        borderRadius="8px"
        boxShadow="0px 0px 30px #4c4b4b85"
      >
        <Box bg="#d3e9f9" w="50%" borderRadius="8px" me="10px">
          <Box
            w="100%"
            h="100%"
            backgroundImage="url(/fashionmen.png)"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
          ></Box>
        </Box>
        <Spacer />
        <Box w="50%" ms="10px" p="25px">
          <Heading fontSize="48px" m={0} p="0">
            Men's Fashion
          </Heading>

          <Box>
            <Text fontSize="15px">
              Men’s Fashion Men’s Fashion of the 21st century has drastically
              changed since the Renaissance era. In today’s fashion you would
              never see men wearing what they wore in the Renaissance era. Some
              of the designs have carried over to our time, but not very many.
              The details they would have put on clothing during the Renaissance
              era, are different from the details they would have put on
              clothing today. Such as the doublet, the poor point evolved in the
              fifteenth century into the doublet The doublet was a very
              important article of clothing during this time.
            </Text>
            <Text>
              In order to upgrade your looks we serve varios outfit like,
            </Text>
            <UnorderedList>
              <ListItem>Party wear</ListItem>
              <ListItem>Ethinic wear</ListItem>
              <ListItem>Casual wear </ListItem>
              <ListItem>Traditional wear</ListItem>
              <ListItem>Sports Wear</ListItem>
              <ListItem>Office Wear</ListItem>
              <ListItem>Street Wear</ListItem>
              <ListItem>Summer Wear</ListItem>
            </UnorderedList>
            <Box>
              <Center>
                {" "}
                <Link href="/component/Products/Products">
                  <Button
                    color="#fff"
                    mr="4"
                    p="8px 16px"
                    bg="#1751fd"
                    border=" 1px solid #8784848c;"
                    borderRadius="6px"
                    _hover={{ bg: "#000", color: "#fff" }}
                  >
                    Shop Now
                  </Button>{" "}
                </Link>
              </Center>
            </Box>
          </Box>
        </Box>
      </Flex>
      <Flex
        w="100%"
        display="flex"
        bg="#fff"
        p="15px"
        mb="50px"
        borderRadius="8px"
        boxShadow="0px 0px 30px #4c4b4b85"
      >
        <Box w="50%" ms="10px" p="25px">
          <Heading fontSize="48px" m={0} p="0">
            Women's Fashion
          </Heading>

          <Box>
            <Text fontSize="15px">
              Women's Fashion Women's Fashion of the 21st century has
              drastically changed since the Renaissance era. In today’s fashion
              you would never see men wearing what they wore in the Renaissance
              era. Some of the designs have carried over to our time, but not
              very many. The details they would have put on clothing during the
              Renaissance era, are different from the details they would have
              put on clothing today. Such as the doublet, the poor point evolved
              in the fifteenth century into the doublet The doublet was a very
              important article of clothing during this time.
            </Text>
            <Text>
              In order to upgrade your looks we serve varios outfit like,
            </Text>
            <UnorderedList>
              <ListItem>Party wear</ListItem>
              <ListItem>Ethinic wear</ListItem>
              <ListItem>Casual wear </ListItem>
              <ListItem>Traditional wear</ListItem>
              <ListItem>Sports Wear</ListItem>
              <ListItem>Office Wear</ListItem>
              <ListItem>Street Wear</ListItem>
              <ListItem>Summer Wear</ListItem>
            </UnorderedList>
            <Box w="100%">
              <Center>
                {" "}
                <Link href="/component/Products/Products" w="100%">
                  <Button
                    color="#fff"
                    mr="4"
                    w="100%"
                    p="8px 16px"
                    bg="#1751fd"
                    border=" 1px solid #8784848c;"
                    borderRadius="6px"
                    _hover={{ bg: "#000", color: "#fff" }}
                  >
                    Shop Now
                  </Button>{" "}
                </Link>
              </Center>
            </Box>
          </Box>
        </Box>
        <Spacer />
        <Box bg="#e780be" w="50%" borderRadius="8px" me="10px">
          <Box
            w="100%"
            h="100%"
            backgroundImage="url(/womenfashion.png)"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
          ></Box>
        </Box>
      </Flex>
    </Box>
  );
}
