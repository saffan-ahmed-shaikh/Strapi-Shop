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
import React from "react";

const Postscard = [
  {
    head: "Up to 70% off | Clearance store",
    image:
      "https://cdn.shopify.com/s/files/1/0064/4435/1539/files/s1_8b968f52-493e-4178-953b-dfb1597857fb.jpg?v=1638362212",
  },
  {
    head: "Top rated, premium quality | Amazon Brands & more",
    image:
      "https://images-na.ssl-images-amazon.com/images/G/31/Symbol/2020/00NEW/1242_450Banners/PL31_copy._CB432483346_.jpg",
  },
  {
    head: "Up to 50% off | T-shirts",
    image:
      "https://images.bewakoof.com/uploads/grid/app/Mid-Size-Banner-IPL-Men-1651833678.gif",
  },
];
export default function Posts() {
  return (
    <Box>
      <Box>
        {Postscard.map((deals, i) => (
          <Box
            mb="25px"
            bg="#fff"
            py="15px"
            px="15px"
            borderRadius="10px"
            boxShadow="0px 0px 30px #4c4b4b85"
            key={i}
          >
            <Box textAlign="start">
              <Heading fontSize="24px" w="100%" m="0px" color="#000">
                {deals.head}
              </Heading>
            </Box>
            <Box w="100%" mt="15px">
              <Box>
                <Image
                  w="100%"
                  h="100%"
                  src={deals.image}
                  fallbackSrc={deals.image}
                  alt="Dan Abramov"
                />
              </Box>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
