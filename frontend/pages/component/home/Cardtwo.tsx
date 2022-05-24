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
const Procards = [
  {
    image:
      "https://cdn.shopify.com/s/files/1/0064/4435/1539/files/b1.png?v=1620209222",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0064/4435/1539/files/b2.png?v=1620209240",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0064/4435/1539/files/b3.png?v=1620209254",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0064/4435/1539/files/b4.png?v=1620209266",
  },
];
export default function Cardtwo() {
  return (
    <Box>
      <Box
        bg="#fff"
        mb="30px"
        p="20px"
        borderRadius="10px"
        boxShadow="0px 0px 30px #4c4b4b85"
      >
        <Box mb="20px">
          <Heading color="#000" m={0} fontSize="20px">
            Inspiration
          </Heading>
        </Box>
        <Box>
          <Grid templateColumns="repeat(2, 1fr)" gap={16}>
            {Procards.map((offers, index) => (
              <GridItem w="100%" key={index}>
                <Image
                  w="100%"
                  h="100%"
                  src={offers.image}
                  fallbackSrc={offers.image}
                  alt="Dan Abramov"
                />
              </GridItem>
            ))}
          </Grid>
        </Box>
      </Box>
    </Box>
  );
}
