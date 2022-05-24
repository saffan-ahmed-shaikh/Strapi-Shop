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
const collections = [
  {
    title: "Casual wear series from local shops 24/7",
    image:
      "https://i.pinimg.com/736x/a6/d5/d5/a6d5d50e7119a756be7ed0b472401633.jpg",
  },
  {
    title: "Casual wear series from local shops 24/7",
    image:
      "https://cdn.shopify.com/s/files/1/0071/4755/2866/files/banner-5.jpg?v=1624878246",
  },
  {
    title: " Handpicked furniture collection from local shops",
    image: "https://m.media-amazon.com/images/I/81mLBoKkiyL._SX569_.jpg",
  },
];
export default function Namecard() {
  return (
    <Box>
      {collections.map((item, i) => (
        <Box
          bg="#fff"
          mb="30px"
          key={i}
          borderRadius="10px"
          p="20px"
          boxShadow="0px 0px 30px #4c4b4b85"
        >
          <Box p="0px" bg="#fff" m={0} borderRadius="10px">
            <Heading color="#000" m="0px 0px 10px 0px" fontSize="20px">
              {item.title}
            </Heading>
          </Box>
          <Box
            borderRadius="10px"
            height="223px"
            w="100%"
            backgroundImage={item.image}
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
          ></Box>
        </Box>
      ))}
    </Box>
  );
}
